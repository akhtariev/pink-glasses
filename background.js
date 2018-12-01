alert("Extension loaded.");

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'localhackday.mlh.io'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
})