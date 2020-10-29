$(document).ready(function(){
   $(".meni").click(function(){
      $("nav").slideToggle(400, function(){
          $(this).toggleClass("nav-mobilni").css('display', '');
      });
   }); 
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.tpk').each( function(i){

            var bottom_of_object = $(this).position().top + ($(this).outerHeight())/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});