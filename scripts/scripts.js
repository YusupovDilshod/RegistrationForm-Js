
const form = document.getElementById('form');
const btn = document.querySelector('[type="submit"]')
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInputs()
})

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordTwoValue = passwordTwo.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required')
    } else {
        setSuccess(username)
    }

    if (emailValue === '') {
        setError(email, 'Eamil is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email adress')
    } else {
        setSuccess(email)
    }

    if (passwordValue === '') {
        setError(password, 'Password is required')
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 chracter')
    } else {
        setSuccess(password)
    }

    if (passwordTwoValue === '') {
        setError(passwordTwo, 'Please confirm your password')
    } else if (passwordTwoValue !== passwordValue) {
        setError(passwordTwo, 'Password doesn`t match')
    } else {
        setSuccess(passwordTwo)
    }

}



function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.error');
    small.innerText = message;
    formControl.className = 'input-control error';
}
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-control success ';
    const small = formControl.querySelector('.error');
    small.classList.add('hide')
}

const isValidEmail = email => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}


