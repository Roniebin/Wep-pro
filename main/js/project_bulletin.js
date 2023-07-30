// 광고 배너 파트 안에 배너 슬라이드 작업 

var slide_circles= document.querySelectorAll(".circle");
var project_pic=document.querySelector("#project_pic");
slide_circles.forEach(function(item,index){
    item.addEventListener("mouseover",function(){
        this.style.backgroundColor="white";
        this.style.cursor= "pointer";
    });
    item.addEventListener("mouseout",function(){
        this.style.backgroundColor="gray";
        this.style.cursor= "pointer";
    });
    
});
slide_circles[0].addEventListener("click",function(e){
    project_pic.src="./images/프로젝트사진1.jpg"
    slide_circles[0].style.backgroundColor="black"

});
slide_circles[1].addEventListener("click",function(e){
    project_pic.src="./images/프로젝트사진2.png"
    slide_circles[1].style.backgroundColor="black"
   
});
slide_circles[2].addEventListener("click",function(e){
    project_pic.src="./images/프로젝트사진3.png"

 
});

//5초마다 광고 변경
setInterval(() => sliding(), 1000);
var count_time=0;
function sliding(){
    if(slide_circles.length-1%count_time!=0){
        slide_circles[count_time].click();
        if(count_time-1==-1){
            slide_circles[slide_circles.length+count_time-1].style.backgroundColor="gray"
        }else {
            slide_circles[count_time-1].style.backgroundColor="gray"
        }
        count_time++;
        if(count_time==slide_circles.length){
            count_time=0;
        }
    }else {
        slide_circles[count_time].click();
    
    }
}


// 광고 변경시 스무스하게 변경되도록 이벤트 추가 할 것

//searching 검색이벤트 구현

var searching_phrase=document.getElementById("searching_phrase");
var searching_img=document.getElementById("searching_img");

var projects_title=document.querySelectorAll(".proj");
var projects_date=document.querySelectorAll(".date");


searching_img.onclick=function(){
    var temp=searching_phrase.value;
    console.log(temp);
    console.log(projects_title[1].childNodes[1].innerHTML);

    projects_title.forEach(function(item,index){
        var title=projects_title[index].childNodes[1].innerHTML;
        if(title==temp){
            projects_title[index].style.display = 'block';
            projects_date[index].style.display = 'block';
        }else {
            projects_title[index].style.display = 'none';
            projects_date[index].style.display = 'none';
        }
    })
}

var donga=document.querySelector('#donga');
donga.addEventListener('mouseover',function(){
    donga.style.cursor= "pointer";
})

donga.addEventListener('click',function(){
    location.href='main_post.html';
})

//북마크 이벤트연결

var heart=document.querySelectorAll('.heart1')

heart.forEach(function(item,index){
    console.log(heart[index]);
    heart[index].addEventListener('click',function(){
        console.log(heart[index].src);
        if(heart[index].src=="./images/하트모양(빨강).jpg"){
            console.log(heart[index].src);
            heart[index].src="./images/하트모양(회색).jpg";
           
        }else{
            console.log(heart[index].src);
            heart[index].src="./images/하트모양(빨강).jpg";
        }
    })
})