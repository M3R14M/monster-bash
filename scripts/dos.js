// Monster Bash! js-dos config
const dosBox = document.querySelector('#dos');
const options = {
  url: './assets/game/bundle.jsdos',
  lang: 'en',
  noCloud: true,
  theme: 'halloween',
};
const player = Dos(dosBox, options);
player.setBackground('./assets/game/boxart.webp');

// Player pop-up
const playModal = document.querySelector('#play-modal');
const playBtn = document.querySelector('#play');
const playClose = document.querySelector('#play-modal > [close]');
playBtn.addEventListener('click', () => {
  playModal.showModal();
  player.setPaused(false);
});
playClose.addEventListener('click', async () => {
  player.setPaused(true);
  playModal.close();
});
