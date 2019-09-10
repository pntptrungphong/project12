$(document).ready(function () {
    const owl = $(".slider1").owlCarousel({
        items:1,
        loop:true,
        autoplay: true,
        autoplayTimeout:5000,
    });
    
    $('.owl-dots button').hover(function () {
            // over
        let index = $(this).index()
        owl.trigger("to.owl.carousel" , index)
        }, function () {
            // out
        }
    );
});