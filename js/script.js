$(document).ready(function(){
  $(".owl-carousel").owlCarousel();

  
});




var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    lazyLoad:true,
     autoHeight:false,
      autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:10,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});



$(document).ready(function(){
  $("#email").emailautocomplete({
  
});
  
});


$(document).ready(function(){

	$(".rslides").responsiveSlides({
		 auto: true,             // Boolean: Animate automatically, true or false
		  speed: 500,            // Integer: Speed of the transition, in milliseconds
		  timeout: 4000,
		  prevText: "Previous", 
		  nextText: "Next",  
	});
});




$(document).ready(function(){

$(function(){
      jQuery("a.bla-1").YouTubePopUp();
      jQuery("a.bla-2").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
  });
});



$(document).ready(function(){

 $('#pm_menu').pushmenu({ button : "#open" });




	
   
});







// $("#menu-toggle").click(function(e) {
//   e.preventDefault();
//   $("#wrapper").toggleClass("toggled");
// });

// $(".rslides").responsiveSlides({
//   auto: true,             // Boolean: Animate automatically, true or false
//   speed: 500,            // Integer: Speed of the transition, in milliseconds
//   timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
//   pager: false,           // Boolean: Show pager, true or false
//   nav: false,             // Boolean: Show navigation, true or false
//   random: false,          // Boolean: Randomize the order of the slides, true or false
//   pause: false,           // Boolean: Pause on hover, true or false
//   pauseControls: true,    // Boolean: Pause when hovering controls, true or false
//   prevText: "Previous",   // String: Text for the "previous" button
//   nextText: "Next",       // String: Text for the "next" button
//   maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
//   navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
//   manualControls: "",     // Selector: Declare custom pager navigation
//   namespace: "rslides",   // String: Change the default namespace used
//   before: function(){},   // Function: Before callback
//   after: function(){}     // Function: After callback
// });
// 
// 
// 

jQuery(document).ready(function( $ ) {
$('span').counterUp({
delay: 10, // the delay time in ms
time: 1000 // the speed time in ms
});
});





$(document).ready(function () {
        $(".datepicker").datepicker();
    });


