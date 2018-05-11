var audio;

$(function() {
  $('.album').click(function() {
    var album = $(this);
    audio = album.find('audio').get(0);

    $('.album audio').each(function() {
      $(this).get(0).pause();
    });

    audio.play();
    $(".play-button-img").addClass("stopped");
  });

  // slider controller
  // adapted from 
  // https://codepen.io/anon/pen/RyQxdv
  const metronome = $('#metronome');
  const input = $("#metronome input");
  const bpm = $('#bpm');

  let speed = 0;
  var $element = $('.element');

  function handleUpdate(e) {
    speed = 60 / this.value;
    document.documentElement.style.setProperty(`--speed`, speed + 's');
    bpm.text(this.value);
    $element.css('animation-duration', speed / 100 + 's');
    audio.playbackRate = this.value;
  }

  input.on('change', handleUpdate);
  input.on('mousemove', handleUpdate);

  $("#play-button").on('click', function() {
    if ($(".play-button-img").hasClass("stopped")) {
      audio.pause(); 
      $(".play-button-img").removeClass("stopped")
    }
    else {
      audio.play(); 
      $(".play-button-img").addClass("stopped")
    }

  });

});
