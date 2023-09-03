
var my_page_options=document.querySelectorAll('.my_page_options');

my_page_options.forEach(function(item,index){
    my_page_options[index].addEventListener('click',function(){
    
       if(index==0){
         location.href='new_my_page.html';
      
       }else if(index==1){
         location.href='new_my_page_project.html';
        
       }
     else if(index==2){
        location.href='new_my_page_bookmark.html';
       
      }
    })
   })

//프로젝트가 몇개인지
var counting=document.querySelector(".counting");

//프로젝트 개수를 누르면 프로젝트 관리페이지로 이동
counting.addEventListener("click",function(){
    location.href='new_my_page_project.html';
});



var my_projects=document.querySelectorAll(".my_projects");
my_projects.forEach(function(item,index){
    my_projects[index].addEventListener('click',function(){
    if(index==0){
        location.href='detailed_page.html';
    }
       
    })
   })