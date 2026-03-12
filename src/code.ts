import { clearNotifications, notify, showFinishNotification } from './utils/notifications'
import { c } from './utils/misc'
import { ui } from './config'

let count: number = 0


figma.showUI(__html__, { themeColors: true, width: ui.width, height: ui.height, })
// Listen to messages from the UI
figma.ui.onmessage = (msg) => {
  c(msg)
}

run()

async function run() {
  figma.on('currentpagechange', cancel)
  const selection = figma.currentPage.selection

  // Anything selected?
  if (selection.length)
    for (const node of selection)
      await mainFunction(node)
  else
    await mainFunction(figma.currentPage)
  //finish()
}

// Action for selected nodes
async function mainFunction(node: SceneNode | PageNode) {
  c(node)
  count++
}

// Planned finish
function finish() {
  showFinishNotification(count)
  figma.closePlugin()
}

// Forced interruption
function cancel() {
  clearNotifications()
  notify("Plugin work have been interrupted")
}