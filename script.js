document.querySelectorAll('.carousel').forEach((carousel) => {
    let currentSlide = 0;
    const slides = carousel.querySelector('.slides');
    const totalSlides = slides.children.length; 
  
    function updateSlidePosition() {
        // Calculate the new position by moving `-100%` for each slide
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    function showSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides; // Wrap-around logic
        updateSlidePosition();
    }
  
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
  
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
  
    // Automatically advance slides every 3 seconds
    setInterval(nextSlide, 3000);
  
    // Event listeners for manual slide navigation
    carousel.querySelector('.prev').addEventListener('click', prevSlide);
    carousel.querySelector('.next').addEventListener('click', nextSlide);
  }); 
  