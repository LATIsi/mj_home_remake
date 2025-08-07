$(function(){
    let t = 0;

    $(".skill_button>li").click(function(){

        t= 0;
        $(".skill_button>li").removeClass("skill_set",{duration:500});  
        $(this).addClass("skill_set",{duration:500});
        $(this).addClass("someDiv",{duration:500});

        t = $(this).index();
        
        color_development = "#7A64FF";
        color_design = "#4FADFF";
        color_office_work = "#FFC31F";

        switch(t){
            case 1 :
                 $("#skill").css("background-color",color_design);   
                break;
            case 2 :
                 $("#skill").css("background-color",color_office_work);   
                break;            
            default :
                 $("#skill").css("background-color",color_development);   
                break;
        }

        $(".skill_contents>li").hide();
        $(".skill_contents>li").eq(t).show();
    })
});