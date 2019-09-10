$(document).ready(function () {
    var count = 0;

    $('.logo').click(function (e) { 
        e.preventDefault();
        // $('.sub-menu').css('transform','scaleY(1)');
        count += 1;
        $('.go>a>span').html('<b>Goophim</b>');
        $('.go').animate({width:'200px'},600);
        $('.content-left1').css('display','none');
        $('.content-left2').css('display','block');
        $('.content-left2').animate({
          width:'200px'
        },600);
        $('.content-right').animate({
          width:'80%'
        },600)
        $('.item1').animate({
          padding:'7px'
        },600)
          if (count == 2) {
            // come code
            // $('.sub-menu').css('transform','scaleY(0)');
            $('.go>a>span').html('<b>G</b>oo');
            $('.content-left1').css('display','block');
            $('.content-left1').animate({
              width:'60px'
            },300);
            $('.content-left2').animate({
              width:'60px',
              // display:'none'
            },300);
            $('.content-left2').css('display','none');
            $('.go').animate({width:'60px'},100);
            $('.content-right').animate({
              width:'90%'
            },600)
            $('.item1').animate({
              padding:'15px'
            },600)
            count=0;

          }
    });
    $('.film').click(function (e) { 
      e.preventDefault();
      $('.select').slideToggle();
    });
    $('.dark').click(function (e) { 
      e.preventDefault();
      $('.dark>a').html('<a href=""><i class="fas fa-adjust"></i> Chuyển sang Light theme</a>');
      $('header').css('background','#2D3035');
      $('.container').css('background','#2D3035');
      $('button').css('background','#2D3035');
      $('.go').css('background','#34373d');
      $('input').css({
        background:'#2D3035',
        'border':'1px solid white'
      });
      $('button').css({
        'border':'1px solid white'
      });
      $('.hd').css({
        background:'#2D3035',
        'border':'1px solid white'
      });
      $('.tvhay').css({
        background:'#2D3035',
        'border':'1px solid white'
      });
      $('.phim14').css({
        background:'#2D3035',
        'border':'1px solid white'
      });
      $('.newFilm').css({
        background:'#2D3035',
        'border':'1px solid white'
      });
      $('p>a').css({
        color: '#DB6574'
      });
      $('.content-right>img').replaceWith('<img src="http://goophim.com/img/logo_goophimdarkmode.png" alt="">');
      count += 1;
      if (count == 2) {
      $('.dark>a').html('<a href=""><i class="fas fa-adjust"></i> Chuyển sang Dark theme</a>');
        $('header').css('background','#3c8dbc');
        $('.container').css('background','#ecf0f5');
        $('button').css('background','#31b0d5');
        $('.go').css('background','#367fa9');
        $('input').css({
          background:'#fff',
          'border':'1px solid white'
        });
        $('button').css({
          'border':'1px solid white'
        });
        $('.hd').css({
          background:'#dd4b39',
          'border':'1px solid #d73925'
        });
        $('.tvhay').css({
          background:'#ec971f',
          'border':'1px solid #d5851'
        });
        $('.phim14').css({
          background:'#449d44',
          'border':'1px solid #398439'
        });
        $('.newFilm').css({
          background:'#31b0d5',
          'border':'1px solid #269abc'
        });
        $('p>a').css({
          color: '#72afd2'
        });
        $('.content-right>img').replaceWith('<img src="http://goophim.com/img/logo_goophim.png" alt="">');
        count=0;
      }
    });
    $('.list-title>ul>li').click(function (e) { 
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('.list-title>ul>.tab1').click(function (e) { 
      e.preventDefault();
      $('.list-film-1').css('display','block');
      $('.list-film-2').css('display','none');
      $('.list-film-3').css('display','none');
      $('.list-film-4').css('display','none');
    });
    $('.list-title>ul>.tab2').click(function (e) { 
      e.preventDefault();
      $('.list-film-2').css('display','block');
      $('.list-film-1').css('display','none');
      $('.list-film-3').css('display','none');
      $('.list-film-4').css('display','none');
    });
    $('.list-title>ul>.tab3').click(function (e) { 
      e.preventDefault();
      $('.list-film-3').css('display','block');
      $('.list-film-2').css('display','none');
      $('.list-film-1').css('display','none');
      $('.list-film-4').css('display','none');
    });
    $('.list-title>ul>.tab4').click(function (e) { 
      e.preventDefault();
      $('.list-film-4').css('display','block');
      $('.list-film-2').css('display','none');
      $('.list-film-3').css('display','none');
      $('.list-film-1').css('display','none');
    });
});