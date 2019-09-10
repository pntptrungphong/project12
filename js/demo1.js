//jqdoc
$(document).ready(function () {
    alert('ok');
    //viet code trong nay
    //jqclick
   $('#click').click(function (e) { 
       //chống lại mặc định của html
       e.preventDefault();
       $('.main-modal').fadeIn('slow');
       // opacity 0->1
       //display:none => block
   }); 
   $('.no').click(function (e) { 
       e.preventDefault();
       $('.main-modal').fadeOut();
       
   });
});
