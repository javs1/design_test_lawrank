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

    document.getElementById('showMore').addEventListener('click', function() {
      const hiddenItems = document.querySelectorAll('.hidden');
      hiddenItems.forEach(item => {
          item.classList.remove('hidden');
      });
      this.style = ("color: transparent; border:transparent; margin: -50px;")
    });

    let lastScrollTop = 0;
    const menu = document.querySelector('.ham_menu');

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            menu.style.top = '-50px'; // Hide the menu (assuming the menu height is 50px)
        } else {
            // Scrolling up
            menu.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
  });