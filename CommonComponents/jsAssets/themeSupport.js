import { getCookie, setCookie } from '../jsAssets/cookieTools.js'
import { DefaultNotificationType, useNotifications } from '@/common/jsAssets/notificationSupport.js'

/**
 * This global variable is temporary, will be replaced with provide/inject.
 * @type {ThemeSupport | null}
 * @private
 */
let _theme = null

/**
 * Requires cookieTools to be imported.
 * Requires notificationSupport and NotificationArea to be imported and loaded into
 * the Vue project.
 * This class shouldn't be instanced directly, use setupThemes() instead.
 */
class ThemeSupport {
  _themeEnum
  _themeList
  _dayTheme
  _nightTheme

  constructor(themeEnum, dayTheme, nightTheme) {
    this._themeEnum = themeEnum
    this._themeList = themeEnum.getThemes()
    if (this._themeList.includes(dayTheme)
      && this._themeList.includes(nightTheme)) {
      this._dayTheme = dayTheme
      this._nightTheme = nightTheme
    }
    this.setThemeFromCookie()
  }

  /**
   * Changes the website theme according to the enum item $theme.
   * Any $theme implementing ITheme should work.
   * No checks are made on $theme to assert whether the item is part of $themeEnum or not.
   * If $theme is undefined or null, the first theme accessible in $themeEnum will be used instead.
   * If $notify is true, a notification will be sent announcing whether the change succeed or not.
   * This feature requires notificationSupport and NotificationArea to be imported and loaded into
   * the Vue project.
   * @param theme
   * @param notify
   */
  switchTheme(theme, notify = true) {
    if (theme === null || theme === undefined) {
      if (notify) {
        useNotifications().pushNotification('Something went wrong', `Sorry for that...`, DefaultNotificationType.Error)
      }
      theme = this._themeList[0]
    }
    switch (theme) {
      case SpecialTheme.System:
        this._systemThemeHandler()
        break
      case SpecialTheme.Time:
        this._timeThemeHandler()
        break
      case SpecialTheme.Random:
        this._randomThemeHandler()
        break
      default:
        document.querySelector('html').dataset.theme = theme.tag
        setCookie('theme', theme.tag)
        if (notify) {
          useNotifications().pushNotification('Theme set successfully', `Set to : "${theme.name}".`, DefaultNotificationType.Notice)
        }
    }
  }

  _systemThemeHandler() {
    const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    this.switchTheme(isOsDark ? this._dayTheme : this._nightTheme)
    setCookie('theme', 'system')
  }

  /*timeThemeHandler() {
    let time = new Date().getHours()
    if (time > 7 && time <= 12) {
      this.switchTheme(this._themeEnum[0])
    } else if (time > 12 && time <= 17) {
      this.switchTheme(this._themeEnum[1])
    } else if (time > 17 && time <= 0) {
      this.switchTheme(this._themeEnum[2])
    } else {
      this.switchTheme(this._themeEnum[3])
    }
    setCookie('theme', 'time')
  }*/

  _timeThemeHandler() {
    let t = new Date().getHours()
    if (t > 17 || t < 7) {
      this.switchTheme(this._nightTheme)
    } else {
      this.switchTheme(this._dayTheme)
    }
    setCookie('theme', 'time')
  }

  _randomThemeHandler() {
    let th
    do {
      th = this._themeList[this._rd(0, this._themeList.length - 1)]
    } while (th.tag === document.querySelector('html').dataset.theme)
    this.switchTheme(th)
    setCookie('theme', 'random')
  }


  /**
   * Changes the theme according to the "theme" cookie.
   * If the cookie doesn't exist, the first theme accessible in $themeEnum will be used instead.
   * Supports "special themes" by default, as long as $themeEnum, $dayTheme and $nightTheme are
   * correctly initialized.
   */
  setThemeFromCookie() {
    let cookie = getCookie('theme')
    let res
    switch (cookie) {
      case '':
        res = this._themeList[0]
        break
      case 'system':
        res = SpecialTheme.System
        break
      case 'time':
        res = SpecialTheme.Time
        break
      case 'random':
        res = SpecialTheme.Random
        break
      default:
        res = this._themeEnum.getTheme(cookie)
        break
    }
    this.switchTheme(res, false)
  }

  _rd(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

/**
 * Special themes, should be usable as long as ThemeSupport is correctly initialized.
 */
export class SpecialTheme {
  static System = new SpecialTheme('system')
  static Random = new SpecialTheme('random')
  static Time = new SpecialTheme('time')

  constructor(tag) {
    this.tag = tag
  }
}

/**
 * Returns the ThemeSupport model. Equivalent to using $themes inside templates.
 * @returns {ThemeSupport|null}
 */
export function useThemes() {
  return _theme
}

/**
 * Makes a Vue App object $app able to use themes.
 * Lets you set up the $themeEnum, $dayTheme and $nightTheme.
 * @param app
 * @param themeEnum
 * @param dayTheme
 * @param nightTheme
 */
export function setupThemes(app, themeEnum, dayTheme, nightTheme) {
  _theme = new ThemeSupport(themeEnum, dayTheme, nightTheme)
  app.config.globalProperties.$themes = _theme
}