var homepage=document.querySelector('.homepage');
homepage.addEventListener('mouseover',function(){
    homepage.style.cursor= "pointer";
})

homepage.addEventListener('click',function(){
    location.href='main_post.html';
})


var donga=document.querySelector('.donga');
donga.addEventListener('mouseover',function(){
    my_pic.style.cursor= "pointer";
})

donga.addEventListener('click',function(){
    location.href='first_main.html';
})