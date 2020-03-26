$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('#skrol-vrh:hidden').stop(true, true).fadeIn();
    } else {
        $('#skrol-vrh').stop(true, true).fadeOut();
    }
});
$(function(){$("#skrol-vrh").click(function(){$("html,body").animate({scrollTop:$("#navigacija").offset().top},"1000");return false})})
