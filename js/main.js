$(function(){

    //메뉴
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })

    //이미지 슬라이드
    var n = 0;

    setInterval(function(){
        if(n==2){
            n =0
        }else{
            n++;
        }

        pos = n * (-600) + "px";

        $(".top_move").animate({top : pos},500)

    },2500)

    //팝업
    $(".p_click").click(function(){
        $(".pop_bg, .popup").show();
    })

    $(".close").click(function(){
        $(".pop_bg, .popup").hide();
    })
})