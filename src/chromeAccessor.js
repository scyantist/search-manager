/*global chrome*/
export function storeSearchEngine(value) {
  chrome.storage.sync.set({"engine": value}, function() {
    console.log(`Set search engine to ${value}`);
  })
}

export function storeSearchEngine(value) {
  chrome.storage.sync.set({"engine": value}, function() {
    console.log(`Set search engine to ${value}`);
  })
}
