let playing = true;
let random = false;
const playButton = document.querySelector(".player-play");
const nextButton = document.querySelector(".player-next");
const prevButton = document.querySelector(".player-prev");
const thumbnail = document.querySelector(".container-boxRight-playermedia-playerimg");
const song = document.querySelector("#song");
const songList = document.querySelectorAll(".song");
const songArtist = document.querySelector(".container-boxRight-ast");
const songTitle = document.querySelector(".container-boxRight-title");
const progressBar = document.querySelector("#progress-bar");

let songIndex = 0;
let songs = [
  "./Music/Loveyour.mp3",
  "./Music/lovesong.mp3",
];
let thumbnails = [
  "./Music/loveyour.png",
  "./Music/abc.webp",
];
let songArtists = ["JustinBiber", "Fanki"];
let songTitles = ["Love Yourself", "Where we started"];
let timer;
function handleClickEachSong(e) {
  const index = parseInt(e.target.dataset.index);
  nextSong(index);
}
function playPause() {
    if (playing) {
      const song = document.querySelector("#song");
      song.play();
      thumbnail.classList.add("is-playing");
      playButton.classList.add("fa-pause");
  
      playing = false;
    } else {
      thumbnail.classList.remove(".is-playing");
      playButton.classList.remove("fa-pause");
      song.pause();
      playing = true;
      clearInterval(timer);
    }
  }

function nextSong(index = -1) {
  if (index >= 0) {
    songIndex = index;
  } else {
    songIndex++;
  }
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}
function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 1;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
      songArtist.innerHTML = songArtists[songIndex];
      songTitle.innerHTML = songTitles[songIndex];
  playing = true;
  playPause();
}

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector(".player-remaining").innerHTML = formatTime(
    Math.floor(song.currentTime)
  );
  if (document.querySelector(".player-duration").innerHTML === "NaN:NaN") {
    document.querySelector(".player-duration").innerHTML = "0:00";
  } else {
    document.querySelector(".player-duration").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}
timer = setInterval(updateProgressValue, 500);
function changeProgressBar() {
  song.currentTime = progressBar.value;
}
progressBar.addEventListener("change", changeProgressBar);
playButton.addEventListener("click", playPause);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", previousSong);
song.addEventListener("ended", function () {
  nextSong();
});

songList.forEach((el) => el.addEventListener("click", handleClickEachSong));


var btnContainer = document.getElementById("btndiv");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("container-boxLeft-menu-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

