let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Increment index and loop back to 0
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and mark the dot as active
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // Change image every 4 seconds (4000 milliseconds)
  setTimeout(showSlides, 4000); 
}

// Function to control which slide is shown (for navigation dots)
function currentSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the selected slide and mark the dot as active
  slideIndex = n; // Set the global index to the selected slide
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}