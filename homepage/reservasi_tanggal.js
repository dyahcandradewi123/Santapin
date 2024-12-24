const reviewForm = document.getElementById("review-form");
const reviewsContainer = document.getElementById("reviews-container");
const reviewCountElement = document.getElementById("review-count");
let selectedRating = 0;

// Handle rating selection
const stars = document.querySelectorAll("#rating-stars span");
stars.forEach(star => {
  star.addEventListener("click", function () {
    selectedRating = parseInt(this.dataset.value);
    stars.forEach(s => s.classList.remove("selected"));
    this.classList.add("selected");
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("selected");
    }
  });
});

// Handle form submission
reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const menu = document.getElementById("menu").value;
  const reviewText = document.getElementById("review-text").value;

  if (!menu || selectedRating === 0 || !reviewText) {
    alert("Silakan lengkapi semua data sebelum mengirimkan ulasan.");
    return;
  }

  // Tambahkan review baru ke list
  const reviewItem = document.createElement("div");
  reviewItem.classList.add("review-item");
  reviewItem.innerHTML = `
    <div class="header">
      <span>Pengguna Anonim</span>
      <span class="rating">${"★".repeat(selectedRating)}</span>
    </div>
    <div>${reviewText}</div>
    <div><strong>Menu:</strong> ${menu}</div>
  `;

  reviewsContainer.prepend(reviewItem);

  // Update jumlah review
  const currentCount = parseInt(reviewCountElement.textContent, 10);
  reviewCountElement.textContent = currentCount + 1;

  // Reset form
  reviewForm.reset();
  selectedRating = 0;
  stars.forEach(s => s.classList.remove("selected"));
});
