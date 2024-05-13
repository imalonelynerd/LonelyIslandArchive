import { DefaultNotificationType, useNotifications } from '@/common/jsAssets/notificationSupport.js'

/**
 * Changes the current location to $href with a <a> tag.
 * If $redirect is true, the location occurs in the same tab the event occured.
 * Otherwise, the location will be accessed from a new tab.
 * @param href
 * @param redirect
 */
export function changeLoc(href, redirect = true) {
  let a = document.createElement('a')
  a.href = href
  if (redirect) {
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
  }
  a.click()
}

/**
 * Opens the user's default mail client and creates a new message with $mail as the recipient.
 * @param mail
 */
export function mailTo(mail) {
  let email = document.createElement('a')
  email.href = 'mailto:' + mail
  email.click()
}

/**
 * Copy $text into the user's clipboard.
 * If $notify is true, a notification will be sent.
 * This feature requires notificationSupport and NotificationArea to be imported and loaded into
 * the Vue project.
 * @param text
 * @param notify
 */
export function copyText(text, notify = false) {
  navigator.clipboard.writeText(text).then(() => {
      if (notify) {
        useNotifications().pushNotification('Copied successfully', text, DefaultNotificationType.Notice)
      }
    }
  )
}