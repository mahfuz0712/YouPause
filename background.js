// Function to inject the content script into a YouTube tab
function injectContentScript(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['content.js']
  });
}

// Listen for tab switching (when the user switches between tabs)
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      injectContentScript(activeInfo.tabId);
    }
  });
});

// Listen for tab updates (e.g., when the user navigates or reloads a page)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes("youtube.com/watch")) {
    injectContentScript(tabId);
  }
});
