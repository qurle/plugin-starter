import { clearNotifications, notify, showFinishNotification } from './helpers/notifications'
import { c } from './helpers/misc'
import { ui } from './config'

let count: number = 0

figma.on('currentpagechange', cancel)
figma.showUI(__html__, { themeColors: true, width: ui.width, height: ui.height, })
// Listen to messages from the UI
figma.ui.onmessage = (msg) => {
  c(msg)
}

run()

async function run() {
  const selection = figma.currentPage.selection

  if (!selection.length)
    return

  // Sending data to UI
  figma.ui.postMessage({
    type: 'selection',
    data: {
      selection,
    }
  })

  for (const node of selection)
    await handleNode(node)
}

// Action for selected nodes
async function handleNode(node: SceneNode | PageNode) {
  c(node)
  count++
}

// Planned finish
function finish() {
  showFinishNotification(count)
  // figma.closePlugin()
  // (usually not needed for UI plugins)
}

// Forced interruption
function cancel() {
  clearNotifications()
  notify("Plugin work have been interrupted")
}