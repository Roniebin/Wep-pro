


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