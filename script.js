// script.js
let fontSize = 18;
let height = 50;
let currentSlideIndex = 0;
const totalSlides = 4; // 0–4 → 5 слайдов

function goToScreen1() {
  document.getElementById('screen0').classList.add('hidden');
  document.getElementById('screen1').classList.remove('hidden');
}

function handleNoClick() {
  fontSize += 4;
  height += 50;
  const btnYes = document.getElementById('btnYes');
  btnYes.style.fontSize = `${fontSize}px`;
  btnYes.style.height = `${height}px`;
}

function showFinal() {
  document.getElementById('screen0').classList.add('hidden');
  document.getElementById('screen1').classList.add('hidden');
  const finalScreen = document.getElementById('finalScreen');
  finalScreen.classList.remove('hidden');
  
  // Запускаем анимацию стрелки ОДИН РАЗ
  const arrow = document.getElementById('nextArrow');
  if (!arrow.hasBounced) {
    arrow.classList.add('bounce-hint');
    arrow.hasBounced = true;
  }
}

// === СЛАЙДЕР ===
function openSlideshow() {
  document.getElementById('finalScreen').classList.add('hidden');
  const slideshow = document.getElementById('slideshow');
  slideshow.classList.remove('hidden');
  
  if (!slideshow.hasHearts) {
    createSlideshowHearts();
    slideshow.hasHearts = true;
  }

  currentSlideIndex = 0;
  document.getElementById('slideshowArrow').style.display = 'flex';
}

function createSlideshowHearts() {
  const heartContainer = document.getElementById('slideshowHearts');
  const colors = ['#ff4da6', '#a040ff', '#ff6ec7', '#8a2be2', '#ffb6c1', '#ff9aa2'];
  const count = 60;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'slideshow-heart';
    heart.innerHTML = '❤️';
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    heart.style.left = `${x}vw`;
    heart.style.top = `${y}vh`;
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 12 + Math.random() * 20;
    heart.style.color = color;
    heart.style.fontSize = `${size}px`;
    heart.style.opacity = `${0.3 + Math.random() * 0.5}`;

    heartContainer.appendChild(heart);
  }
}

function nextSlide() {
  if (currentSlideIndex >= totalSlides) return;

  const slides = document.querySelectorAll('.slide');
  const current = slides[currentSlideIndex];
  const next = slides[currentSlideIndex + 1];

  current.classList.add('leaving');
  next.classList.add('active');

  currentSlideIndex++;

  if (currentSlideIndex === totalSlides) {
    document.getElementById('slideshowArrow').style.display = 'none';
  }
}