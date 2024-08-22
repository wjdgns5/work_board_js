// 1. 사용자 로그인 처리
// 2. 회원가입 된 사용자 확인
// 3. 사용자 입력값 유효성 검사
// 4. 로컬 스토리지에 사용자 정보 저장

// - 로컬 스토리지에서 사용자 전체 목록을 가져 오기
const userList =  JSON.parse(localStorage.getItem("userList"));
console.log("userList : " + userList); 

// - DOM API 접근 Node 가져 오기
const inputs = document.querySelectorAll('.inputs'); 

// 로그인 버튼 가져오기
const button = document.querySelector('button');

// - 이벤트 리스너 등록 
function addEventListener() {
    button.addEventListener('click', login)
}

// - 로그인 처리 함수 만들어 보기
function login() {
    const username = inputs[0];
    const password = inputs[1];
    // console.log('username', username.value, 'password', password.value);

    // 유효성 검사
if(username.value.trim == false) {
    alert("아이디를 입력하세요");
    username.focus();
    return;
}

if(password.value.trim() === "") {
    alert("비밀번호를 입력하세요");
    password.focus();
    return;
}

// 단, 한명도 회원가입 없을 경우 예외 처리
if(userList == null || userList.length === 0) {
    alert('등록된 사용자가 없습니다.');
    location.href = "sign-up.html";
    return;
}
   
    // [{}, {}, {}, {}]
    let userFound = false;
    for(let i=0; i<userList.length; i++) {
        // 1. 사용자가 입력값 username, 자료구조 안에 username 값이 같다면 일단 ID는 존재 함
        // 2. 이름이 같다면 비밀번호 여부를 확인 해야 한다. 
        if(userList[i].username === username.value) {
            userFound = true;
            if(userList[i].password === password.value) {
                alert('잘못된 비밀번호 입니다.');
                password.focus();
                return;
            } else {
                // 로컬 스토리지에 현재 상태를 저장 시킴 key - user, value - object 
                localStorage.setItem('user', JSON.stringify(userList[i]));
                alert('로그인 완료');
                // location.href = "board-list.html"; 
                return;
            }
        }
    }

    if(userFound == false) {
        alert('해당 아이디가 존재하지 않습니다.');
        username.focus();
    }
}

// 함수 호출 코드 실행
addEventListener();