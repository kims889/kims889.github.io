// Include tone.js in the head of your index file, before jQuery
// <script src="https://tonejs.github.io/build/Tone.min.js"></script>
// or, load it via jQuery for the sake of testing this demo in dev tools. -->
$.getScript('https://tonejs.github.io/build/Tone.min.js', function() {
  console.log('tone.js is loaded');
});

$(document).on('keypress', function(e) {
  var key = e.key;
  var synth = new Tone.Synth().toMaster();

  console.log('keypress:', key);

  if ( key > 0 && key < 10 ) {
    synth.triggerAttackRelease(('C' + key), '8n');
  }

  // etc.
});