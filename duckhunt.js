$(document).ready(function() {
  console.log('jQ ready!');
 


  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var body = $('body');
  var $body = $('body');

  // whats the diffrenxe between these 2 lines? 

  // 1. Can you create a <div> with the class "duck" and name it "duck"
  var $newDiv = $('<div/>').addClass('duck'); 
  $body.append($newDiv); 


  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)

setInterval (function(){
  $('div').toggleClass('flap'); 

}, 250);

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"

  $newDiv.css({
    // 'width': '50px',
    // 'height': '50px' how do i change the duck's size??? its too small
    'left': '600px',
    'top': '100px'
  });

  // 4. Try making the duck move to a different location after 1 second

  setTimeout(function() {
    $newDiv.css({
      'left': '100px',
      'top' : '600px',
    })
  }, 5000);

  // aimate or setTimeout????? 

  // 5. Congratulations!
})

function createDuck(){ 
  
}



