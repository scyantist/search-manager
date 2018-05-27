/*global chrome*/
export function storeSearchEngine(value) {
  chrome.storage.sync.set({'searchEngine': value}, function() {
    console.log(`Set search engine to ${value}`);
  })
}

export function getSearchEngine(callback) {
  chrome.storage.sync.get(['searchEngine'], callback);
}

export function storeSearchType(value) {
  console.log(`Set search type to ${value}`);
  chrome.storage.sync.set({'searchType': value}, function() {
  })
}

export function getSearchType(callback) {
  chrome.storage.sync.get(['searchType'], callback);
}

export function storeShowWeather(value) {
  chrome.storage.sync.set({'showWeather': value}, function() {
    console.log(`Set weather to ${value}`);
  })
}

export function getShowWeather(callback) {
  chrome.storage.sync.get(['showWeather'], callback);
}

export function storeShowClock(value) {
  chrome.storage.sync.set({'showClock': value}, function() {
    console.log(`Set clock to ${value}`);
  })
}

export function getShowClock(callback) {
  chrome.storage.sync.get(['showClock'], callback);
}

export function storeNTEnabled(value) {
  chrome.storage.sync.set({'nTEnabled': value}, function() {
    console.log(`Set nt enabled to ${value}`);
  })
}

export function getNTEnabled(callback) {
  chrome.storage.sync.get(['nTEnabled'], callback);
}

export function storeBackgroundColor(value) {
  chrome.storage.sync.set({'color': value}, function() {
    console.log(`Set background color to ${value}`);
  })
}

export function getBackgroundColor(callback) {
  chrome.storage.sync.get(['color'], callback);
}

export function storeBackgroundImage(value) {
  chrome.storage.sync.set({'image': value}, function() {
    console.log(`Set background image to ${value}`);
  })
}

export function getBackgroundImage(callback) {
  chrome.storage.sync.get(['image'], callback);
}
