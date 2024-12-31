import { playIcon, pauseIcon, reverseIcon, nextIcon } from "./icon.js";

const music = [
	{
		title: "Lost in the City Lights",
		artist: "Cosmo Sheldrake",
		cover: "../../assets/cover-1.png",
		audio: "../../assets/lost-in-city-lights-145038.mp3",
		slug: "lost-in-the-city-lights",
	},
	{
		title: "Forest Lullaby",
		artist: "Lesfm",
		cover: "../../assets/cover-2.png",
		audio: "../../assets/forest-lullaby-110624.mp3",
		slug: "forest-lullaby",
	},
];

const songTitle = document.getElementById("titleSong");
const songArtist = document.getElementById("artistSong");
const songCover = document.getElementById("songCover");
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const reverseBtn = document.getElementById("reverseBtn");
const nextBtn = document.getElementById("nextBtn");
const musicBar = document.getElementById("musicBar");

let index = 0;
audioPlayer.src = music[index].audio;
songCover.src = music[index].cover;
songCover.setAttribute("alt", music[index].slug);
songTitle.innerHTML = music[index].title;
songArtist.innerHTML = music[index].artist;

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
	}
});

const playPauseMusic = () => {
	if (audioPlayer.paused) {
		audioPlayer.play();
		playPauseBtn.innerHTML = pauseIcon;
	} else {
		audioPlayer.pause();
		playPauseBtn.innerHTML = playIcon;
	}
};

const reverse = () => {
	if (audioPlayer.currentTime > 5) {
		audioPlayer.currentTime = 0;
	} else {
		if (index < 1) {
			index = music.length - 1;
			changeMusic(index);
			playPauseMusic();
		} else {
			index--;
			changeMusic(index);
			playPauseMusic();
		}
	}
};

const next = () => {
	if (index < music.length - 1) {
		index++;
		changeMusic(index);
		playPauseMusic();
	} else {
		index = 0;
		changeMusic(index);
		playPauseMusic();
	}
};

const changeMusic = (musicIndex) => {
	audioPlayer.src = music[musicIndex].audio;
	songTitle.innerHTML = music[musicIndex].title;
	songArtist.innerHTML = music[musicIndex].artist;
	songCover.src = music[musicIndex].cover;
	songCover.setAttribute("alt", music[musicIndex].slug);
};
