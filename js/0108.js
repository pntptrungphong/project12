$(document).ready(function(){
    $(".slider1").owlCarousel(
        {
            items:1,
            margin:10,
            loop: true,
            autoplay: true,
            autoplayTimeout:5000,
            nav: true,
            navText:['<i class="fa fa-arrow-alt-circle-left"></i>','<i class="fa fa-arrow-alt-circle-right"></i>'],
            navSpeed: 500,
            // items 3 : hien 3 hinh
        }
    );
  });