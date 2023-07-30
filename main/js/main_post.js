
// contents_box 안에 버튼들 객체 가져오기
/*컨텐츠 박스안의 작업 ----------------------------------------------*/
var recruit_project=document.getElementById("recruit_project");
var using_way=document.getElementById("using_way");
var information=document.getElementById("information");
var question=document.getElementById("question");
var my_page=document.getElementById("my_page");

var contents=document.querySelectorAll(".contents");
contents.forEach(function(item,index){
    item.addEventListener("mouseover",function(){
        this.style.backgroundColor="#E2E2E2";
    })
    item.addEventListener("mouseout",function(){
        this.style.backgroundColor="white";
        })
})
/*---------------------------------------------------------------------*/



/*---------------------------------------------------------------------*/

/* 개발자를 찾으시나요?? 파트------------------------------------*/
var no_hard1=document.querySelector("#no_hard1");
var no_hard2=document.querySelector("#no_hard2");

no_hard1.addEventListener("click",function(){
   
    window.scrollTo({ left: 0, top: 500, behavior: "smooth" });
})

no_hard2.addEventListener("click",function(){
    window.scrollTo({ left: 0, top: 2000, behavior: "smooth" });
})



//프로젝트 단계별 step 파트 
/*프로젝트 step 이벤트 처리작업------------------------------------------*/
var step_circles=document.querySelectorAll(".step");
var gap=0;

step_circles[0].addEventListener("click",function(){
    console.log("dd");
    window.scrollTo({ left: 0, top: 1500, behavior: "smooth" });
})
step_circles[1].addEventListener("click",function(){
    window.scrollTo({ left: 0, top: 1900, behavior: "smooth" });
})
step_circles[2].addEventListener("click",function(){
    window.scrollTo({ left: 0, top: 2200, behavior: "smooth" });
})

/*---------------------------------------------------------------------*/  

/* step 부분 화살표 이벤트*/
var left=document.querySelector("#left");
var right=document.querySelector("#right");
var step_part_page=0;
// 원 위에 텍스트들의 객체
var step_text1=document.querySelector("#step_text1");
var step_text2=document.querySelector("#step_text2");
var step_text3=document.querySelector("#step_text3");
// step 원 안에 텍스트
var step1=document.querySelector("#step1");
var step2=document.querySelector("#step2");
var step3=document.querySelector("#step3");




