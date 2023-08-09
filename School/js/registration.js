$(function(){
    $("form[name='signup']").validate({
        rules:{
            firstname:"required",
            lastname:"required",
            email:"required",
            password:{
                required:true,
                minlength:8,
                maxlength:20
            },
            phonenumber:{
                required:true,
                length:10
            },
            address1:{
                required:true,
                maxlength:30
            },
            address2:{
                required:true,
                maxlength:30
            },
            city:"required",
            state:"required",
            district:"required",
            zip:{
                required:true,
                length:6
            }
        },
        messages:{
            firstname:"Please enter your first name",
            lastname:"Please enter your last name",
            email:"Please enter a valid Email ID",
            password:{
                required:"Please enter a valid Password",
                minlength:"Your Password must be greater than 8 characters",
                maxlength:"your Password must be lesser than 20 characters"
            },
            phonenumber:{
                required:"Please enter your phone number",
                length:"Your Phone number should be 6 characters long"
            },
            address1:{
                required:"Please enter your Address Line 1",
                maxlength:"Your Address Line 1 should not be greater than 30 characters"
            },
            address2:{
                required:"Please enter your Address Line 2",
                maxlength:"Your Address Line 2 should not be greater than 30 characters"
            },
            city:"Please enter your nearest city name",
            state:"Please select your state",
            district:"Please select your district",
            zip:{
                reuired:"Please select your zip code",
                length:"Your zip code should be 6 characters long"
            }
        },
        submitHandler:function(form){
            form.submit();
            alert("Signup Successful!");
        }
    });
    
});