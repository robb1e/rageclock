/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initLocalClocks() {
  var date = new Date;
  var minutes = 57;
  var hours = 11;

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
  initLocalClocks();
});
