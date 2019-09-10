$(document).ready(function () {
    var count = 0;

    // $('.cog').click(function (e) { 
    //     e.preventDefault();
    //     // $('.sub-menu').css('transform','scaleY(1)');
    //       count += 1;
    //       $('.sub-menu').css('transform','scaleY(1)');
    //       if (count == 2) {
    //         // come code
    //         $('.sub-menu').css('transform','scaleY(0)');
    //         count=0;
    //       }
    //     });
    $('.cog').click(function (e) { 
        e.preventDefault();
        $('.sub-menu-1').slideToggle(1000);
    });
    var startImg=1;
    var endImg=2;
    $(".slider-content-1").each(function () {
        // element == this
        //nếu là show thì gán stt=(this).attr
        if($(this).is(':visible')){
            stt=$(this).attr("stt");
        }           
    });
    console.log(stt);
    var stt=1;

    $("#next").click(function (e) { 
        e.preventDefault();
        next=++stt;
        console.log(next);
        if(next>=endImg){
            stt=0;
            
        }
         $(".slider-content-1").hide();
         $(".slider-content-1").eq(next-1).show();
         
    });
        
    $("#prev").click(function (e) { 
        e.preventDefault();
        prev=--stt;
        if(prev==startImg){
            stt=endImg;
        }
         $(".slider-content-1").hide();
         $(".slider-content-1").eq(prev).show();
    });
    $(window).scroll(function () { 
        let currentPos=$(window).scrollTop();
        console.log(currentPos);
        if(currentPos<105 && currentPos>99){
            $('header').hide();
            $('.icon123').fadeOut();
        } else if(currentPos<105){
            $('.icon123').fadeOut();
        } else if(currentPos>=110){
            $('.icon123').fadeIn();
            $('header').show(1000);
        } 
        else if(currentPos===50){
            $('header').show();
        }       
        $('.icon123').click(function (e) { 
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
        }, 600);
        });
    });
});