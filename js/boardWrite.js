
// 로그인 상태 여부
redirectToPageIfNotLoggedIn('sign-in');


document.addEventListener('DOMContentLoaded', function() {
    // 사용할 요소에 접근
    const title = document.querySelector('.title');
    const username = document.querySelector('.username');
    const fileInput = document.querySelector('.file');
    const imgViewBox = document.querySelector('.img-box');
    const button = document.querySelector('button');
    const tody = new Date(); 

    // 사용자가 선택한 이미지를 저장할 공간이 필요
    let imageData = null; 

    // 사용자 정보 가져오기
    const getUser = JSON.parse(localStorage.getItem('user'));
    username.value = getUser.username;

     // 파일 미리보기 기능 만들기
    function fileUpload(event) {
        alert('111111');
        const file = event.target.files[0];
        console.log('file', file);

        // 파일 크기 유효성 검사 (5MB 까지 만 허용할 꺼야)
        // 1024 * 1024 * 5 = 5MB (5242880) 이하만 허용
        if(file.size >= 5242880) {
            alert('첨부 파일은 5MB 이하만 가능합니다.');
            event.target.value =""; // 5MB 초과되는 파일이 올라오면 첨부 파일 목록에서 삭제한다.
            return;
        } 

        // 파일 타입 유효성 검사
        const validFileTypes = ["image/jpeg", "image/png", "image/gif"];
        if(!validFileTypes.includes(file.type)) { // 위의 확장자가 아닌경우
            alert("유효한 파일 타입이 아닙니다. ( jpeg, png, gif만 허용 )");
            event.target.value=""; // 파일 확장자가 유효하지 않으면 첨부 파일 목록에서 삭제된다.
        }
    

    // 파일 미리보기 기능
    const reader = new FileReader();
    reader.onload = function(e) {
        console.log('e.target.result', e.target.result);
        console.log('Base64', e.target.result);
        imgViewBox.innerHTML = `<img src="${e.target.result}" alt ="Upload Image"> `;
        // 글 저장시에 로컬스토리지에 바이너리 데이터를 -- 64 인코딩 저장 
        imageData = reader.result;
    }

    reader.readAsDataURL(file); // Base64 인코딩 바이트 단위 데이터를 -- 64개 문자로 표현하는 인코딩 방식
}


    // 글 저장하는 기능 만들기


// 이벤트 리스너 등록 처리 - file change 
fileInput.addEventListener('change', fileUpload);
  

});

