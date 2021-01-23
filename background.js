// Injects foreground script when Tab is activated
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => {
        console.log("Foreground running")
    })
})

// Injects foreground script when Tab is refreshed
chrome.tabs.onUpdated.addListener(tab => {
    chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => {
        console.log("Refresh Foreground running")
    })
})