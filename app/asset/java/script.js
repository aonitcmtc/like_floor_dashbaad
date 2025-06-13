$(document).ready(function(){
    $("#toggleBtn").click(function(){
        $("#hiddenText").toggle();
    });
});

// -----------menu click js----------
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-burger').toggleClass('active')
        $('.menu').toggleClass('active')
    });
});

// ****header scroll function****
$( () => {
    //On Scroll Functionality
    $(window).scroll( () => {
        var windowTop = $(window).scrollTop();
        windowTop > 50 ? $('header').addClass('nav-top-menu') : $('header').removeClass('nav-top-menu');
    });
});