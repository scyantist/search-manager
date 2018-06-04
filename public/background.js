function openNewSearchManager() {
  var newURL = "./index.html";
  chrome.tabs.create({ url: newURL });
}
chrome.browserAction.onClicked.addListener(function(activeTab)
{
  openNewSearchManager();
});

