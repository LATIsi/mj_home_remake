$(function(){
    let t = 0;

    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on");

        t = $(this).index();

        if($('.tabmenu>li:nth-child(2)').hasClass('on')){
            $("#intro").css("background-color","#FFC31F");
        }else{
            $("#intro").css("background-color","#0468BF");
        }

        $(".tabcon").hide();
        $(".tabcon").eq(t).show();

    })

    return false;
});