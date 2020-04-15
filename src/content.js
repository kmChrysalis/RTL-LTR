
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let pElements = document.querySelectorAll('p');
    if (request.direction === "RTL") {
        Array.from(pElements).forEach(function switchDirection(pElement) {
            pElement.style.textAlign = "right";

            pElement.setAttribute('dir', 'rtl');
        });
        sendResponse({currentDirection: "Right to Left"});
    }
    if (request.direction === "LTR") {
        Array.from(pElements).forEach(function switchDirection(pElement) {
            pElement.style.textAlign = "left";

            pElement.setAttribute('dir', 'ltr');
        });
        sendResponse({currentDirection: "Left to Right"});
    }
});