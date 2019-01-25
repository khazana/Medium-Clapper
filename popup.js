chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
 chrome.tabs.executeScript(null, {file: "js/jquery-3.2.1.min.js"});
        chrome.tabs.executeScript(null, {file: "payload.js"});
       
});
