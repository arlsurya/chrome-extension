let message = `Hello,
Congratulations on finishing your +2 exams! 🎉 Now it's time to kickstart your CEE/Engineering prep journey with Hamro Academy! 📚✨

Don't wait! Secure your spot now and get ready to ace your exams! 💪

Hamro Academy 🚀`;

let recipients = ["+977 981-7170133","+977 981-7170133","+977 981-7170133"];

// Function to send a message to a recipient
function sendMessage(recipient) {
    console.log("Sending message to:", recipient);

    return new Promise((resolve, reject) => {
        // Select the add button
        let addButton = document.querySelector('#app > div > div.two._aigs > div._aigv._aigw > header > header > div > span > div > span > div:nth-child(1) > div');
        
        // Select the search input field
        let searchInput = document.querySelector('div._ai05 > div.x1n2onr6 > div.x1hx0egp');

        // Clear any previous search text and type the recipient's phone number
        if (searchInput) {
            searchInput.textContent = '';
            searchInput.textContent = recipient;
        } else {
            console.error('Search input not found');
            reject('Search input not found');
            return;
        }

        // Function to check if the data element is available
        function waitForData(resolve, reject) {
            let data = document.querySelector('#reply_div > button:nth-child(1)');
            if (data) {
                // Click on the data element
                data.click();
                resolve();
            } else {
                // If data is not available, wait and check again
                setTimeout(() => {
                    waitForData(resolve, reject);
                }, 1000); // Check again after 1 second
            }
        }

        // Wait for a short delay to allow WhatsApp to load the recipient's chat
        setTimeout(() => {
            // Click on the chat with the recipient
            let chatWithRecipient = document.querySelector(`span[title='${recipient}']`);
            if (chatWithRecipient) {
                chatWithRecipient.click();

                // Call the function to check if the data element is available
                waitForData(resolve, reject);
            } else {
                console.error('Chat with recipient not found');
                reject('Chat with recipient not found');
            }
        }, 2000); // Adjust timing as needed

        console.log("Recipient:", recipient);
    });
}

// Loop through the recipients and send a message to each one with a delay between each iteration
async function sendMessageToRecipientsWithDelay(recipients, delay) {
    // Attach the click event listener outside of the loop
    let addButton = document.querySelector('#app > div > div.two._aigs > div._aigv._aigw > header > header > div > span > div > span > div:nth-child(1) > div');
    addButton.click();

    // Loop through recipients
    for (let i = 0; i < recipients.length; i++) {
        await sendMessage(recipients[i]);
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
