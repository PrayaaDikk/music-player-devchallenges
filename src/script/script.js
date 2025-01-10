import { playIcon, pauseIcon, reverseIcon, nextIcon } from "./icon.js";

const music = [
	{
		title: "Lost in the City Lights",
		artist: "Cosmo Sheldrake",
		cover: "../../assets/cover-1.png",
		song: "../../assets/lost-in-city-lights-145038.mp3",
		slug: "lost-in-the-city-lights",
	},
	{
		title: "Forest Lullaby",
		artist: "Lesfm",
		cover: "../../assets/cover-2.png",
		song: "../../assets/forest-lullaby-110624.mp3",
		slug: "forest-lullaby",
	},
];

const songTitle = document.getElementById("titleSong");
const songArtist = document.getElementById("artistSong");
const songCover = document.getElementById("songCover");
const playPauseBtn = document.getElementById("playPauseBtn");
const reverseBtn = document.getElementById("reverseBtn");
const nextBtn = document.getElementById("nextBtn");
const musicBar = document.getElementById("music-bar");
const musicBarFill = document.getElementById("music-bar-fill");
const currTime = document.getElementById("currTime");
const audioDuration = document.getElementById("audioDuration");

let index = 0;
let audio;

innerHTMLAudio();

function innerHTMLAudio() {
	audio = new Audio(music[index].song);
	songCover.src = music[index].cover;
	songCover.setAttribute("alt", music[index].slug);
	songTitle.innerHTML = music[index].title;
	songArtist.innerHTML = music[index].artist;
	audio.onloadedmetadata = function () {
		songControl(audio);
		audioDuration.innerHTML = timeFormat(audio.duration);
		currTime.innerHTML = "00:00";
	};
}

playPauseBtn.innerHTML = playIcon;
reverseBtn.innerHTML = reverseIcon;
nextBtn.innerHTML = nextIcon;

document.addEventListener("click", (e) => {
	if (playPauseBtn.contains(e.target)) {
		playPauseMusic();
	} else if (reverseBtn.contains(e.target)) {
		reverse();
	} else if (nextBtn.contains(e.target)) {
		next();
	} else if (musicBar.contains(e.target)) {
		const musicBarWidth = (e.offsetX / musicBar.offsetWidth) * 100;
		musicBarFill.style.width = `${musicBarWidth}%`;
		audio.currentTime = (e.offsetX / musicBar.offsetWidth) * audio.duration;
	}
});

function playPauseMusic() {
	if (audio.paused) {
		audio.play();
		playPauseBtn.innerHTML = pauseIcon;
	} else {
		audio.pause();
		playPauseBtn.innerHTML = playIcon;
	}
}

function reverse() {
	audio.pause();
	if (audio.currentTime > 5) {
		audio.currentTime = 0;
		playPauseMusic();
	} else {
		index < 1 ? (index = music.length - 1) : index--;
		innerHTMLAudio();
		playPauseMusic();
	}
}

function next() {
	audio.pause();
	index < music.length - 1 ? index++ : (index = 0);
	innerHTMLAudio();
	playPauseMusic();
}

function timeFormat(duration) {
	const mins = ~~(duration / 60);
	const sec = ~~(duration % 60);

	let ret = "";

	if (mins < 10) {
		ret += `0${mins}:`;
	}
	ret += `${sec < 10 ? `0${sec}` : sec}`;
	return ret;
}

function updateMusicBar() {
	const musicBarWidth = (audio.currentTime / audio.duration) * 100;
	musicBarFill.style.width = `${musicBarWidth}%`;
}

function songControl(audio) {
	audio.addEventListener("timeupdate", updateMusicBar);
	audio.addEventListener("timeupdate", function () {
		currTime.innerHTML = timeFormat(audio.currentTime);
	});
}

audio.addEventListener("ended", next);
