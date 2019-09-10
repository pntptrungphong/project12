//cho tai lieu load

// $(document).ready(function(){
//     // lenh chi chay khi tai xong tai lieu len
//     // var btb=document.getElementById('changeImg');
//     // btb.onclick=cImg;
//     document.getElementById('btb1').onclick=function(){
//         var html=$('#div1').html();
//         alert(html);
//     }
//     document.getElementById('btb2').onclick=function(){
//         $('#div1').html('<b>Đây là nội dung cũ</b> <a href="#">ABC</a>');
//     }
//     document.getElementById('btb3').onclick=function(){
//         var text=$('#div1').text();
//         alert(text);
//     }
//     document.getElementById('btb4').onclick=function(){
//         $('#div1').text('today im so sad');
//     }
// });
$(document).ready(function(e){
    setupEvent();
});
function setupEvent(){
    //show
    $('#show').click(function()
    {
        $('#image').slideDown(500);
    });
    //hide
    $('#hide').click(function () { 
        $('#image').slideUp(500);
        
    });
    //toggle
    $('#toggle').click(function () { 
        $('#image').slideToggle(500);
        
    });
}