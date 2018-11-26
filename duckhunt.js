$(document).ready(function () {
  console.log('jQ ready!');



  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>

  var $body = $('body');

  // whats the diffrenxe between these 2 lines? 



  // 1. Can you create a <div> with the class "duck" and name it "duck"
  //   var $newDiv = $('<div/>').addClass('duck'); 
  //   $body.append($newDiv); 


  //   // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)

  // setInterval (function(){
  //   $('div').toggleClass('flap'); 

  // }, 250);

  //   // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"

  //   $newDiv.css({
  //     // 'width': '50px',
  //     // 'height': '50px' how do i change the duck's size??? its too small
  //     'left': '600px',
  //     'top': '100px'
  //   });

  //   $newDiv.animate({
  //     // 'width': '50px',
  //     // 'height': '50px' how do i change the duck's size??? its too small
  //     'left': '600px',
  //     'top': '100px'
  //   });
  //   // 4. Try making the duck move to a different location after 1 second

  //   setTimeout(function() {
  //     $newDiv.css({
  //       'left': '300px',
  //       'top' : '900px',
  //     })
  //   }, 1000);

  //   // aimate or setTimeout????? 

  //   // 5. Congratulations!
  // })


function createDucks (){ 


}
    var $newDiv = $('<div/>').addClass('duck');
    $body.append($newDiv);


    setInterval(function () {
      $('div').toggleClass('flap');

    }, 250);


    $newDiv.css({
      'width': '50px',
      'height': '50px', //how do i change the duck's size??? its too small
      'left': '600px',
      'top': '100px'
    });

    $newDiv.animate({
      'width': '50px',
      'height': '50px', //how do i change the duck's size??? its too small
      'left': '600px',
      'top': '100px'
    }, 1000);


   
    
  }) // what this is for 


//     setTimeout(function() {
//           $newDiv.css({
//             'left': '300px',
//             'top' : '900px',
//           })
//         }, 1000);
// }) 


// function createDuck(){ 
  
// }
// for (i = 0; i < 5; i++){
//   createDuck();




// 5. ——— Part 2: Here we go! —— 
  // 6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
  // called createDuck that "returns" the duck object

  // dont know how to do it!!! 

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function



  // 8a. If you go to the dev tools you’ll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
  // each time it creates a duck, it appears in a random location. 


  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around!

  // 10. Well Done!  

  // ——— Part 3:  We're almost there! —— 

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying

  // FIN. You win 1 trillion tokens.  Play the day away!

