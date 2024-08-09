// Disable right-click context menu
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Disable keyboard shortcuts for copy (Ctrl+C), cut (Ctrl+X), paste (Ctrl+V), and select all (Ctrl+A)
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'x' || event.key === 'v' || event.key === 'a')) {
    event.preventDefault();
    }
});

// Disable dragging text and elements
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    var viewer = document.querySelector('.pdf-viewer');

    viewer.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent default context menu
    });
});


document.getElementById('downloadBtn').addEventListener('click', function() {
    // Show the overlay with image and text
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener("click", () => {

    overlay.style.display = 'none';
});