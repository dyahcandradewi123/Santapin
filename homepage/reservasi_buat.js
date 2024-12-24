// Class untuk menangani login
class ReservasiForm {
    constructor(namaInputId, teleponInputId, emailInputId, jumlahorangInputId,form) {
        this.namaInput = document.getElementById(namaInputId);
        this.teleponInput = document.getElementById(teleponInputId);
        this.emailInput = document.getElementById(emailInputId);
        this.jumlahorangInput = document.getElementById(jumlahorangInputId);
        this.form = document.getElementById(formId);
        this.initialize();
    }

    // Method untuk memulai event listener
    initialize() {
        this.form.addEventListener('Selanjutnya', (event) => {
            if (!this.validateForm()) {
                event.preventDefault(); // Mencegah form dikirim jika tidak valid
            }
        });
    }

     // Method untuk validasi form
    validateForm() {
        const nama = this.namaInput.value;
        const telepon = this.teleponInput.value;
        const email = this.emailInput.value;
        const jumlahorang = this.jumlahorangInput.value;
        const password = this.passwordInput.value;

        if (nama === '' || telepon === ''|| jumlahorang === '' || password === '') {
            alert('Both fields must be filled out');
            return false;
        }

        return true;
    }

}

// Inisialisasi class LoginForm setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const ReservasiForm = new ReservasiForm('nama','telepon', 'email', 'jumlah orang');
});
