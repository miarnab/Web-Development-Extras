$(function(){
    $("form[name='otplogin']").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            mobilenumber:{
                required:true,
                minlength:10
            }
        },
        messages:{
            email:{
                required:"Please enter a valid Email ID",
            },
            mobilenumber:{
                required:"Please enter a valid Mobile Number",
                minlength:"Your Mobile Number must contain 10 digits"
            }
        },
        submitHandler:function(form){
            form.submit();
        }
    });
});