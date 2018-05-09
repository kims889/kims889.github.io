     $('.album').onclick(function() {
  var album = $(this);
  var audio = album.find('audio').get(0);
 
  audio.play();
});


// document.getElementById("demo").onclick = function() {myFunction()};

$('.play-button').click(function() {
  playAudio();
});

var audio = document.getElementById("myAudio"); 

function playAud() { 
    audio.play(); 
} 

function pauseAud() { 
    audio.pause(); 
}

// Metronome bpm
/*
class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
  }*/

// Volume function
/*
function getVolume() { 
    alert(aud.volume);
} 
  
function setHalfVolume() { 
    aud.volume = 0.2;
} 
  
function setFullVolume() { 
    pauseAudio.volume = 1.0;
} */ 