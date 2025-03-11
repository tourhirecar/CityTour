function openPopup(imgSrc) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    popupImg.src = imgSrc;
    popup.style.display = "flex";
}


function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}


const carousel = document.getElementById('carousel1');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');
const items = Array.from(carousel.children);
const totalItems = items.length;
let currentIndex = 0;


items.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  carouselDots.appendChild(dot);
});

const dots = Array.from(carouselDots.children);

function updateDots() {
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

function goToSlide(index) {
  if (index < 0) {
    currentIndex = totalItems - 1;
  } else if (index >= totalItems) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));