document.querySelector('.menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; // Hide the menu
    } else {
        menu.style.display = 'block'; // Show the menu
    }
});


// Get all popup links
var popupLinks = document.querySelectorAll(".popup-link");

// Add click event listeners to each popup link
popupLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the ID of the popup to open
    var popupId = link.getAttribute("data-popup-id");

    // Open the corresponding popup
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
  });
});

// Close the popup when the close button is clicked
var closeButtons = document.querySelectorAll(".popup .close");
closeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var popup = button.parentElement;
    popup.style.display = "none";
  });
});
