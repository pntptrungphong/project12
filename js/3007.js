$(document).ready(function () {
    // $('ul li a').click(function (e) { 
    //     e.preventDefault();
    //     //this click vào thằng nào thì sự kiện xảy ra tren thằng đó
    //     // $('a').removeClass('active');
    //     // $(this).addClass('active');
    //     let content=$(this).text();
    //     $('.content').text(content);
    //     //?????????????????
    //     $(this).toggleClass('active');
    // });
    $(window).scroll(function () { 
        let currentPos=$(window).scrollTop();
        console.log(currentPos);
        if(currentPos >200){
            $('.icon').fadeIn();
        }
        else{
            $('.icon').fadeOut();
        }
        $('.icon').click(function (e) { 
            e.preventDefault();
            $(window).scrollTop(0);
        });
    });
    // $('.click,.active').click(function (e) { 
    //     e.preventDefault();
        
    //     let top =$(this).offset().top;
    //     let left = $(this).offset().left;
    //    console.log(top +"||"+ left); 
    // });
    let width=$(window).width();
    let height=$(window).height();
    //giong hover
    // $('.click').mouseenter(function () { 
    //     let rd=Math.random();
    //     $(this).css({
    //         left:rd*width,  
    //         top:rd*height,
    //     })

    // });


});
