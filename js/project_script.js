$(function(){
    let t = 0;
    let image_index = 0;

    //카테고리 리스트 갯수 수정
    let list_length = $(".web_project>ul:nth-child(1)>li").length;

    for(var i=0; i<list_length;i++){
        $(".select_list").append("<li></li>");
    }


    // 카테고리 지정

    $($(".select_list>li")).eq(0).addClass("select_num");

    $(".category>li").click(function(){

        list_length = 0;
        t= 0;

        $(".category>li").removeClass("inter-category-select-bold",{duration:500});  
        $(this).addClass("inter-category-select-bold",{duration:300});

        t = $(this).index();

        // 선택한 카테고리 강조
        $(".skill_contents>li").hide();
        $(".skill_contents>li").eq(t).show();

        // 클릭한 카테고리 프로젝트 보이게 하기
        $(".web_project>ul").hide();
        $(".web_project>ul").eq(t).css("display","flex").show();

        //카테고리 프로젝트 리스트 갯수 초기화
        $(".select_list>li").detach();

        list_length = $(".web_project>ul:nth-child("+(t+1)+")>li").length;

        //카테고리 프로젝트 리스트 갯수 수정
        for(var i=0; i<list_length;i++){
            $(".select_list").append("<li></li>");
        }


        
        // 카테고리 선택시 프로젝트 리스트의 첫 항목 포인트 주기

        $(".select_list>li:nth-child(1)").addClass("select_num");



        // 선택한 요소 프로젝트 리스트에서 크게하기

        $(".select_list>li").click(click_list);
        
        return false;
    })


    // 프로젝트 리스트에서 선택한 요소 순번 크게하기

    $(".select_list>li").click(click_list);






    // 함수 : 프로젝트 리스트에서 현재 클릭한 요소 크게 하기

    function click_list(){
        $(".select_list>li").removeClass("select_num",{duration:500});  
        $(this).addClass("select_num",{duration:300});

        $(".select_list>li").hide();
        $(".select_list>li").show();

        return false;
    }

    // 함수 : 버튼 누르면 이미지 슬라이드



});
