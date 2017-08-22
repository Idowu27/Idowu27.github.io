
/*$("document").ready(function() {

  var number = $('#email');

$(window).on('scroll', function(event){
console.log(event.pageX);
  if(event.pageX > 400){
    $('ul.nav').addClass('fixed');
  } else{
    $('ul.nav').removeClass('fixed');
  }
});
});*/

$("document").ready(function() {

  /* Hamburger menu */
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
    
	});

	/* Menu fade/in out on mobile */
	$(".hamburger").click(function(e){

	    $(".screen").fadeToggle();
	});




      $('.screen').on('click', function(){
          $('.screen').css('display','none');
          $('.screen .nav').css('display','');
        });


					$('#click1').click(function(){

					$("html, body").animate({ scrollTop: $("#home-page").offset().top-90 }, 500);


				 });

	$('#click2').click(function(){

					$("html, body").animate({ scrollTop: $("#about-page").offset().top-90 }, 500);


				 });

	$('#click3').click(function(){

					$("html, body").animate({ scrollTop: $("#works-page").offset().top-90 }, 500);


				 });

	$('#click4').click(function(){

					$("html, body").animate({ scrollTop: $("#contact-page").offset().top-90 }, 500);


				 });



});
