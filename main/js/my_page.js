

var my_page_options=document.querySelectorAll('.my_page_options');
var present_option=my_page_options[0];
present_option.style.backgroundColor="#13161c";

my_page_options.forEach(function(item,index){
    my_page_options[index].addEventListener('click',function(){
       present_option.style.backgroundColor="white";
       present_option.style.color="black";
       present_option=my_page_options[index];
       present_option.style.backgroundColor="#13161c";
       present_option.style.color="white";
     
    })

   })