$(document).ready(function(){

  console.log("Welcome to my site, and the console")




  $(document).on('scroll', function() {
    console.log("animate fucker!")

    $('#load-title').css({
      'left': $('#load-title').position().left - 90,
      'top': $('#load-title').position().top - 80,
      'font-size': '-=10',
      position: 'absolute'
    })

    // $('#load-title').animate({
    //   top: "-=50",
    //   left: "-=75"
    // }, 50, "linear");

    // as you scroll DOWN animate the #load-title to the topleft corner, and navbar elements to top right
    // if you scroll down, if you are at a certain point in the page, then put the #load-title and #load-nav back to starting position

    // select the endpoint div lcoation and get left/top position?
    // $('#load-title').animate({
    //   top: $('#scrolled-title').position().top - $(this).position().top,
    //   left: $('#scrolled-title').position().left - $ (this).position().left,
    //   'font-size': "-=5px"
    // }, 10, function() {

    // });
  })

})