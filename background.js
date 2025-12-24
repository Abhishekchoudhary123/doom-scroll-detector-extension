chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    if (tab.url.includes("youtube.com")) {
      chrome.tabs.sendMessage(tabId, { type: "DISTRACTION" });
    }
  }
});
