

var info_btn=document.querySelectorAll(".info_btn");
info_btn.forEach(function(item,index){
    info_btn[index].addEventListener('mouseover',function(){
        info_btn[index].style.backgroundColor="#dcdcdc";
    })
  
    info_btn[index].addEventListener('mouseout',function(){
        info_btn[index].style.backgroundColor="white";
    })
})



