$("document").ready(function($){

   $(window).on('scroll', function(){
        fixedMenu();
   });


   // menu navbar
   fixedMenu();

   function fixedMenu(){
    if($(window).scrollTop() >= 80){
        $('#navbarTop').addClass('nav-top__active');
        $('#navbarMiddle').css({
            "position": "fixed",
            "top": "0",
            "left": "0",
            "background-color": "rgba(255, 255, 255, .9)",
            "box-shadow": "0 0 20px rgba(0,0,0, .3)"
        });
    }else{
        $('#navbarTop').removeClass('nav-top__active');
        $('#navbarMiddle').css({
            "position": "relative",
                "top": "initial",
                "left": "initial",
        
        });
    }
   }

});