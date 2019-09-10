$(document).ready(function (){
    $('.left p a.ztooltip').mouseover(function (e) { 
        console.log('mouseover');
            $('.ztooltip-container').text($('.left p a.ztooltip').attr('ztool-source'));
            $('.ztooltip-container').css({'display':'block'});
            console.log(e.pageX +" | "+ e.pageY);
            var pageWith=$('body').width();
            console.log(pageWith);
            if(e.pageX<pageWith/2){
                
            }

    });
    $('.left p a.ztooltip1').mouseover(function () { 
        console.log('mouseover');
        if($('.left p a.ztooltip1').attr('ztool-type')=='text'){
            $('.ztooltip-container').text($('.left p a.ztooltip1').attr('ztool-source'));
        }   
        if($('.left p a.ztooltip1').attr('ztool-type')=='html'){
            var id=".ztooltip-source-"+$('.left p a.ztooltip1').attr('ztool-source');
            $('.ztooltip-container').html($(id).html());
        }   
        $('.ztooltip-container').css({'display':'block'});

    });
    $('.left p a.ztooltip').mousemove(function () { 
        console.log('mousemove');
    });
    $('.left p a.ztooltip').mouseout(function () { 
        console.log('mouseout');
        $('.ztooltip-container').css({'display':'none'});

    });
    $('.left p a.ztooltip1').mouseout(function () { 
        console.log('mouseout');
        $('.ztooltip-container').css({'display':'none'});

    });
});
