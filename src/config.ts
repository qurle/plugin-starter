// Enable console logging for debugging purposes
export const SHOW_LOGS = true

// Settings for UI window
export const ui = {
	width: 320,
	height: 640,
}

// Messages for notifications when an action is successfully completed
const actionMessages = [
	'Updated',
	'Affected',
	'Fixed'
]

// Messages for notifications when no changes are needed
const idleMessages = [
	'All great, already',
	"Nothing to do",
	"Nothing changed"
]

// Entity to count and display in notifications 
const entity = {
	singular: 'layer',
	plural: 'layers'
}

export const texts = {
	actionMessages, idleMessages, entity
}