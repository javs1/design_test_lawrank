document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      const cardWidth = carousel.children[0].offsetWidth;
      const newTransformValue = -currentIndex * (cardWidth + 20); // 20 es el margen entre cartas
      carousel.style.transform = `translateX(${newTransformValue}px)`;
    }
  });