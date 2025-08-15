$(function(){

    $(".menu_mobile").click(function(){
        $("header>nav").addClass("show");
    })

    $(document).mouseup(function (e){
        if($("header>nav").has(e.target).length === 0){
            $("header>nav").removeClass("show");
        }
    });

    return false;
});