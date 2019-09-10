
function validateSelectBox(obj) {
    var value= obj.value;
    if(value==='Outstanding'){
      service=0.3;
      console.log(service);
    }
    else if(value==='Good'){
       service=0.2;
      console.log(service);
    }
    else if(value==='ok'){
        service=0.15;
      console.log(service);
     }
     else if(value==='bad'){
        service=0.1;
      console.log(service);
     }
     else if(value==='terrible'){
        service=0.05;
      console.log(service);
     }
     return service;
    
}

function tinhtong() {
    var c=document.getElementById("people").value;
    var s=document.getElementById("bill").value;
    s=s*service/c;
    alert(s);
}