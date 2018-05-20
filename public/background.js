function openNewSearchManager() {
  var newURL = "./index.html";
  chrome.tabs.create({ url: newURL });
}
chrome.browserAction.onClicked.addListener(function(activeTab)
{
  openNewSearchManager();
});

chrome.commands.onCommand.addListener(function(command) {
  // Users can bind a key to this command in their Chrome
  // keyboard shortcuts, at the bottom of their extensions page.
  if (command == 'open-search-manager') {
    openNewSearchManager();
  }
});