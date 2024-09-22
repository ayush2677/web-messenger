const socket = io(); // Initialize Socket.IO

document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value;

    if (messageText.trim() !== '') {
        socket.emit('chat message', messageText); // Send the message to the server
        input.value = '';
    }
}

// Listen for chat messages from the server
socket.on('chat message', (msg) => {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = msg;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
});

