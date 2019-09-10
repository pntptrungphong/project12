var tong=0;
var button=document.getElementById("kq");
button.onclick=function(){
var random1=Math.floor(Math.random()*6)+1;
if(random1===1){
    tong=0;
    alert('sory vì cái lồn này bằng 1 '+tong);
}
else{
    tong=tong+random1;
    console.log(tong);
    if(tong>=30){
        console.log('dừng tại đây');
        return;
    }
}    
  
}
