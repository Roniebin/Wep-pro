

var info_btn=document.querySelectorAll(".info_btn");
info_btn.forEach(function(item,index){
    info_btn[index].addEventListener('mouseout',function(){
        info_btn[index].style.backgroundColor="white";
    })
    info_btn[index].addEventListener('mouseover',function(){
        info_btn[index].style.backgroundColor="#F2F2F2";
    })
   
})

var changing_proflie_pic=document.querySelector(".changing_profile_pic");

changing_proflie_pic.addEventListener('mouseover',function(){
    changing_proflie_pic.style.cursor="pointer";
}
)

var info_box=document.querySelectorAll(".info_box");

info_box.forEach(function(item,index){
    info_box[index].addEventListener('mouseover',function(){
        info_box[index].style.backgroundColor="#F2F2F2";
        console.log( info_box[index]);
    })

     info_box[index].addEventListener('mouseout',function(){
        info_box[index].style.backgroundColor="white";
    })
})


var my_page_project_i_made=document.querySelectorAll('.my_page_project_i_made');

my_page_project_i_made.forEach(function(item,index){
    my_page_project_i_made[index].addEventListener('mouseover',function(){
        my_page_project_i_made[index].style.backgroundColor="#F2F2F2";

    }),

    my_page_project_i_made[index].addEventListener('mouseout',function(){
        my_page_project_i_made[index].style.backgroundColor="white";

    }
    
)})
