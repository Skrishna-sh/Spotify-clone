console.log("hello world");
// Initialize the variables

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterPlayName = document.getElementById("masterPlayName");


let songs = [
    { songName: "song1 - T series", filepath: "songs/1.mp3", coverpath: "/covers/1.jpg" },
    { songName: "song2 - T series", filepath: "songs/2.mp3", coverpath: "/covers/2.jpg" },
    { songName: "song3 - T series", filepath: "songs/3.mp3", coverpath: "/covers/3.jpg" },
    { songName: "song4 - T series", filepath: "songs/4.mp3", coverpath: "/covers/4.jpg" },
    { songName: "song5 - T series", filepath: "songs/5.mp3", coverpath: "/covers/5.jpg" },
    { songName: "song6 - T series", filepath: "songs/6.mp3", coverpath: "/covers/6.jpg" },
    { songName: "song7 - T series", filepath: "songs/7.mp3", coverpath: "/covers/7.jpg" },
    { songName: "song8 - T series", filepath: "songs/8.mp3", coverpath: "/covers/8.jpg" },
    { songName: "song9 - T series", filepath: "songs/9.mp3", coverpath: "/covers/9.jpg" },
    { songName: "song10 - T series", filepath: "songs/10.mp3", coverpath: "/covers/10.jpg" },
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
        gif.style.opacity = 1;



    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
    // console.log(audioElement.currentTime);
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        // console.log(songIndex);
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlayName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex <= 0) 
    {
        songIndex = 10;
    }
    else
    {
        songIndex -= 1;
    }
    // move(songIndex);
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlayName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    

})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex >= 10) 
    {
        songIndex = 1;
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlayName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

});