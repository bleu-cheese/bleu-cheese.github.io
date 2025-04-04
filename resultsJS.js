document.addEventListener("DOMContentLoaded", function () {
    function updateProgressBars() {
        document.querySelectorAll(".progress").forEach(bar => {
            let value = bar.getAttribute("data-value"); // Read value from HTML

            // Force reflow to ensure transition triggers
            bar.offsetWidth; // This does nothing but forces a layout reflow

            // Set width on next animation frame
            requestAnimationFrame(() => {
                bar.style.width = value + "%";
            });
        });
    }

    updateProgressBars(); // Run when the page loads
    // Scroll-triggered animations
    const animatedElements = document.querySelectorAll(
        ".header, .sidebar-left, .main-content, .sidebar-right, .startOverButton, .score-container"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Optional: Stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));

});
