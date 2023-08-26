

var info_btn=document.querySelectorAll(".info_btn");
info_btn.forEach(function(item,index){
    info_btn[index].addEventListener('mouseover',function(){
        info_btn[index].style.backgroundColor="#F2F2F2";
    })
  
    info_btn[index].addEventListener('mouseout',function(){
        info_btn[index].style.backgroundColor="white";
    })
})



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