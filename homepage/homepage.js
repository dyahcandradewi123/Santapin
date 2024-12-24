// // Change navbar background on scroll
// window.addEventListener("scroll", function() {
//     let header = document.querySelector(".header");
//     header.classList.toggle("scrolled", window.scrollY > 50);
// });

// Change navbar background on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header"); // Select the header element
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
    }
});

