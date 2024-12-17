document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        const scrollCarousel = () => {
            items.forEach((item, index) => {
                item.style.transform = `translateX(${-100 * currentIndex}%)`;
            });
            currentIndex = (currentIndex + 1) % items.length;
        };

        // Immediately trigger the first scroll to avoid delay
        scrollCarousel();
        setInterval(scrollCarousel, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle a carousel's title synchronization
    function setupCarouselWithTitle(carouselId, titleId, interval = 3000) {
        const carousel = document.getElementById(carouselId);
        const titleElement = document.getElementById(titleId);
        const items = carousel.querySelectorAll(".carousel-item");
        let currentIndex = 0;

        function updateTitle() {
            const currentItem = items[currentIndex];
            const title = currentItem.getAttribute("data-title");
            titleElement.textContent = title || "No title available";
        }

        function rotateCarousel() {
            // Hide current slide
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % items.length;
            // Show next slide
            items[currentIndex].classList.add("active");
            updateTitle();
        }

        // Initialize: show the first title and slide immediately
        items[currentIndex].classList.add("active");
        updateTitle();

        // Start the interval for subsequent rotations
        setInterval(rotateCarousel, interval);
    }

    // Setup the first-year projects carousel and title
    setupCarouselWithTitle("first-year-projects", "first-year-title");

    // Setup the second-year projects carousel and title
    setupCarouselWithTitle("second-year-projects", "second-year-title");
});
