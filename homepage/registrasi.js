// Class untuk menangani login
class LoginForm {
    constructor(emailInputId, passwordInputId, formId) {
        this.emailInput = document.getElementById(emailInputId);
        this.passwordInput = document.getElementById(passwordInputId);
        this.form = document.getElementById(formId);
        this.initialize();
    }

    // Method untuk memulai event listener
    initialize() {
        this.form.addEventListener('submit', (event) => {
            if (!this.validateForm()) {
                event.preventDefault(); // Mencegah form dikirim jika tidak valid
            }
        });
    }

    // Method untuk validasi form
    validateForm() {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        if (email === '' || password === '') {
            alert('Both fields must be filled out');
            return false;
        }

        return true;
    }
}

// Inisialisasi class LoginForm setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = new LoginForm('email', 'password', 'loginForm');
});
