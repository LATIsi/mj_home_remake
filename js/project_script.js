$(function(){
    let category_num = 0;
    let image_index = 0;
    let popup_image = null;
    let js_set_list = "web_list_data";
    let html_set_list = null;

    var web_list_data = [
        {   
            id: 1,
            image1: "1_web_mobile/shopping_1.png",
            image2: "1_web_mobile/shopping_2.png",
            image3: "1_web_mobile/shopping_3.png",
            title_Text: "쇼핑몰 페이지",
            date: "2025.01~2025.07",
            team_Member: "인원 : 1명",
            Contribution: "개발 기여도 100%",
            description: "2025.01월 ~ 2025.03월 기간 동안<br>인턴IN메타 수업 이수 후<br>개별적으로 피그마 페이지 수정 및 코드 업데이트 진행",
            button_Google: "#",
            button_Figma:"https://www.figma.com/design/54EVKiuOUgL4lTlOSGgEpn/%EC%9D%91%EC%9A%A9%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%95%88--Copy-?t=G3F4FM39vBVFYOzY-1",
            button_Github: "https://github.com/LATIsi/shoes-shopping-mall",
            button_Page: "https://latisi.github.io/shoes-shopping-mall/",                   
        },
        {   
            id: 2,
            image1: "1_web_mobile/draw_app_1.png",
            image2: "1_web_mobile/draw_app_2.png",
            image3: "404.jpg",
            title_Text: "draw_app",
            date: "2025.08~2025.09",
            team_Member: "인원 : 1명",
            Contribution: "개발 기여도 100%",
            description: "2022.09월 ~ 2022.10월에 진행한<br>클론 코딩 프로젝트를 리뉴얼해<br>모바일 디바이스도 가능한 그림판 웹/앱 브라우저",
            button_Google: "#",
            button_Figma:"https://www.figma.com/design/sj7YtDzXbdOf8P6ylJaE54/drawapp?node-id=0-1&t=I12Rm68lLG63r1HD-1",
            button_Github: "https://github.com/LATIsi/drawapp_JS",
            button_Page: "https://latisi.github.io/drawapp_JS/",                   
        },
        {   
            id: 3,
            image1: "1_web_mobile/todo_list_1.png",
            image2: "1_web_mobile/todo_list_2.png",
            image3: "404.jpg",
            title_Text: "todo_list",
            date: "2025.08~2025.09",
            team_Member: "인원 : 1명",
            Contribution: "개발 기여도 100%",
            description: "2022.09월 ~ 2022.10월에 진행한<br>클론 코딩 프로젝트를 리뉴얼해<br>모바일 디바이스도 가능한 투두리스트 웹/앱 브라우저",
            button_Google: "#",
            button_Figma:"https://www.figma.com/design/BIkgCo2e3e5eRreOxWuf8N/today-list?t=I12Rm68lLG63r1HD-1",
            button_Github: "https://github.com/LATIsi/web_app_backgorund",
            button_Page: "#",                   
        }        
    ];



    var content_list_data = [
        {   
            id: 1,
            image1: "404.jpg",
            image2: "404.jpg",
            image3: "404.jpg",
            title_Text: "콘텐츠 작업",
            date: "2025.08~",
            team_Member: "인원 : 1명",
            Contribution: "개발 기여도 100%",
            description: "인프런으로 블렌더, 일러스트, 포토샵 강의를 들으며<br>만든 컨텐츠들 입니다.",
            button_Google: "#",
            button_Figma:"#",
            button_Github: "#",
            button_Page: "#",                   
        } 
    ];


    var video_list_data = [
        {   
            id: 1,
            image1: "3_video/video_2.png",
            image2: "3_video/video_1.png",
            image3: "3_video/video_3.png",
            title_Text: "인트로 영상",
            date: "2025.05~2025.06",
            team_Member: "인원 : 1명",
            Contribution: "제작 기여도 100%",
            description: "내일배움카드로 학원 강의를 수강하며 어도비 프리미어 2025로 만든 인트로에 활용할 영상 및 ai자막을 활용해 만든 영상들 입니다.",
            button_Google: "https://drive.google.com/drive/folders/1tA2RQRKJ1v4CKPlMtWXeG0jDuEYLKJt9",
            button_Figma:"#",
            button_Github: "#",
            button_Page: "#",                   
        }
    ];



    var plan_list_data = [
        {   
            id: 1,
            image1: "4_plan/solo_1.png",
            image2: "4_plan/solo_2.png",
            image3: "4_plan/solo_3.png",
            title_Text: "app 기획 / 개인",
            date: "2020.06~2020.12",
            team_Member: "인원 : 1명",
            Contribution: "기여도 100%",
            description: "2020년 대학교 3학년 어플 기획 수업을 듣고<br>PPT로 작성한 기획들. 주제는 두개로, <br>반찬 배달 어플과 대학 서점 어플입니다.",
            button_Google: "#",
            button_Figma:"#",
            button_Github: "#",
            button_Page: "#",                   
        },
        {   
            id: 2,
            image1: "4_plan/team_1.png",
            image2: "4_plan/team_2.png",
            image3: "4_plan/team_3.png",
            title_Text: "app 기획 / 팀",
            date: "2019.06~2020.12",
            team_Member: "인원 : 4~3명",
            Contribution: "팀장",
            description: "대학교 다니면서 팀프로젝트를 한 활동들을 정리한 PPT입니다.<br> 프로젝트들의 프론트엔드 어플 디자인을 주로 맡았습니다.",
            button_Google: "#",
            button_Figma:"#",
            button_Github: "#",
            button_Page: "#",                   
        }
    ];


    var etc_list_data = [
        {   
            id: 1,
            image1: "5_etc/Seongnam_Intern(2023)_1.png",
            image2: "5_etc/Seongnam_Intern(2023)_2.png",
            image3: "5_etc/Seongnam_Intern(2023)_3.png",
            title_Text: "청년희망인턴(2023)",
            date: "2023.05~2023.12",
            team_Member: "인원 : 1명",
            Contribution: "제작 기여도 90% (10% 컨펌)",
            description: "2023.05월 부터 2023.12월까지<br>성남시청 청년희망인턴으로 근무하며 작업한 업무들을<br>정리한 문서입니다.",
            button_Google: "https://drive.google.com/file/d/1RCwMabi-JAXjB6N1b7Bgo6x0r1aKxaoS/view?usp=sharing",
            button_Figma:"#",
            button_Github: "#",
            button_Page: "#",                   
        }          
    ];



    // 해당 카테고리에 배열로 html에 능동적으로 추가하기



/*     $.each(now_category,function(key,value){ /js 태그
        $("."+set_list+"") / html 태그
*/

    show_list();

    //카테고리 리스트 갯수 수정
    let list_length = $(".web_project>ul:nth-child(1)>li").length;

    for(var i=0; i<list_length;i++){
        $(".select_list").append("<li></li>");
    }


    // 카테고리 지정

    $($(".select_list>li")).eq(0).addClass("select_num");

    $(".category>li").click(function(){

        list_length = 0;
        category_num = 0 ;
        image_index = 0;

        // 카테고리 이동시 그 카테고리의 리스트 첫번째부터 보여주기 
        $(".web_project>ul").animate({
            left : 0
        },'slow');

        // 선택한 카테고리 강조
        $(".category>li").removeClass("inter-category-select-bold",{duration:500});  
        $(this).addClass("inter-category-select-bold",{duration:300});

        
        category_num = $(this).index();

        $(".web_project>ul").empty(); 
        show_list();

        // 클릭한 카테고리 프로젝트 보이게 하기
        $(".web_project>ul").hide();
        $(".web_project>ul").eq(category_num).css("display","flex").show();

        //카테고리 프로젝트 리스트 갯수 초기화
        $(".select_list>li").detach();

        list_length = $(".web_project>ul:nth-child("+(category_num+1)+")>li").length;

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


    // 화살표 클릭시 프로젝트 슬라이더 순서 이동 


    $(".lefticon").click(function(){
        image_index --;

        if(image_index<0){
            image_index = list_length-1;
        }

        image_slide(image_index);

        check_list_bigger(image_index);

    });

    $(".righticon").click(function(){
        image_index ++;

        if(image_index>list_length-1){
            image_index = 0;
        }

        image_slide(image_index);

        check_list_bigger(image_index);
    });




    // 이미지 클릭시 팝업 뜨게 하기

    $(".project_sub_image>img").click(img_popup);




    // 함수 : image_index의 수만큼(클릭수) 이미지 슬라이드    

    function image_slide(num){
        $(".web_project>ul:nth-child("+(category_num+1)+")").animate({
            left : -(num*1200)
        });

    }

    
    // 함수 : 이미지 클릭시 팝업 뜨게 하기

    function img_popup(){
        
        popup_image = $(this).attr("src");

        console.log("popup_image 경로는 "+popup_image);
    
        $(".popup").show();

        $(".popup>img").attr('src', popup_image);
        
        $(".popup").click(function(){
             $(".popup").hide();           
        });

        popup_image = null;
    };




    // 함수 : 프로젝트 리스트에서 현재 클릭한 요소 크게 하기 & 슬라이드 이동

    function click_list(){
        $(".select_list>li").removeClass("select_num",{duration:500});  
        $(this).addClass("select_num",{duration:300});

        image_index = $(this).index();

        image_slide(image_index);

        return false;
    }


    // 함수 : 화살표 클릭시 해당 리스트 요소 크게해주기
    
    function check_list_bigger(num){
        $(".select_list>li").removeClass("select_num",{duration:500});  
        $(".select_list>li").eq(num).addClass("select_num",{duration:300});
    }


    // 함수 : 컨텐츠 박스에 리스트 내용 보이게 하기
    function show_list(){
        js_set_list = null;

        switch(category_num){
            case 0 :
                js_set_list = web_list_data;
                html_set_list = ".web_list"
            break;
            case 1 :
                js_set_list = content_list_data;
                html_set_list = ".content_list";             
            break;
            case 2 :
                js_set_list = video_list_data;
                html_set_list = ".video_list"             
            break;         
            case 3 :
                js_set_list = plan_list_data;
                html_set_list = ".plan_list"               
            break;
            default :
                js_set_list = etc_list_data;
                html_set_list = ".etc_list"               
            break;
        }


        for ( var value of Object.values(js_set_list)) {

            $(html_set_list).append(
                `
                    <li>
                        <ul class="contexnt_grop">
                            <li><img src="../image/4_project/`+value.image1+`" class="content_main_image"></li>
                            <li>
                                <ul class="content_script">
                                    <li class="roboto-project-content-title">`+value.title_Text+`</li>
                                    <li class="roboto-project-content-date">`+value.date+`</li>
                                    <li class="roboto-project-content-description"><span>`+value.team_Member+`</span><span>`+value.Contribution+`</span></li>
                                    <li><hr></li>
                                    <li class="roboto-project-content-description semi_desc">
                                        <p>`+value.description+`</p>
                                    </li>
                                    <li>
                                    <ul class="Righteous-project-content-buttons">
                                        <li><a href="`+value.button_Google+`" target='_blank'">google drive</a></li>
                                        <li><a href="`+value.button_Figma+`" target='_blank'">figma</a></li>
                                        <li><a href="`+value.button_Github+`" target='_blank'">github</a></li>
                                        <li><a href="`+value.button_Page+`" target='_blank'">Page</a></li>
                                    </ul>
                                    </li>
                                    <li class="project_sub_image">
                                        <img src="../image/4_project/`+value.image1+`">
                                        <img src="../image/4_project/`+value.image2+`">
                                        <img src="../image/4_project/`+value.image3+`">
                                    </li>
                                </ul>                                                
                            </li>
                        </ul>
                    </li>
                `
            );
        }
        
        // 이미지 클릭시 팝업 뜨게 하기

        $(".project_sub_image>img").click(img_popup);

    }
});
