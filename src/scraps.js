//This file contains only my scraps

/*
function RTL(info, tab) {
	chrome.tabs.insertCSS(tab.id, {file:"rtl.css"});
	chrome.tabs.executeScript(tab.id, {code: "document.documentElement.dir = 'rtl'"});
}

function LTR(info, tab) {
	chrome.tabs.insertCSS(tab.id, {file:"ltr.css"});
	chrome.tabs.executeScript(tab.id, {code: "document.documentElement.dir = 'ltr'"});
}
*/

/*
chrome.commands.onCommand.addListener(function(command) {
	console.log(command);
	if (command === "RTL") RTL();
	if (command === "LTR") LTR();
});*/

/*
chrome.tabs.onUpdated.addListener(function () {
	let links = document.getElementsByTagName('link');
	Array.from(links).forEach(function removeAllRtl(e) {
		if (e.getAttribute('href').includes('all-rtl')) {
			console.log(e.getAttribute('href'));
			e.removeAttribute('href');
		}
	});
});
*/

/*chrome.tabs.executeScript({code: "document.documentElement.dir = 'ltr'"});*/
/*chrome.tabs.executeScript({code: "document.documentElement.dir = 'rtl'"});*/
/*pElement.style.direction = "rtl";*/
/*pElement.style.direction = "ltr";*/