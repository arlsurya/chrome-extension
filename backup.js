const message = `Hello,
Congratulations on finishing your +2 exams! 🎉 Now it's time to kickstart your CEE/Engineering prep journey with Hamro Academy! 📚✨

Don't wait! Secure your spot now and get ready to ace your exams! 💪

Hamro Academy 🚀`;

const recipients = ["+977 981-7170133"];

// Function to send a message to a recipient
async function sendMessage(recipient) {
    console.log("Sending message to:", recipient);

    try {
        // Select the add button
        const addButton = await waitForSelector('#app > div > div.two._aigs > div._aigv._aigw > header > header > div > span > div > span > div:nth-child(1) > div');
        addButton.click();

        // Select the search input field
        const searchInput = await waitForSelector('div._ai05 > div.x1n2onr6 > div.x1hx0egp');

        if (searchInput) {
            searchInput.textContent = '';
            searchInput.textContent = recipient;
        } else {
            throw new Error('Search input not found');
        }

        // Wait for the recipient's chat to load
        const chatWithRecipient = await waitForSelector(`span[title='${recipient}']`);

        if (chatWithRecipient) {
            chatWithRecipient.click();

            // Wait for the chat input field to load
            const data = await waitForSelector('#reply_div > button:nth-child(1)');

            if (data) {
                data.click();
            } else {
                throw new Error('Chat input field not found');
            }
        } else {
            throw new Error('Chat with recipient not found');
        }

        console.log("Message sent to:", recipient);
    } catch (error) {
        console.error("Error sending message to:", recipient, error);
    }
}

// Function to wait for an element to be added to the DOM
async function waitForSelector(selector, timeout = 5000) {
    const startTime = Date.now();
    while (true) {
        const element = document.querySelector(selector);
        if (element) {
            return element;
        }
        if (Date.now() - startTime >= timeout) {
            throw new Error(`Timeout waiting for selector: ${selector}`);
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

// Loop through the recipients and send a message to each one with a delay between each iteration
async function sendMessageToRecipientsWithDelay(recipients, delay) {
    for (const recipient of recipients) {
        await sendMessage(recipient);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

// Set the delay between each iteration (in milliseconds)
const delayBetweenIterations = 5000; // 5 seconds

// Start sending messages with the specified delay between each iteration
sendMessageToRecipientsWithDelay(recipients, delayBetweenIterations);
