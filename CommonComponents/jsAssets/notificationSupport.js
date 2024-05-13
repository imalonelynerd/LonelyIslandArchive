import { ref } from 'vue'

/**
 * IMPORTANT :
 * - The user is strongly encouraged to make a custom enum in order to set its own colors and images.
 * An "interface" INotificationType will be provided in the near future.
 * - In order for the Notifications icons to display properly, the icons contained in "notifications"
 * must be moved into an accessible place, and their path must be provided below.
 */
const NOTIF_IMAGE_LOCATION = '/icons/notifications/'

/**
 * This global variable is temporary, will be replaced with provide/inject.
 * @type {NotificationSupport | null}
 * @private
 */
let _notifications = null

/**
 * This class shouldn't be instanced directly, use setupNotifications() instead.
 */
class NotificationSupport {
  _notificationList = ref([])
  notificationList = this._notificationList.value
  _timeout = 5

  constructor(timeout = 5) {
    this._timeout = timeout
  }

  /**
   * Removes one notification (the oldest) from the notification list.
   * Shouldn't be used directly, unless reimplementing NotificationArea is needed.
   */
  popNotification() {
    this._notificationList.value.shift()
  }

  /**
   * Add a new notification in all rendered NotificationArea.
   * The notification is defined in a $type (implements INotificationType), with a title $title, and
   * a $description.
   * @param title
   * @param content
   * @param type
   */
  pushNotification(title, content, type) {
    this._notificationList.value.push({
      'title': title,
      'content': content,
      'type': type === undefined ? DefaultNotificationType.Notice : type
    })
    setTimeout(() => this.popNotification(), this._timeout * 1000)
  }
}

/**
 * Returns the NotificationSupport model. Equivalent to using $notifications inside templates.
 * @returns {NotificationSupport|null}
 */
export function useNotifications() {
  return _notifications
}

/**
 * Makes a Vue App object $app able to use notifications.
 * Lets you set up the timeout after which a notification will disappear with $timeout.
 * @param app
 * @param timeout
 */
export function setupNotifications(app, timeout = 5) {
  _notifications = new NotificationSupport(timeout)
  app.config.globalProperties.$notifications = _notifications
}

/**
 * Default notification types, used in other common modules.
 * Can be used as long as the path and CSS variables are set correctly.
 */
export class DefaultNotificationType {
  static Notice = new DefaultNotificationType('var(--color2)', NOTIF_IMAGE_LOCATION + 'notice.png')
  static Empty = new DefaultNotificationType('var(--color2)', '')
  static Error = new DefaultNotificationType('var(--color3)', NOTIF_IMAGE_LOCATION + 'error.png')
  static Event = new DefaultNotificationType('var(--color3)', NOTIF_IMAGE_LOCATION + 'event.png')

  constructor(color, image) {
    this.color = color
    this.image = image
  }
}