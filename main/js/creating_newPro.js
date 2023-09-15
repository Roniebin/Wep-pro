// 업로드사진 개체들
var profiles=document.querySelectorAll('.upload-name');
console.log(profiles);

//업로드 한 사진 개수
var profiles_number=profiles.length;

//사진 추가하기 버튼 
var add_pic=document.querySelector('.add_pic');
console.log("dd"+profiles_number);
//사진 업로드 페이지에 테두리 개체
var container3=document.querySelector('.container3');
var bar=document.querySelector('#bar');

add_pic.addEventListener('click',function(e){
    const testDiv = document.querySelector('.upload_profile');
    console.log(testDiv);
    const newNode = testDiv.cloneNode(true);
    testDiv.after(newNode);

    profiles_number+=1;
    console.log(container3);
    if (profiles_number>5){
        var currentHeight = parseInt(getComputedStyle(container3).height, 10);
        var newHeight = currentHeight + 60;
        container3.style.height = newHeight + 'px';


        
    }
});





