chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addToGCal",
      title: "Add to Google Calendar",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "addToGCal") {
      const selectedText = encodeURIComponent(info.selectionText);
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${selectedText}&details=From+${encodeURIComponent(tab.title)}+-+${encodeURIComponent(tab.url)}`;
      chrome.tabs.create({ url: calendarUrl });
    }
  });
  