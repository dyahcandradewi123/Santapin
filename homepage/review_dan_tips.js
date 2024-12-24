document.addEventListener("DOMContentLoaded", function () {
    let selectedRating = 0;

    const stars = document.querySelectorAll("#star-rating i");
    stars.forEach(star => {
        // Highlight the stars on hover
        star.addEventListener("mouseover", () => highlightStars(star));
        // Reset stars on mouse out
        star.addEventListener("mouseout", resetStars);
        // Set the rating on click
        star.addEventListener("click", () => setRating(star));
    });

    function highlightStars(star) {
        resetStars();  // Reset all stars to their normal state
        const value = parseFloat(star.getAttribute("data-value"));
        stars.forEach(s => {
            const starValue = parseFloat(s.getAttribute("data-value"));
            if (starValue <= value) {
                s.classList.add("full");
            }
        });
    }

    function resetStars() {
        stars.forEach(star => star.classList.remove("full"));
        stars.forEach(star => {
            const starValue = parseFloat(star.getAttribute("data-value"));
            if (starValue <= selectedRating) {
                star.classList.add("full");
            }
        });
    }

    function setRating(star) {
        selectedRating = parseFloat(star.getAttribute("data-value"));
        resetStars(); // Update the visual display of stars
    }

    document.getElementById("submit-review").addEventListener("click", function () {
        const restaurantName = document.getElementById("restaurant-name").textContent;
        const menuName = document.getElementById("menu-select").value;
        const reviewText = document.getElementById("review-text").value;

        if (menuName && reviewText && selectedRating > 0) {
            addReview(restaurantName, menuName, reviewText, selectedRating);
            updateFoodReview(menuName, reviewText);
            clearForm();
        } else {
            alert("Please fill all fields and select a rating.");
        }
    });

    function addReview(restaurantName, menuName, reviewText, rating) {
        const reviewsList = document.getElementById("reviews-list");
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");

        const reviewContent = `
            <h3>${restaurantName} - ${menuName}</h3>
            <div class="rating">${renderStars(rating)}</div>
            <p>${reviewText}</p>
        `;
        reviewItem.innerHTML = reviewContent;
        reviewsList.appendChild(reviewItem);
    }

    function renderStars(rating) {
        let starHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starHTML += '<i class="fas fa-star full"></i>';
            } else {
                starHTML += '<i class="fas fa-star"></i>';
            }
        }
        return starHTML;
    }

    function updateFoodReview(menuName, reviewText) {
        const foodReviews = {
            "Tacos": document
