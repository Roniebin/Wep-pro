
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

//수정하기 버튼
var edit=document.querySelector(".edit");
//원래 내 개인정보
var inform_container=document.querySelector(".inform_container");
//수정하기를 눌렀을때, 뜰 수정용 개인정보
var edit_inform_container=document.querySelector(".edit_inform_container");
var changing_profile=document.querySelector(".changing_profile");

edit_inform_container.style.display="none";
//수정하기를 누르면 원래개인정보는 안보이고 수정용 개인정보를 띄움
edit.addEventListener("click",function(){
    inform_container.style.display="none";
    edit_inform_container.style.display="block";
    changing_profile.style.visibility="visible";
});


var edit_save=document.querySelector(".edit_save");
var edit_cancle=document.querySelector(".edit_cancle");

edit_cancle.addEventListener("click",function(){
    inform_container.style.display="block";
    edit_inform_container.style.display="none";
    changing_profile.style.visibility="hidden";
});

//계정탈퇴
var remove_account=document.querySelector(".remove_account");
remove_account.addEventListener("click",function(){
    location.href='remove_account.html';
});


var changing_profile=document.querySelector(".changing_profile");
changing_profile.addEventListener("click",function(){
    location.href='changing_profile.html';
});
