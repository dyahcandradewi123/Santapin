// Placeholder for future interactivity
console.log("Santap.in Page Loaded");
// Pastikan script hanya berjalan ketika elemen tombol filter ditemukan
const filterButtons = document.querySelectorAll('.filter-buttons button');

if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Debug log untuk memastikan tombol diklik
            console.log(`Button "${button.textContent}" clicked`);
            
            // Menghapus kelas 'active' dari semua tombol
            filterButtons.forEach((btn) => btn.classList.remove('active'));

            // Menambahkan kelas 'active' ke tombol yang diklik
            button.classList.add('active');
        });
    });
} else {
    console.warn('No filter buttons found!');
}
