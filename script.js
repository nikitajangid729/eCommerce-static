let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

showSlide(currentIndex);