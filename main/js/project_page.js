var page_btn=document.querySelectorAll(".number-button");

console.log(page_btn);
var present_page=0;

page_btn.forEach(function (item,index){
    page_btn[index].addEventListener("click",function(){
        page_btn[index].style.backgroundColor="cyan";
        page_btn[index].style.color="black";

        present_page=index;

        page_btn.forEach(function (item,index){
            if(index!=present_page){
                page_btn[index].style.backgroundColor="#13161c";
                page_btn[index].style.color="white";
            }
           
        });
    });
})