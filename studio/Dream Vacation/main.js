/* function playSound(soundfile) {
  document.getElementById("dummy").innerHTML= "<embed src=\""
    +soundfile+"\" hidden=\"true\" autostart=\"true\"loop=\"false\" />";
} */

var x = document.getElementById("myAudio");

var x = document.createElement("Audio");

function playAudio() { 
    x.play(); 
}
function pauseAudio() { 
    x.pause(); 
}

/*
var bgm=document.getElementById("assets/audio/triathalon-hawaiianboi.mp3")

function bgmPlay()
  {
  bgm.play();
  }
function bgmPause()
  {
  bgm.pause();
  } */

  function play () {
  	var audio = document.getElementById("demo");
  	audio.play();
  }

var x = document.getElementById("myAudio");

function enableControls() { 
    Audio.controls = true;
    Audio.load();
} 

// document.getElementById("demo").onclick = function() {myFunction()};

$('.play-button').click(function() {
  playAudio();
});
