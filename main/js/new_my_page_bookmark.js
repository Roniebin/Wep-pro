//수정하기 버튼
var edit=document.querySelector(".edit");
//원래 내 개인정보
var bookmark_container=document.querySelector(".bookmark_container");
//수정하기를 눌렀을때, 뜰 수정용 개인정보
var edit_bookmark_container=document.querySelector(".edit_bookmark_container");

edit_bookmark_container.style.display="none";
//수정하기를 누르면 원래개인정보는 안보이고 수정용 개인정보를 띄움
edit.addEventListener("click",function(){
    bookmark_container.style.display="none";
    edit_bookmark_container.style.display="block";
});


var edit_save=document.querySelector(".edit_save");
var edit_cancle=document.querySelector(".edit_cancle");

edit_cancle.addEventListener("click",function(){
    bookmark_container.style.display="block";
    edit_bookmark_container.style.display="none";
});
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

var edit_my_bookmarks=document.querySelectorAll('.edit_my_bookmarks');
var trashcan=document.querySelectorAll('.trashcan');

var n;

trashcan.forEach(function(item,index){
    trashcan[index].addEventListener('click',function(){
        n= edit_my_bookmarks[index].childNodes[3].innerHTML;
        console.log(n);
        edit_my_bookmarks[index].remove();
       
    })
   })


var donga=document.querySelector('.donga');
donga.addEventListener('mouseover',function(){
    donga.style.cursor= "pointer";
})

donga.addEventListener('click',function(){
    location.href='main_post.html';
})