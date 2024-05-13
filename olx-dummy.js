
window.onload = () => {
    document.getElementById('showItems').style.display = 'none';
}

function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert('Please fill all the fields');
        return;
    }
    document.getElementById('signup').style.display = 'none';
    document.getElementById('showItems').style.display = 'block';
    document.getElementById('username').innerHTML = 'Welcome ' + email;
}

function sendMessage() {
    $("#exampleModal").on('hide.bs.modal', function () {
      document.getElementById('message').value = '';
      let chat =  document.getElementById('chat');
      while (chat.firstChild) {
        chat.removeChild(chat.lastChild);
      }
    });
    const message = document.getElementById('message').value;
    const messageElement = document.createElement('p');
    messageElement.style.textAlign = 'center';
    messageElement.style.backgroundColor = 'lightblue';
    messageElement.style.color = 'black';
    messageElement.style.padding = '10px';
    messageElement.style.borderRadius = '10px';
    messageElement.style.margin = '10px';
    document.getElementById('message').value = '';
    document.getElementById('chat').appendChild(messageElement);
    if (message.toLowerCase() === 'hi') {   
        messageElement.innerHTML = message;
        setTimeout(() => {
            const replyElement = document.createElement('p');
            replyElement.innerHTML = 'Hello';
            replyElement.style.textAlign = 'center';
            replyElement.style.backgroundColor = 'lightgreen';
            replyElement.style.color = 'black';
            replyElement.style.padding = '10px';
            replyElement.style.borderRadius = '10px';
            replyElement.style.margin = '10px';
            document.getElementById('chat').appendChild(replyElement);
        }, 1000);
    }

    else if (message.toLowerCase() === 'i want to buy this product') {
        messageElement.innerHTML = message;
        setTimeout(() => {
            const replyElement = document.createElement('p');
            replyElement.innerHTML = 'Sure, You can buy this product from my residence at chandigarh sector 17. Please contact me at 8872688104 for more details. Thank you';
            replyElement.style.textAlign = 'center';
            replyElement.style.backgroundColor = 'lightgreen';
            replyElement.style.color = 'black';
            replyElement.style.padding = '10px';
            replyElement.style.borderRadius = '10px';
            replyElement.style.margin = '10px';
            document.getElementById('chat').appendChild(replyElement);
        }, 1000);
    }

    else {
        messageElement.innerHTML = message;  
        setTimeout(() => {
            const replyElement = document.createElement('p');
            replyElement.innerHTML = 'For more details Please contact me at 8872688104 for more details. Thank you';
            replyElement.style.textAlign = 'center';
            replyElement.style.backgroundColor = 'lightgreen';
            replyElement.style.color = 'black';
            replyElement.style.padding = '10px';
            replyElement.style.borderRadius = '10px';
            replyElement.style.margin = '10px';
            document.getElementById('chat').appendChild(replyElement);
        }, 1000);
    }

}

