function copyToClipboard() {
    const textToCopy = "Your link or text here"; // Replace with actual text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

function notify(message, duration) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, duration);
}

function openEvent(eventNumber) {
    // Logic to open event details, e.g., in a modal or new page
    alert(`Opening event ${eventNumber}`);
}
