document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll("#star-rating .star");
    const reviewForm = document.getElementById("review-form");
    const reviewsContainer = document.getElementById("reviews-container");
    const reviewCount = document.getElementById("review-count");
    let selectedRating = 0;
  
    // Handle star rating selection
    stars.forEach((star) => {
      star.addEventListener("click", function () {
        selectedRating = parseInt(this.getAttribute("data-value"));
        stars.forEach((s) => s.classList.remove("selected"));
        for (let i = 0; i < selectedRating; i++) {
          stars[i].classList.add("selected");
        }
      });
    });
  
    // Handle review submission
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const menu = document.getElementById("menu").value;
      const reviewText = document.getElementById("review-text").value;
  
      if (!menu || selectedRating === 0 || !reviewText) {
        alert("Silakan lengkapi semua data sebelum mengirimkan ulasan.");
        return;
      }
  
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `
        <div class="review-header">
          <div class="profile">
            <img src="https://via.placeholder.com/50" alt="Avatar" class="profile-pic">
            <span>Anda</span>
          </div>
          <div class="review-meta">
            <span class="rating">${"★".repeat(selectedRating)}</span>
            <span class="review-date">${new Date().toLocaleDateString()}</span>
          </div>
        </div>
        <p class="review-text">${reviewText}</p>
        <div class="menu-info">
          <img src="https://via.placeholder.com/60" alt="Menu" class="menu-pic">
          <strong>Menu Pilihan Saya:</strong> ${menu}
        </div>
      `;
  
      reviewsContainer.prepend(reviewItem);
      reviewCount.textContent = parseInt(reviewCount.textContent) + 1;
  
      reviewForm.reset();
      selectedRating = 0;
      stars.forEach((s) => s.classList.remove("selected"));
    });
  });
  