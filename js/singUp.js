
// 1. 변수에 선언과 초기화
const inputs = document.querySelectorAll(".inputs");
console.log("inputs", inputs); // 콘솔에서 input 의 리스트를 확인할 수 있다.

const checkIdBtn = document.getElementById("checkIdBtn"); // 중복확인 버튼
const singUpBtn = document.getElementById("singUpBtn"); // 회원가입 버튼
const toDay = new Date(); // 현재 날짜와 시간을 가져오는 객체

// 로컬 스토리지에 접근해서 사용자의 정보를 가져오는 함수를 만들어 보자
// localStorage <-- 변수를 통해 접근 가능 

function getUserInfo() {
    let userListString = localStorage.getItem("userList");
    if(userListString  == null) {
        return [];
        alert("저장된 정보가 없습니다.");
    } else {
        // 문자열(JSON 형식) JS에 데이터 타입인 객체로 변환 처리
        return JSON.parse(userListString); // JSON 파싱

    }
}

const userInfo = getUserInfo();

// 아이디 중복 확인 기능 만들어 보기
function checkDuplicatedId() {

    const inputUsername = inputs[0].value.trim();
    console.log("inputUsername", inputUsername);

    if(inputUsername === "") {
        // inputUsername 이 공백이라면
        alert('아이디를 입력하세요');
        inputs[0].focus();
        return;
    }

    // 로컬스토리지에서 가져온 사용자리스트 목록에서 반복문을 돌면서 inputUsername 에 담긴 
    // 같은 값이 있는지 확인해야 한다.
    let isDuplicatedId = false;
    for(let i = 0; i < userInfo.length; i++) {
        if(userInfo[i].username === inputUsername) {
            isDuplicatedId = true;
            break; // 값은 값이 있는지 찾으면 break 문으로 빠져나온다.
        }
    }

    if(isDuplicatedId == true) {
        alert('이미 존재하는 아이디 입니다.');
        inputs[0].focus();
    } else {
        alert("사용가능한 아이디 입니다.");
        inputs[0].readOnly = true;
        inputs[0].style.backgroundColor = "green";
    }

}

// 이벤트 리스너 등록 처리
function addEventListener() {
    checkIdBtn.addEventListener('click', checkDuplicatedId);
}

// 이벤트 리스너 함수 실행 (호출)
addEventListener();