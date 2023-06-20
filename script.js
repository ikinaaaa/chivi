    // Get the image element
    var image = document.getElementById("images/threelines.png");

    // Get the text element
    var text = document.getElementById("navigation");

    // Add click event listener to the image
    image.addEventListener("click", function() {
      text.style.display = "flex";
    });