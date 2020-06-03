const audio = new Audio();
const buttons = document.querySelectorAll(".button");

play = (e) => {
  const audios = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audios) return;
  audio.src = `./sounds/${audios.dataset.sound}.wav`;
  audio.currentTime = 0;
  audio.play();
  audios.classList.add("hit");
};

removeClasses = () => {
  [...buttons].map((item) => {
    item.classList.remove("hit");
  });
};

window.addEventListener("keydown", play);
window.addEventListener("keyup", removeClasses);
