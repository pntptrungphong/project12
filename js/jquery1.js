//cho tai lieu load
$(document).ready(function(){
    // lenh chi chay khi tai xong tai lieu len
    var btb=document.getElementById('changeImg');
    btb.onclick=cImg;
});
var CurrentImg=1;
function cImg(){
    if(CurrentImg==1){
        // attr đổi thuộc tính src
        // $('#hinh').attr("src","img/1.jpg");
        $('#hinh').addClass('w2');
        CurrentImg=2;
    }
    else if(CurrentImg==2){
        // $('#hinh').attr("src","img/2.jpg");
        $('#hinh').addClass('w3');
        CurrentImg=3;
    }
    else{
        $('#hinh').removeClass('w2').removeClass('w3');
        CurrentImg=1;
    }
}