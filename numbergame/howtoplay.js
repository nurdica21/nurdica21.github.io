jQuery(document).ready(function($){

    $("#rule").click(function(){
    
    if($(this).hasClass('opened')){
        $(".rules").slideUp();
    }else {
        $(".rules").slideDown();
    
    }
    
    $(this).toggleClass('opened');
    
    });
    
    });