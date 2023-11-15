var accepted=document.querySelectorAll('.accepted');
var deleted=document.querySelectorAll('.delete');
var applicants=document.querySelectorAll('.applicant');

accepted.forEach(function(item,index) {
    accepted[index].addEventListener('click', function(){
        alert(applicants[index].childNodes[3].innerHTML+" 님이 가입 승인되었습니다.")

    
        applicants[index].remove()
        accepted=document.querySelectorAll('.accepted');
        deleted=document.querySelectorAll('.delete');
        
    })

    deleted[index].addEventListener('click', function(){
        alert(applicants[index].childNodes[3].innerHTML+" 님이 가입 거부되었습니다.")
        applicants[index].remove()
        accepted=document.querySelectorAll('.accepted');
        deleted=document.querySelectorAll('.delete');
    })
    
})