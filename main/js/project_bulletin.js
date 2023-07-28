//searching 검색이벤트 구현

var searching_phrase=document.getElementById("searching_phrase");
var searching_img=document.getElementById("searching_img");

var projects_title=document.querySelectorAll(".proj");
searching_img.onclick=function(){
    var temp=searching_phrase.value;
    console.log(temp);
    console.log(projects_title[1].childNodes[1].innerHTML);

    projects_title.forEach(function(item,index){
        if(projects_title[index].childNodes[1].innerHTML.equals(temp)){
            
        }
    })
}