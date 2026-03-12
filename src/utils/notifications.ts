import { texts } from '../config'
import { random } from './misc'

export let currentNotification = null as NotificationHandler

/**
 * Show Figma notifications
 * @param message Message of notification
 * @param options Options of notifaction (see https://developers.figma.com/docs/plugins/api/properties/figma-notify/#options)
 */
export function notify(message: string, options: NotificationOptions = {}) {
	if (currentNotification != null) {
		currentNotification.cancel()
	}
	currentNotification = figma.notify(message, options)
}

export function showFinishNotification(count: number, customMessage?: string) {
	if (customMessage) {
		notify(customMessage)
		return
	}
	let message = count === 0 ?
		`${random(texts.idleMessages)}` :
		`${random(texts.actionMessages)} ${count} ${count === 1 ? texts.entity.singular : texts.entity.plural}`
	notify(`${message}`)
}

export function clearNotifications() {
	currentNotification?.cancel()
}