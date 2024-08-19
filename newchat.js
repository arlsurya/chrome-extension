let message = `Hello,
Congratulations on finishing your +2 exams! 🎉 Now it's time to kickstart your CEE/Engineering prep journey with Hamro Academy! 📚✨

Don't wait! Secure your spot now and get ready to ace your exams! 💪

Hamro Academy 🚀`;

let recipients = ["9779817170133", "9779817170133", "9779817170133"];

// Function to send a message to a recipient
function sendMessageToRecipient(recipient) {
    console.log("Sending message to:", recipient);
    window.open(`https://web.whatsapp.com/send/?phone=${recipient}`, '_self');
}

// Loop through the recipients and send a message to each one with a delay between each iteration
async function sendMessageToRecipientsWithDelay(recipients, delay) {
    for (let i = 0; i < recipients.length; i++) {
        sendMessageToRecipient(recipients[i]);
        await new Promise(resolve => setTimeout(resolve, delay)); // Delay between each message
    }
}

// Set the delay between each iteration (in milliseconds)
let delayBetweenIterations = 5000; // 5 seconds

// Start sending messages with the specified delay between each iteration
sendMessageToRecipientsWithDelay(recipients, delayBetweenIterations)
    .then(() => {
        console.log('All messages sent successfully.');
    })
    .catch(error => {
        console.error('Error:', error);
    });
