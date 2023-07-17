const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    const { elements: { email, password } } = this;
    
    if (!email.value || !password.value) alert('Please fill in all the fields!');

    const formData = new FormData(this);
    console.log(Object.fromEntries(formData));

    this.reset()
}