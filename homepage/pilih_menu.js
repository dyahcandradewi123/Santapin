const menuContainer = document.getElementById("menu-container");
const paginationButtons = document.querySelectorAll(".page-btn");
const backButton = document.getElementById("back-button");

// Array of menu data with relative image paths
const menuData = [
  { image: "homepage\images\bakmie.jpg", title: "Kerang Balado Asli Nusa Tenggara" },
  { image: "images/image2.jpg", title: "Kerang Bumbu Kuning Khas Makassar" },
  { image: "images/image3.jpg", title: "Udang Asam Manis" },
  { image: "images/image4.jpg", title: "Ikan Bakar Jimbaran" },
  { image: "images/image5.jpg", title: "Sup Ikan Kuah Asam" },
  { image: "images/image6.jpg", title: "Cumi-Cumi Goreng Tepung" },
  { image: "images/image7.jpg", title: "Pepes Ikan Peda" },
  { image: "images/image8.jpg", title: "Lobster Saus Padang" },
  { image: "images/image9.jpg", title: "Gurame Goreng Kremes" },
  // Repeat to simulate 3 pages
  ...Array(18).fill({ image: "images/image1.jpg", title: "Kerang Balado Asli Nusa Tenggara" }),
];

// Current page state
let currentPage = 1;
const itemsPerPage = 9;

// Function to render menu items for a given page
function renderMenuItems(page) {
  menuContainer.innerHTML = ""; // Clear previous items
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = menuData.slice(startIndex, endIndex);

  currentItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <button>Tambah</button>
    `;
    menuContainer.appendChild(menuItem);
  });
}

// Function to handle pagination
function handlePagination(event) {
  const button = event.target;
  if (!button.classList.contains("page-btn")) return;

  // Update current page and re-render items
  currentPage = parseInt(button.dataset.page, 10);
  renderMenuItems(currentPage);

  // Update active button state
  paginationButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

// Go back to the previous page
backButton.addEventListener("click", () => {
  window.history.back(); // Simulate going back to the previous page
});

// Initial render
renderMenuItems(currentPage);

// Attach event listener for pagination buttons
document.querySelector("footer").addEventListener("click", handlePagination);
