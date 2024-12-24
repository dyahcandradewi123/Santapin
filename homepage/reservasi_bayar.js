document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah pengiriman form default

  // Mengecek apakah metode pembayaran sudah dipilih
  const selectedMethod = document.querySelector('input[name="payment"]:checked');
  if (selectedMethod) {
    // Tampilkan pop-up dengan pesan reservasi
    alert("Reservasi telah dibuat. Silahkan cek email untuk melakukan pembayaran.");
    window.location.href = "homepage.html";
  } else {
    // Jika belum memilih metode pembayaran, beri peringatan
    alert("Silakan pilih metode pembayaran.");
  }

  
});
