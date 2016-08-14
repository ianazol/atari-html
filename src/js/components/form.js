$(".js-formValidate").find(".required").change(function(){
    if($(this).val() == ''){
        $(this).addClass("invalid");
    }
    else{
        $(this).removeClass("invalid");
    }
});

$('.js-formValidate').submit(function(){
    var error = false,
        form = $(this);

    form.find(".required").each(function(index, element){
        if($(element).val() == ''){
            error = true;
            $(element).addClass("invalid");
        }
        else{
            $(element).removeClass("invalid");
        }
    });

    if (!error){
        $.ajax({
            url: '/include/sendForm.php',
            type: 'POST',
            dataType: 'html',
            data: $(this).serialize(), 
            success: function(response){
                if (response == 'ok'){
                    form.siblings(".form__success").removeClass("hidden");
                    form[0].reset();
                }
            }
        });
    }

    return false;
});