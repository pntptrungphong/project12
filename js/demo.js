function getInfo(){
    //mặc định lấy giá trị của người dùng nhập
    var fullname=document.getElementById("fullname").value;
    var email=document.getElementById("email").value;
    var address=document.getElementById("address").value;
    var phone=document.getElementById("phone").value;
    if(fullname==""){
        // innerHTM truyền nội dụng vào thẻ span trống bên dưới
        document.getElementById("errorname").innerHTML=" Vui lòng nhập đầy đủ thông tin của bạn";
    }
    else{
        document.getElementById("errorname").innerHTML="";
    }
    if(email==""){
        // innerHTM truyền nội dụng vào thẻ span trống bên dưới
        document.getElementById("erroremail").innerHTML=" Vui lòng nhập đầy đủ thông tin của bạn";
    }
    else{
        document.getElementById("erroremail").innerHTML="";
    }   
    if(address==""){
        // innerHTM truyền nội dụng vào thẻ span trống bên dưới
        document.getElementById("erroraddress").innerHTML=" Vui lòng nhập đầy đủ thông tin của bạn";
    }
    else{
        document.getElementById("erroraddress").innerHTML="";
    }  
     if(phone==""){
        // innerHTM truyền nội dụng vào thẻ span trống bên dưới
        document.getElementById("errorphone").innerHTML=" Vui lòng nhập đầy đủ thông tin của bạn";
    }
    else{
        document.getElementById("errorphone").innerHTML="";
    }
    //check show page
    if(fullname && address && address && phone){
        info = " Tên bạn là &nbsp;" +fullname+"<br/>";
        info += " Địa chỉ bạn là &nbsp;" +address+"<br/>";
        info += " Email bạn là &nbsp;" +email+"<br/>";
        info += " Phone bạn là &nbsp;" +phone+"<br/>";
        document.getElementById("kq").innerHTML = info;
    }
}
function returnInfo(){
    document.getElementById("errorname").innerHTML="";
}