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
            event.preventDefault(); // Mencegah form dikirim secara default
            if (this.validateForm()) {
                this.login(); // Lakukan aksi login
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
     // Method untuk menangani login
     login() {
        // Contoh login sederhana
        alert('Login successful!');
        window.location.href = 'homepage.html'; // Redirect ke halaman homepage
    }
}

// Inisialisasi class LoginForm setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    new LoginForm('email', 'password', 'loginForm');
});
