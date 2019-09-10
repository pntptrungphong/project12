$(document).ready(function () {
    $('nav>ul>li>a').click(function (e) { 
        e.preventDefault();
        $(this).css('color', 'green');
        // let top = $('.contact').offset().top;
        // // var top = offset.top;
        // // var left = offset.left;
        // console.log(top);
        // $('html').animate({
        //     scrollTop:top

        // },600);
        // // $(windown).scrollTop(top);
        // let className =$(this).attr('class');
        // let idName= '#' +className;
        //    let top = $(idName).offset().top;
        $(this).animate({
            marginLeft:20,
            opacity:0.2,
            
        },600,'easeOutElastic');
        console.log(this);
        // let className =$(this).attr('href');
        //    let top = $(className).offset().top;
        //   $('html').animate({
        //     scrollTop:top

        // },900,'easeOutElastic');
    });
});