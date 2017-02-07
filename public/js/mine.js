function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

// // sticky nav
//  var  mn = $("#myTopnav");
//     mns = "main-nav-scrolled responsive";

// $(window).scroll(function() {
//   if( $(this).scrollTop() > 400 ) {
//     mn.addClass(mns);
//   } else {
//     mn.removeClass(mns);
//   }
// });

// collapsible job section
$(document).ready(function(){

    $('.collapsible').collapsible();
  });
  ;

// smooth scroll
  $(document).ready(function () {
     $('#top').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 100
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });


// bouncing on scroll
$(function(){
                
        var choice = [

        {selector: '.edu', offset: 200, callback: '$(".edu").addClass("bounceInRight animated").css("visibility", "visible")'}  
        // {selector: '.picTxt', offset: 0.1, callback: '$(".picTxt").addClass("bounceInLeft animated").css("visibility", "visible")'}
    ];

    Materialize.scrollFire(choice);
});


// back to the top button
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 10000,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
