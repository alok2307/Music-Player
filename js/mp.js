const songtitle = document.querySelector(".song-title");
const pp = document.querySelector("#pp");
const ps = document.querySelector("#ps");
const ns = document.querySelector("#ns");
const progressbar = document.querySelector("#progressbar");
const thumbnail = document.querySelector("#thumbnail");
const song = document.querySelector("#song");

var playing = false;


function playpause(){
    if(playing){
        const song = document.querySelector("#song");
        song.play();
        playing = false;
    }
    else{
        const song = document.querySelector("#song").pp = document.querySelector("#pp");
        pp.src = "images/pause.png";
        song.pause();
        playing = true;
    }
}
