var page_btn=document.querySelectorAll(".number-button");

console.log(page_btn);
page_btn.forEach(function (item,index){
    page_btn[index].addEventListener("click",function(){
        page_btn[index].style.backgroundColor="cyan";
        page_btn[index].style.color="black";
    });
})