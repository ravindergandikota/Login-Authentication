document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform simple authentication (replace with your own logic)
    if (username === 'admin' && password === 'password') {
        showMessage('Login successful!', 'green');
    } else {
        showMessage('Incorrect username or password', 'red');
    }
});

function showMessage(message, color) {
    var messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
}