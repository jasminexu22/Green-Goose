const signInForm = document.getElementById('signin-form');
const messageElement = document.getElementById('message');

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm['email'].value;
    const password = signInForm['password'].value;

    // Hardcoded username and password for authentication
    const hardcodedUsername = "vivian.yuan.ca@gmail.com";
    const hardcodedPassword = "test";

    const hannieUsername = "RedDolphin5732@gmail.com";
    const hanniePassword = "123456!";
    if ((email === hardcodedUsername && password === hardcodedPassword) || (email === hannieUsername && password === hanniePassword)) {
        messageElement.textContent = "Sign in successful!";
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        messageElement.textContent = "Incorrect username or password!";
    }

    // Reset the form
    signInForm.reset();
});
