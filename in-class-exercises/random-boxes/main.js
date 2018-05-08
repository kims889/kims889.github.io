function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var box = ["1", "2", "3", "4"];
var Random = box[Math.floor(Math.random() * box.length)];
var lastClass;

$(function() {
      $(".button").click( function(){
      	lastClass = box[Random(0,box.length)];
            $(".box").addClass("fill");
           }
      );
});