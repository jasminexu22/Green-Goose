// Firebase authentication
const auth = firebase.auth();

const signUpForm = document.getElementById('signup-form');
const messageElement = document.getElementById('message');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            messageElement.textContent = `Account created successfully for ${user.email}`;
            signUpForm.reset();
        })
        .catch((error) => {
            messageElement.textContent = error.message;
        });
});
