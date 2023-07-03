//Adding dark mode functionality 

// Function to toggle between light mode and dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Attach event listener to the toggle button
const toggleButton = document.getElementById('mode-toggle');
toggleButton.addEventListener('click', toggleDarkMode);

const exploreButton = document.getElementById('exploreButton');
exploreButton.addEventListener('click', function() {
    console.log("Button clicked!"); 
});
