$(function(){
    $("form[name='login']").validate({
        rules:{
            email:"required",
            password:{
                required:true,
                minlength:8,
                maxlength:20
            }
        },
        messages:{
            email:"Please enter a valid Email ID",
            password:{
                required:"Please enter a valid Password",
                minlength:"Your Password must be greater than 8 characters",
                maxlength:"your Password must be lesser than 20 characters"
            }
        },
        submitHandler:function(form){
            form.submit();
            alert("Login Successful!");
        }
    });
    
});