import {
  music,
  playIcon,
  pauseIcon,
  reverseIcon,
  nextIcon,
} from "../script/varFunc.js";

const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const reverseBtn = document.getElementById("reverseBtn");
const nextBtn = document.getElementById("nextBtn");
const musicBar = document.getElementById("musicBar");

playPauseBtn.innerHTML = playIcon;
reverseBtn.innerHTML = reverseIcon;
nextBtn.innerHTML = nextIcon;



document.addEventListener("click", (e) => {
  if (playPauseBtn.contains(e.target)) {
    playPause();
  }
});

const playPause = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = pauseIcon;
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = playIcon;
  }
};
