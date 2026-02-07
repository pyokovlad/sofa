let fontSize = 18;
let height = 50;

function goToScreen1() {
  document.getElementById('screen0').classList.add('hidden');
  document.getElementById('screen1').classList.remove('hidden');
}

function handleNoClick() {
  fontSize += 12;
  height += 60; 

  const btnYes = document.getElementById('btnYes');
  const btnNo = document.getElementById('btnNo');

  btnYes.style.fontSize = `${fontSize}px`;
  btnYes.style.height = `${height}px`;

  btnNo.style.marginTop = `${height + 12}px`; 
}

function showFinal() {
  document.getElementById('screen0').classList.add('hidden');
  document.getElementById('screen1').classList.add('hidden');
  document.getElementById('finalScreen').classList.remove('hidden');

  createExplodingHearts();
}

function createExplodingHearts() {
  const emojis = ['❤️', '💖', '💗', '💘', '💕'];
  const count = 60;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      
      const angle = Math.random() * Math.PI * 2;
      const speed = 100 + Math.random() * 200;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      document.body.appendChild(heart);

      heart.style.opacity = '1';
      heart.style.transform = `translate(${vx}px, ${vy}px)`;

      setTimeout(() => {
        heart.style.transition = 'transform 2s cubic-bezier(0.2, 0.8, 0.4, 1), opacity 2s';
        heart.style.transform = `translate(${vx}px, ${vy + 600}px) rotate(${Math.random() * 720}deg)`;
        heart.style.opacity = '0';
      }, 50);

      setTimeout(() => {
        if (heart.parentNode) heart.parentNode.removeChild(heart);
      }, 2100);
    }, i * 20);
  }
}