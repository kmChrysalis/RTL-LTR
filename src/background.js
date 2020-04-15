// Create some radio items.

chrome.contextMenus.create({
	"id": "LTR",
	"title": "LTR (CSS Injection)",
	"type": "radio"
});

chrome.contextMenus.create({
	"id": "forceLTR",
	"title": "LTR (Force rewrite)",
	"type": "radio"
});

chrome.contextMenus.create({
	"id": "RTL",
	"title": "RTL (CSS Injection)",
	"type": "radio"
});

chrome.contextMenus.create({
	"id": "forceRTL",
	"title": "RTL (Force rewrite)",
	"type": "radio"
});

chrome.contextMenus.onClicked.addListener(function(command) {
	switch (command.menuItemId) {
		case "LTR":
			LTR();
			break;
		case "RTL":
			RTL();
			break;
		case "forceLTR":
			chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {direction: "LTR"}, function (response) {
					console.log(`Current direction is ${response.currentDirection}`);
				});
			});
			break;
		case "forceRTL":
			chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {direction: "RTL"}, function (response) {
					console.log(`Current direction is ${response.currentDirection}`);
				});
			});
			break;
	}
});

function RTL() {
	chrome.tabs.insertCSS({file: "../css/rtl.css"});
}

function LTR() {
	chrome.tabs.insertCSS({file: "../css/ltr.css"});
}