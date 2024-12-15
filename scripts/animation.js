const body = document.querySelector('body');

/* Moon effect */
function witch() {
  const sound = new Audio('../assets/sounds/witch-laugh.ogg');
  const img = document.createElement('img');
  img.src = '../assets/images/witch.webp';
  img.style.top = '44px';
  img.style.animation = 'flyAcrossMoon 2s linear forwards';
  img.style.position = 'fixed';

  body.appendChild(img);
  sound.play();

  // Remove witch after animation
  setTimeout(() => {
    body.removeChild(img);
  }, 2000);
}

const moon = document.querySelector('[alt=moon]');
moon.addEventListener('click', witch);

/* Bloody intro */
function intro() {
  const blood = document.createElement('blood-intro');
  const btmDrips = document.createElement('blood-drips');

  const topDrips = btmDrips.cloneNode();
  topDrips.style.bottom = 'auto';
  topDrips.style.top = '-384px';
  topDrips.style.transform = 'rotate(180deg)';

  blood.appendChild(btmDrips);
  blood.appendChild(topDrips);
  blood.style.animation = 'bloodDrip 5s linear forwards';

  body.appendChild(blood);

  // Remove blood after animation
  setTimeout(() => {
    body.removeChild(blood);
  }, 5000);
}

intro();
