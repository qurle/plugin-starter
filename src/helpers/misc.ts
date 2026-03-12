import { SHOW_LOGS } from '../config'

/**
 * Get random element from array
 * @param array Array of elements to picj
 */
export function random(array: any[]) {
	return array[Math.floor(Math.random() * array.length)]
}

/**
 * Put message to console when WRITE_LOGS is true
 * @param message Console message
 * @param type Show error or warning
 */
export function c(message: any = 'here', type?: 'error' | 'warn') {
	if (!SHOW_LOGS)
		return
	switch (type) {
		case 'error':
			console.error(message)
			break
		case 'warn':
			console.warn(message)
			break
		default:
			console.log(message)
	}
}

/**
 * Let Figma UI thread to take a little breath
 * @param delay Time to breath
 */
export async function wakeUpMainThread(delay = 1000) {
	return await new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}