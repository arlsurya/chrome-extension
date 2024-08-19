// content.js or background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "sendWhatsappMessage") {
        // Your code to send the WhatsApp message goes here
        // For example:
        console.log("Sending WhatsApp message:", message.phone);
        const whatsappURL = `https://web.whatsapp.com/send/?phone=${message.phone}`;
        chrome.tabs.update(sender.tab.id, { url: whatsappURL }, function () {
            console.log('WhatsApp URL updated');
        });
    }
});
