document.addEventListener("DOMContentLoaded", function () {
    const tipButtons = document.querySelectorAll(".tip-option");
    const selectedTipDisplay = document.getElementById("selected-tip");
    const paymentForm = document.getElementById("payment-form");
    let selectedTip = 0;
  
    // Event listener untuk tombol tips
    tipButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Hilangkan status active dari semua tombol
        tipButtons.forEach((btn) => btn.classList.remove("active"));
  
        // Tambahkan status active pada tombol yang dipilih
        button.classList.add("active");
  
        // Update nominal tips yang dipilih
        selectedTip = parseInt(button.getAttribute("data-tip"));
        selectedTipDisplay.textContent = `Nominal Tips: Rp${selectedTip.toLocaleString()}`;
      });
    });
  
    // Event listener untuk form submit
    paymentForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const selectedMethod = document.querySelector('input[name="payment"]:checked');
      if (!selectedMethod) {
        alert("Silakan pilih metode pembayaran.");
        return;
      }
  
      if (selectedTip === 0) {
        alert("Silakan pilih nominal tips.");
        return;
      }
  
      alert(`Nominal tips telah dipilih dengan metode pembayaran ${selectedMethod.value} sebesar Rp${selectedTip.toLocaleString()}. Silahkan cek email untuk melanjutkan pembayaran`);
      window.location.href = "homepage.html"; // Redirect ke homepage
    });
  });
  