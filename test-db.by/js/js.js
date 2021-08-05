document.querySelector('.menu-burger-header').addEventListener('click', function() {
  document.querySelector('.menu-burger-header').classList.toggle('open-menu');
  document.querySelector('.header-nav').classList.toggle("open-menu");
});

document.querySelector('.menu-burger-header').addEventListener('click', function(event) {
  document.querySelector('.menu-burger-header').classList.toggle('active');
  document.querySelector('body').classList.toggle("fixed-page");
});

// !!!!!Настройка слайдера!!!!!

let slides = document.getElementsByClassName("preview-slider-item");
let dots = document.getElementsByClassName("preview-btn-item");
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {

  if (n > slides.length) {
    slideIndex = 1
  };

  if (n < 1) {
    slideIndex = slides.length
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  };

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

for (let i = 0; i < dots.length; i++) {
  let dot = dots[i];

  dot.addEventListener('click', () => {
    showSlides(slideIndex = i + 1);
  });

};

// !!!НАСТРОЙКА СЛАЙДЕРА footer!!!

let items = document.querySelectorAll('.footer-list-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
};

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
};

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
};

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
};

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
};

document.querySelector('.footer-btn-prev').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	};
});

document.querySelector('.footer-btn-next').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	};
});