const clientData = {
    "Suvarsha": {
        age: 18,
        email: "varsha@gmail.com",
        phone: "555-1234"
    },
    "Vishnu Priya": {
        age: 20,
        email: "v.priya@gmail.com",
        phone: "555-5678"
    },
    "Ketaki Jain": {
        age: 20,
        email: "k_jain@gmail.com",
        phone: "555-8765"
    }
};

document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') return;

    displayMessage(userInput, 'user-message');

    const response = getResponse(userInput);
    displayMessage(response, 'bot-message');

    document.getElementById('userInput').value = '';
}

function displayMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    document.getElementById('chatboxBody').appendChild(messageElement);
    document.getElementById('chatboxBody').scrollTop = document.getElementById('chatboxBody').scrollHeight;
}

function getResponse(userInput) {
    const name = userInput.toLowerCase().trim();
    for (const key in clientData) {
        if (key.toLowerCase() === name) {
            const data = clientData[key];
            return `Name: ${key}\nAge: ${data.age}\nEmail: ${data.email}\nPhone: ${data.phone}`;
        }
    }
    return "Sorry, I don't have information about that person.";
}
