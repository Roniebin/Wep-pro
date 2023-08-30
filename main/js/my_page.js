

var my_page_options=document.querySelectorAll('.my_page_options');

my_page_options.forEach(function(item,index){
    my_page_options[index].addEventListener('click',function(){
    
       if(index==0){
         location.href='new_my_page.html';
      
       }else if(index==1){
         location.href='new_my_page_project.html';
        
       }
    })
   })