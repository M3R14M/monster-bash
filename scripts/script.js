// Random sound when clicking a button
const clickSounds = {
  awesome: new Audio('../assets/sounds/johnny_voice_awesome.ogg'),
  cool: new Audio('../assets/sounds/johnny_voice_cool.ogg'),
  excellent: new Audio('../assets/sounds/johnny_voice_excelent.ogg'),
};

function playRandom() {
  const sounds = Object.values(clickSounds);
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  randomSound.play();
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playRandom);
});

// Redirects
document.querySelector('#guestbook').addEventListener('click', () => {
  window.location.href = '../guestbook.php';
});

document.querySelector('#gog').addEventListener('click', () => {
  window.open('https://www.gog.com/en/game/monster_bash', '_blank');
});

// Story modal
const storyModal = document.querySelector('#story-modal');
const storyBtn = document.querySelector('#story');
const storyClose = document.querySelector('#story-modal > [close]');
storyBtn.addEventListener('click', () => {
  storyModal.showModal();
});
storyClose.addEventListener('click', () => {
  storyModal.close();
});

// Links modal
const linksModal = document.querySelector('#links-modal');
const linksBtn = document.querySelector('#links');
const linksClose = document.querySelector('#links-modal > [close]');
linksBtn.addEventListener('click', () => {
  linksModal.showModal();
});
linksClose.addEventListener('click', () => {
  linksModal.close();
});
