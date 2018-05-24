/*global chrome*/
export function storeSearchEngine(value) {
  chrome.storage.sync.set({'engine': value}, function() {
    console.log(`Set search engine to ${value}`);
  })
}

export function getSearchEngine(callback) {
  chrome.storage.sync.get(['engine'], callback);
}

export function storeShowWeather(value) {
  chrome.storage.sync.set({'weather': value}, function() {
    console.log(`Set weather to ${value}`);
  })
}

export function getShowWeather(callback) {
  chrome.storage.sync.get(['weather'], callback);
}

export function storeShowClock(value) {
  chrome.storage.sync.set({'clock': value}, function() {
    console.log(`Set clock to ${value}`);
  })
}

export function getClock(callback) {
  chrome.storage.sync.get(['clock'], callback);
}

export function storeNTEnabled(value) {
  chrome.storage.sync.set({'ntEnabled': value}, function() {
    console.log(`Set nt enabled to ${value}`);
  })
}

export function getNTEnabled(callback) {
  chrome.storage.sync.get(['ntEnabled'], callback);
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
