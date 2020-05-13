
(function ($) {
  $(document).ready(function(){


    // fade in .scroll-link
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 550) {
                $('.scroll-link').fadeOut();
            } else {
                $('.scroll-link').fadeIn();
            }
        });
    });

});
  }(jQuery)); 


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (1100) specifies the number of milliseconds it takes to scroll to the specified area, the (-130) is a 130px offset from the anchor.
      $('html, body').animate({
        scrollTop: $(hash).offset().top -130
      }, 1100, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash;
      });
    } // End if
  });
});

var animateHTML = function () {
  var elems,
    windowHeight
  var init = function () {
    elems = document.getElementsByClassName('hidden')
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  var _checkPosition = function () {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - windowHeight <= -250) {
        elems[i].className = elems[i].className.replace('hidden', 'animated bounceInUp')
      }
    }
  }
  return {
    init: init
  }
}
animateHTML().init()

