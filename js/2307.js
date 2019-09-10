//jqdoc
$(document).ready(function () {
    //viet code trong nay
    //jqclick
   $('#click').click(function (e) { 
       //chống lại mặc định của html
       e.preventDefault();
       $('.main-modal').slideDown();
       // opacity 0->1
       //display:none => block
   }); 
   $('.modal-content').click(function (e) { 
       e.preventDefault();
       //không bị ảnh hưởng bởi hiệu ứng bên class main-modal
       e.stopPropagation();
       
   });
   $('.main-modal').click(function (e) { 
       e.preventDefault();
       $('.main-modal').fadeOut();
       
   });
   $('.btn').click(function (e) { 
       e.preventDefault();
       //đặt biến cục bộ:let
       let username=$('.username').val()     
       let password=$('.password').val()
       let test=$('.resgister').test();
       if(username==="admin" && password==="admin"){
        //    $('.modal-content-top>span').text(<span>LOGIN SUSGESS</span>)
        $('.login').css('color', 'green').html('LOGIN SUSGESS <i class="fas fa-clock"></i>');
       } 
       else{
           alert('Nhập sai vui lòng nhập lại');
       }   
   });
});
