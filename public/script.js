document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value;

    if (messageText.trim() !== '') {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;
        messagesContainer.appendChild(messageElement);
        
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }
}
