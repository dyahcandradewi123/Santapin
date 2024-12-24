// Pilih semua elemen yang diperlukan
const paginationButtons = document.querySelectorAll(".page-btn");
const menuContainer = document.querySelector(".menu-container");
const allMenuItems = Array.from(document.querySelectorAll(".menu-item")); // Semua item menu
const tambahButtons = document.querySelectorAll(".tambah-btn");

const itemsPerPage = 6; // Jumlah item per halaman
let currentPage = 1; // Halaman saat ini

// Fungsi untuk menampilkan menu berdasarkan halaman
function renderMenuItems(page) {
  // Hitung indeks awal dan akhir
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Tampilkan item yang sesuai
  allMenuItems.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = "block"; // Tampilkan
    } else {
      item.style.display = "none"; // Sembunyikan
    }
  });
}

// Fungsi untuk menangani pagination
function handlePagination(event) {
  const button = event.target;

  // Pastikan tombol yang diklik adalah tombol halaman
  if (!button.classList.contains("page-btn")) return;

  // Perbarui halaman saat ini
  currentPage = parseInt(button.textContent, 10);

  // Render ulang menu berdasarkan halaman
  renderMenuItems(currentPage);

  // Perbarui status aktif pada tombol
  paginationButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}


// Tambahkan event listener untuk tombol pagination
paginationButtons.forEach((button) => {
  button.addEventListener("click", handlePagination);
});


// Tampilkan menu pertama kali
renderMenuItems(currentPage);
