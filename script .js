let music = document.getElementById("player");


function play(){
    music.play();
}


function pause(){
    music.pause();
}


function changeSong(file,name){

    music.src = file;

    document.getElementById("songName").innerHTML = name;

    music.play();

}


function next(){
    alert("Next song");
}


function previous(){
    alert("Previous song");
}