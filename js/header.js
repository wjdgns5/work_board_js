// DOMContentLoaded 이벤트를 사용해 보자.

window.document.addEventListener('DOMContentLoaded', function() {
    // DOM 요소를 가져오기
    const boardMenu = window.document.getElementById('board');    
    const signInMenu = window.document.getElementById('signIn');    
    const signUpMenu = window.document.getElementById('signUp');    
    const authLinks = window.document.getElementById('authLinks');    

    // 로그인 여부 확인
    // F12 눌러서  LocalStorage 에서 user 를 확인할 수 있다.
    const user = localStorage.getItem('user');
    if(user != null) {
        if(authLinks) {
            // 로그인, 회원가입 링크를 로그아웃 링크로 변경
            console.log('authLinks', authLinks);
            authLinks.innerHTML = '<span class="menu-link" id="logoutLink">로그아웃</span>';

            // 로그아웃 클릭 시 처리
            document.getElementById('logoutLink').addEventListener('click', function() {
                localStorage.removeItem('user'); 
                
                // 로그아웃 후 페이지 새로고침 해야 렌더링이 된다.
                window.location.reload(); // 로그아웃 클릭시, 로그인, 회원가입 버튼이 나타난다.
            });
        }
    }

    // 각 메뉴에 클릭 이벤트를 추가 합니다.
    if(boardMenu) {
        boardMenu.addEventListener('click', function() {
            window.location.href = 'board-list.html'; 
        });
    }

    if(signInMenu) {
        signInMenu.addEventListener('click', function() {
            window.location.href = 'sign-in.html'; 
        });
    }

    if(signUpMenu) {
        signUpMenu.addEventListener('click', function() {
            window.location.href = 'sign-up.html'; 
        });
    }

});