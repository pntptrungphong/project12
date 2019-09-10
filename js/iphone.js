$(document).ready(function () {
    $(".slider1").owlCarousel(
        {
            items:1,
            margin:10,
            loop: true,
            autoplay: true,
            autoplayTimeout:5000,
            nav: true,
            navText:[,'<i class="fas fa-angle-right"></i>'],          
            navSpeed: 3000,
            // items 3 : hien 3 hinh
        }
    );
    $('.hi-tech>a>i').click(function (e) { 
        e.preventDefault();
        $('.secondary-menu').toggle(1000);
    });
});