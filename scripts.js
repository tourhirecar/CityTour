document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');

    navLinks.classList.toggle('active');

    
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Carousel script is running...");
  
    const track = document.querySelector('.carousel-track'); 
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsNav = document.querySelector('.carousel-indicators');
    const dots = Array.from(dotsNav.children);
  
    let currentIndex = 0;
    let cardWidth = cards[0].getBoundingClientRect().width;
  
    const updateCarousel = () => {
      cardWidth = cards[0].getBoundingClientRect().width;
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    };
  
    const moveToCard = (index) => {
      currentIndex = (index + cards.length) % cards.length; // Loop back
      updateCarousel();
    };
  
    nextButton.addEventListener("click", () => {
      console.log("➡️ Next button clicked");
      moveToCard(currentIndex + 1);
    });
  
    prevButton.addEventListener("click", () => {
      console.log("⬅️ Prev button clicked");
      moveToCard(currentIndex - 1);
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => moveToCard(index));
    });
  
    window.addEventListener("resize", updateCarousel);
  
    updateCarousel();
  });
  