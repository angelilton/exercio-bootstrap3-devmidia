$(function(){
    
    $(".ttp").tooltip({
        title:"title via js",
        animation: false,
    })
    
    $(".ppv").popover({
        title:"popover"        
    })
    
    $(".btn-js").button()
    
    $("#troca-estado").click(function(){
        var btn = $(this);
        btn.button("loading")
        
        setTimeout(function(){
            btn.button("reset")
        }, 3000)
    })
})