/*
===============================================================================
 This JS file may be used to customize the YunoHost user portal *and* also
 will be loaded in all app pages if the app nginx's conf does include the
 appropriate snippet.

 You can monkeypatch init_portal (loading of the user portal) and
 init_portal_button_and_overlay (loading of the button and overlay...) to do
 custom stuff
===============================================================================
*/


{
  // eslint-disable-next-line no-undef
  init_portal_original = init_portal
  // eslint-disable-next-line no-undef
  init_portal = function() {
    // eslint-disable-next-line no-undef
    init_portal_original()
    document.querySelector('link[rel~=\'icon\']').href = 'https://www.imalonelynerd.fr/favicon.png'
    setImagesForApps()
    setThemeAccordingToTime()
  }
}

let apps = {
  'EventHorizon': 'https://www.imalonelynerd.fr/icons/projects/calendar.png',
  'LibreSpeed': 'https://www.imalonelynerd.fr/icons/speed.png',
  'LinuxDash': 'https://www.imalonelynerd.fr/icons/dash.png',
  'LonelyIsland': 'https://www.imalonelynerd.fr/favicon.png',
  'Nextcloud': 'https://www.imalonelynerd.fr/icons/nextcloud.png',
  'PrettyHeroes': 'https://www.imalonelynerd.fr/icons/projects/prettyheroes.png',
  'Roundcube': 'https://www.imalonelynerd.fr/icons/mail.png',
  'Send': 'https://www.imalonelynerd.fr/icons/send.png',
  'Talisman': 'https://www.imalonelynerd.fr/icons/projects/talisman.png'
}

let theme_index
let theme_list = ['day', 'twilight', 'night', 'comet']


function setThemeAccordingToTime() {
  let time = new Date().getHours()
  if (time > 0 && time <= 7) {
    _setTheme('comet')
  } else if (time > 7 && time <= 12) {
    _setTheme('day')
  } else if (time > 12 && time <= 17) {
    _setTheme('twilight')
  } else {
    _setTheme('night')
  }
}

// eslint-disable-next-line no-unused-vars
function _swipeTheme() {
  _setTheme(theme_list[(theme_index + 1) % 4])
}

function _setTheme(theme) {
  console.log(theme)
  let img = document.getElementById('theme-sw')
  if (img !== null) {
    img.src = `https://www.imalonelynerd.fr/icons/themes/${theme}.png`
  }
  document.querySelector('html').dataset.theme = theme
  theme_index = theme_list.indexOf(theme)
}

function setImagesForApps() {
  let elem = document.getElementsByClassName('listing-apps')[0]
  if (elem === undefined) {
    return
  }
  let elems = elem.children
  for (let e = 0; e < elems.length; e += 1) {
    if (elems[e] !== undefined) {
      let el = elems[e].children[0]
      if (apps[el.attributes['data-appname'].nodeValue] !== undefined) {
        el.getElementsByClassName('first-letter')[0].remove()
        let img = new Image()
        img.src = apps[el.attributes['data-appname'].nodeValue]
        img.classList.add('app-image')
        el.prepend(img)
      }
    }
  }
  let themebtn = document.createElement('li')
  themebtn.innerHTML = `
    <a class="app-tile" onclick="_swipeTheme()" data-appname="Theme">
      <img src="https://www.imalonelynerd.fr/icons/theme.png" class="app-image" id="theme-sw">
      <span class="name">Switch theme</span>
    </a>`
  elem.appendChild(themebtn)
}


