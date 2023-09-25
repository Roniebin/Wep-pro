// 업로드사진 개체들
let profiles=document.querySelectorAll('.upload-name');
console.log(profiles);

//업로드 한 사진 개수
let profiles_number=profiles.length;

//사진 추가하기 버튼 
let add_pic=document.querySelector('.add_pic');
console.log("dd"+profiles_number);
//사진 업로드 페이지에 테두리 개체
let container3=document.querySelector('.container3');
let bar=document.querySelector('#bar');

let upload_pictures=document.querySelectorAll('.upload-hidden')

upload_pictures.forEach(function(item,index) {
    
    upload_pictures[index].addEventListener('change',function(){
        change_p(index)
    })
})

function change_p(index) {
    
    profiles[index].value= upload_pictures[index].value
    console.log(profiles[index])
}

add_pic.addEventListener('click',function(e){
    console.log( document.querySelectorAll('.upload_profile'))
    console.log(profiles)
    const testDiv = document.querySelectorAll('.upload_profile')[profiles_number-2];
    
    testDiv.childNodes[5].setAttribute('for',testDiv.childNodes[5].getAttribute('for')+"1")
    testDiv.childNodes[7].setAttribute('id',testDiv.childNodes[7].getAttribute('id')+"1")
    
    testDiv.addEventListener("change",function(){
        change_p(profiles_number-1)
    });

    const newNode = testDiv.cloneNode(true);

    testDiv.after(newNode);
    profiles=document.querySelectorAll('.upload-name');
    profiles_number+=1;
    console.log(container3);
    if (profiles_number>3){
        var currentHeight = parseInt(getComputedStyle(container3).height, 10);
        var newHeight = currentHeight + 60;
        container3.style.height = newHeight + 'px';
    }

});







