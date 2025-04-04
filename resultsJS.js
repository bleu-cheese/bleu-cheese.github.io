document.addEventListener("DOMContentLoaded", function () {
    function updateProgressBars() {
        document.querySelectorAll(".progress").forEach(bar => {
            let value = bar.getAttribute("data-value"); // Read value from HTML
            bar.style.width = value + "%"; // Update width
        });
    }

    updateProgressBars(); // Run when the page loads
});
