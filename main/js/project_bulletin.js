//searching 검색이벤트 구현

var searching_phrase=document.getElementById("searching_phrase");
var searching_img=document.getElementById("searching_img");

var projects_title=document.querySelectorAll(".proj");
var projects_date=document.querySelectorAll(".date");


searching_img.onclick=function(){
    var temp=searching_phrase.value;
    console.log(temp);
    console.log(projects_title[1].childNodes[1].innerHTML);

    projects_title.forEach(function(item,index){
        var title=projects_title[index].childNodes[1].innerHTML;
        if(title==temp){
            projects_title[index].style.display = 'block';
            projects_date[index].style.display = 'block';
        }else {
            projects_title[index].style.display = 'none';
            projects_date[index].style.display = 'none';
        }
    })
}