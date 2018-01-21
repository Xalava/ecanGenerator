$('body').scrollspy({
  offset: 52, 
  target: '#navbar-collapsible'
});


// // smooth scrolling
// $('a[class*="navlink"]').click(function () {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var a = $(this.hash);
//         if (a = a.length
//             ? a
//             : $('[name=' + this.hash.slice(1) + ']'), a.length) 
//             return $('body').animate({
//                 scrollTop: a
//                     .offset()
//                     .top - 30
//             }, 800),
//             '#section1' == this.hash
//                 ? $('.scroll-up').hide()
//                 : $('.scroll-up').show(),
//             a.find('.animate').delay(1200).addClass('animated'),
//             setTimeout(function () {
//                 a
//                     .find('.animated')
//                     .removeClass('animated')
//             }, 2e3),
//             !1
//     }
// });

// displaybar
(function ($) {
  $(document).ready(function(){
        // fade in .navbar
        $(function () {
            $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > 100) {
                    $('.mainbar').fadeIn({queue: false});
                                    // $('.navbar-brand').fadeOut();

                    // $(".navbar-brand").animate({right: "+=400px"},1200);
                    // $(".navbar-brand").animate({right: "-=490px"},4500,"swing");
                } else {
                    $('.mainbar').fadeOut();
                }
            });
        });

        //smooth srolling
        $('.navlink').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });

    });
  }(jQuery)); 

//On modal show retrieve

$('#contactForm').on('show.bs.modal', function(e) {
  var formation = $(e.relatedTarget).data('id');
  $('#sujetContactDisplay').html('Prise de contact - '+formation);  
  $('#sujetContactSend').val('Prise de contact - '+formation);

});