// 샘플 데이터 입력
const sampleBoardList = [
    {
        id: 1,
        title: "첫번째 개시글",
        content: "첫번째 개시글에 내용 입니다.",
        username: "홍길동",
        today: "2024.08.25",
        count: 5
    },

    {
        id: 2,
        title: "두번째 개시글",
        content: "두번째 개시글에 내용 입니다.",
        username: "이몽룡",
        today: "2024.08.25",
        count: 14
    },

    {
        id: 3,
        title: "세번째 개시글",
        content: "세번째 개시글에 내용 입니다.",
        username: "심청",
        today: "2024.08.25",
        count: 11
    },

    {
        id: 4,
        title: "네번째 개시글",
        content: "네번째 개시글에 내용 입니다.",
        username: "도이",
        today: "2024.08.25",
        count: 9
    },

    {
        id: 5,
        title: "다섯번째 개시글",
        content: "다섯번째 개시글에 내용 입니다.",
        username: "김홍도",
        today: "2024.08.25",
        count: 13
    }
];

// 파일이 들어갔는지 확인하고 (F12  눌러서 로컬스토리지에 파일 확인)주석 없으면 주석풀고 실행
// localStorage.setItem('boardList', JSON.stringify(sampleBoardList)); 

document.addEventListener('DOMContentLoaded', function() {
    // DOM 접근

            // <div class="board-content-box">
    const boardContainer = window.document.querySelector('.board-content-box'); // 컨텐트를 넣을 Element 선택
            
            //  <button type="button" class="btn">글쓰기</button>
    const writeButton =  window.document.querySelector('btn'); // 글쓰기 버튼 Element 선택

            //  <div class="num-box">
    const paginationContainer = window.document.querySelector('num-box');

    // 로컬 스토리지에서 게시글 목록 가져오기
    const storedBoardList = JSON.parse( window.localStorage.getItem("boardList") );
    console.log("storedBoardList : " + storedBoardList);

    // 게시글 목록을 내림차순으로 정렬하기
    if(storedBoardList) {
        storedBoardList.reverse();
    }


    // 페이징 처리 필요한 변수
    let currentPage = 0;
    const limit = 2; // 한 페이지당 게시글 수
    loadPosts(currentPage);

    
    // 게시글을 로드하는 함수
    function loadPosts(page) {

        const offset = page * limit; // 1 페이지 0, 1  //  2 페이지 2, 3
        const end = offset + limit;

        let postElements = ''; // 게시글 HTML 요소를 저장할 변수

        // 방어적 코드 작성
        if(storedBoardList != null && storedBoardList.length >0) {
            // 반복문  : 한 페이지에 2개씩 보여줘야 한다.
            for(let i=offset; i<end; i++) {

                postElements += ` <div class="board">
                            <div class="board-1">${storedBoardList[i].id}</div>
                            <div class="board-2">${storedBoardList[i].title}</div>
                            <div class="board-3">${storedBoardList[i].username}</div>
                            <div class="board-4">${storedBoardList[i].today}</div>
                            <div class="board-5">${storedBoardList[i].count}</div>
                    </div>`;
            }

            boardContainer.innerHTML = postElements; // 게시글 컨테이너에 HTML 추가
        } else {
            // 게시글이 없는 경우 메세지 표시
            boardContainer.innerHTML = '<div class="no-list" style=" text-align:center; margin-top:20px "> 조회된 게시글이 없습니다. </div>'
        }
    }

});