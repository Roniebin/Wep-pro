var donga=document.querySelector('.donga');
donga.addEventListener('mouseover',function(){
    donga.style.cursor= "pointer";
})

donga.addEventListener('click',function(){
    location.href='first_main.html';
})
var my_pic=document.querySelector('.my_pic');
my_pic.addEventListener('mouseover',function(){
    my_pic.style.cursor= "pointer";
})

my_pic.addEventListener('click',function(){
    location.href='my_page.html';
})