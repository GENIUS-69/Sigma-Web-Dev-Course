console.log('Lets Write JavaScript');

let currentSong = new Audio();
let isPlaying = false;

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/audio/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    let songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/audio/")[1])
        }
    }
    return songs;
}

//changing play pause button
const updatePlayButton = () => {
    const playButton = document.getElementById("play");
    playButton.src = isPlaying ? "./svg/pause.svg" : "./svg/play.svg";
}


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid Input";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`;
}


const playMusic = (track, pause = false) => {
    currentSong.src = "/audio/" + track;
    if (!pause) {
        currentSong.play();
        isPlaying = true;
    }
    play.src = "./svg/pause.svg";

    updatePlayButton();
    document.querySelector(".song-info").innerHTML = decodeURI(track);
    document.querySelector(".song-time").innerHTML = "00:00 / 00:00";
}

async function main() {
    let songs = await getSongs();
    playMusic(songs[0], true);

    //Show all the songs in playlist
    let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0]

    //Inseting the songs into library
    for (const song of songs) {
        songUL.innerHTML += `
                <li>
                    <img src="./svg/music.svg" alt="">
                    <div class="info">
                        <div>${song.replaceAll("%20", " ")}</div>
                        <div>Karan Aujla</div>
                    </div>
                    <div class="play-now">
                        <span>play now</span>
                        <img src="svg/play.svg" alt="">
                    </div>
                </li>`;
    }

    //Attach an event listner to each song
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })
    })

    //Attach an event listner to play, next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            isPlaying = true;
        } else {
            currentSong.pause();
            isPlaying = false;
        }
        updatePlayButton();
    })

    //Listen for time update
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".song-time").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;

        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    //Add an event listner to seekbar
    document.querySelector(".seek-bar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    })
}

window.onload = main;