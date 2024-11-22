document.addEventListener('DOMContentLoaded', () => {
    const PASSWORD = "HXX#02493";
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    const passwordContainer = document.getElementById('password-container');
    const blogContainer = document.getElementById('blog-container');

    passwordSubmit.addEventListener('click', () => {
        if (passwordInput.value === PASSWORD) {
            passwordContainer.classList.add('hidden');
            blogContainer.classList.remove('hidden');
        } else {
            passwordError.classList.remove('hidden');
        }
    });
});
