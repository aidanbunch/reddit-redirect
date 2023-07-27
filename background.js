// Define the listener function
function redirect(subreddit) {
	let url = "https://www.reddit.com/r/" + subreddit;
	chrome.tabs.update(null, { url: url });
}

// Add the listener when profile with extension is used
chrome.runtime.onStartup.addListener(function () {
	chrome.omnibox.onInputEntered.addListener(redirect);
});

// Add the listener on extension install
chrome.runtime.onInstalled.addListener(function () {
	chrome.omnibox.onInputEntered.addListener(redirect);
});

// Remove the listener when the page is unloaded
chrome.runtime.onSuspend.addListener(function () {
	chrome.omnibox.onInputEntered.removeListener(redirect);
});

// Add the listener when the app won't be unloaded after all
chrome.runtime.onSuspendCanceled.addListener(function () {
	chrome.omnibox.onInputEntered.addListener(redirect);
});