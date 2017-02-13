/**
 * Created by jacky on 2/13/17.
 */
// for typing animation
$(function(){

    $("#top-typing").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        strings: [
            "최고의 사람들이 모인 소모임 <strong>시소</strong>",
            "이제 <strong>당신만</strong>  함께하면 됩니다.",
            "지금 <strong>가입</strong>신청하세요."
        ],
        typeSpeed: 50,
        backDelay: 500,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false
//                callback: function(){ second(); },
//                resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

$(function(){
    $("#typed").typed({
        strings: [
            "<strong>Syso Info</strong><br/>" +
            "소모임이름 : 시스템소프트웨어 (시소)<br/>" +
            "하는 일   : 코딩, 각종 공모전 참가<br/>" +
            "구성원 수  : 36 명",

            "<strong>Recruit Parts</strong><br/>"+
            "개발자<br>" +
            "디자이너<br/>" +
            "Electronic Engineer<br/>",

            "<strong>지원 자격</strong><br>"+
            "숭실대, 서울대, 중앙대학생<br/>"+
            "시스템소프트웨어에 관심이 있는사람<br/>",

            "<strong>Contact Us</strong><br/>" +
            "이승우 : 010-2970-7416<br/>" +
            "조성재 : 010-6483-9653"
        ],
        typeSpeed: -1000,
        backDelay: 400,
        loop: true,
        contentType: 'html',
        callback: function(){ second(); }

    });

    function second(){
        console.log("this is hidden message contact gomjellie@gmail.com");
    }
});
