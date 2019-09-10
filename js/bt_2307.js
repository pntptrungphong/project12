$(document).ready(function () {
    $('.hirer').click(function (e) { 
        e.preventDefault();
        $('#hirer>a').addClass('active');
        $('#link>a').removeClass('active');
        $('.tab-pane>h3').html('Apply as a Hirer');
        $('.tab-2').css('display','block');
        // $('.tab-content').add('<div class="tab-2"><div class="tab-form-1"><div class="form-1"><input type="text" placeholder="First Name *"><input type="text" placeholder="Last Name *"><input type="email" placeholder="Email *"><input type="text" placeholder="Phone *"></div><div class="form-2"><input type="password" placeholder="Password *"><input type="password" placeholder="Confirm Password *"><select class="control"><option class="hiden" selected disabled>What is your Birthdate?</option><option value="">What is your Birthdate?</option><option value="">What is Your old Phone Number</option><option value="">What is your Pet Name?</option></select><input type="password" placeholder="Enter Your Answer *"></div</div></div>')
        $('.tab-1').css('display','none');
    });
    $('.form-gr.gr-1').click(function (e) { 
        e.preventDefault(); 
        $('.gr-1>input').addClass('bo-1');
        $('input').not('.gr-1>input').removeClass('bo-1');
    });
    $('.form-gr.gr-2').click(function (e) { 
        e.preventDefault(); 
        $('.gr-2>input').addClass('bo-1');
        $('input').not('.gr-2>input').removeClass('bo-1');
    });
    $('.form-gr.gr-3').click(function (e) { 
        e.preventDefault(); 
        $('.gr-3>input').addClass('bo-1');
        $('input').not('.gr-3>input').removeClass('bo-1');
    });
    $('.form-gr.gr-4').click(function (e) { 
        e.preventDefault(); 
        $('.gr-4>input').addClass('bo-1');
        $('input').not('.gr-4>input').removeClass('bo-1');
    });
    $('.form-gr.gr-5').click(function (e) { 
        e.preventDefault(); 
        $('.gr-5>input').addClass('bo-1');
        $('input').not('.gr-5>input').removeClass('bo-1');
    });
    $('.form-gr.gr-6').click(function (e) { 
        e.preventDefault(); 
        $('.gr-6>input').addClass('bo-1');
        $('input').not('.gr-6>input').removeClass('bo-1');
    });
    $('.form-gr.gr-8').click(function (e) { 
        e.preventDefault(); 
        $('.gr-8>input').addClass('bo-1');
        $('input').not('.gr-8>input').removeClass('bo-1');
    });
    $('.register').click(function (e) { 
        e.preventDefault();
        let firstname=$('.gr-1>input').val()
        let lastname=$('.gr-2>input').val()
        let email=$('.gr-3>input').val()
        let phone=$('.gr-4>input').val()
        let password=$('.gr-5>input').val()
        let cpassword=$('.gr-6>input').val()
        let enter=$('.gr-8>input').val()
        if(firstname && lastname && email && phone && password && cpassword &&enter !='' ){
            $('.tab-pane>h3').html('Success').css('color','green');
        }
        else{
            $('.tab-pane>h3').html('Not Success').css('color','red');
            $('.form-gr>input').addClass('bo-1');
            if(firstname !=''){
                $('.gr-1>input').addClass('bo-2');
            }
            if(lastname !=''){
                $('.gr-2>input').addClass('bo-2');
            }
            if(email !=''){
                $('.gr-3>input').addClass('bo-2');
            }
            if(phone !=''){
                $('.gr-4>input').addClass('bo-2');
            }
            if(password !=''){
                $('.gr-5>input').addClass('bo-2');
            }
            if(cpassword !=''){
                $('.gr-6>input').addClass('bo-2');
            }
            if(enter !=''){
                $('.gr-8>input').addClass('bo-2');
            }
            
        }
    });
});