
document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.querySelector('#send');
    const numberInput = document.querySelector('#number');
    sendButton.addEventListener('click', function() {
        const phone = numberInput.value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const activeTab = tabs[0];
            chrome.runtime.sendMessage({
                action: "sendWhatsappMessage",
                phone: phone
            }, function(response) {
                console.log("Message sent to content script:", response);
            });
        });
    });
});
