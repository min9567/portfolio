import { useState } from "react";

function Withgoi() {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className="my-4">
            <div className="flex items-center mb-1">
                <h2 className="text-xl font-bold mb-1">WithGo 문의게시판</h2>
                <span className="ml-1 text-[0.9rem] text-gray-700">(2025.03)</span>
            </div>
            <p className="mb-3 ml-2">TML, CSS, JavaScript, Supabase 활용, 팀 프로젝트</p>
            <h2 className="text-xl font-bold mb-3">Purpose of making</h2>
            <p className="pl-2">짐이동/보관 사용자 웹에 문의게시판이 없어 디자인, 구현까지 전담했습니다. 최대한 사용자 입장에서 편의성을 생각하며, 화면 구상 및 기능을 넣었습니다.</p>
            <h2 className="text-xl font-bold mt-3">function</h2>
            <ul className="list-disc pl-8 my-2">
                <li>문의게시판 구현</li>
                <li>검색 및 페이지네이션 기능</li>
                <li>내가 작성한 글 보기</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">resolve</h2>
            <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer text-left"
                onClick={() => setShowDetail(!showDetail)}
            >
                {showDetail ? "▼" : "▶"} 검색창 기능 구현은 했으나… enter 또는 검색 아이콘을 안눌렀는데 입력한 글자에 따라 자꾸 게시글이 바뀜.
            </button>
            {showDetail && (
                <pre className="text-[0.92rem]  whitespace-pre-wrap break-all">
                    <div>
                        <p className="pl-3.5 mt-2">해당 코드 입력하여 enter 또는 아이콘 클릭시에만 작동하게 설정.</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`// 검색 아이콘 클릭 시
  searchIcon.addEventListener("click", async () => {
    executeSearch();
  });

// Enter 키 입력 시 검색
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      executeSearch();
      event.preventDefault();
    }
  });`}
                            </code>
                        </pre>
                        <div className="flex items-center text-center my-3 h-8 bg-gray-200 rounded-md">
                            <button
                                className="w-full cursor-pointer"
                                onClick={() => setShowDetail(false)}
                            >접기 ▲</button>
                        </div>
                    </div>
                </pre>
            )}
            <h2 className="text-xl font-bold mb-2">Result</h2>
            <p className="pl-2">사용자 웹을 만들고 살펴보다보니, 문의게시판이 없음을 알고 구현 제안을 하여, 제가 전담으로 구현하게 되었습니다. 게시판은 처음이다보니 어떻게 만들어야할지 대략 감은 잡히는데 기능 구현하는게 너무 막막했습니다. 구글링과 Gpt를 활용해서 직접 찾아보고, 공부하며 만들었습니다. 검색, 페이지네이션, 비밀글 등에 대해 알 수 있게 되었고, 지식을 쌓을 수 있었습니다.</p>
            <h2 className="text-xl font-bold mt-3">Stack</h2>
            <p className="pl-2 my-2">JavaScript / Supabase / HTML / CSS</p>

            <h2 className="text-xl font-bold mt-3 mb-2">GitHub</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a href="https://github.com/cjo3o/with_go"
                        target="_blank"
                        className='underline text-blue-600 hover:text-blue-700 hover:font-bold'>
                        Github 코드 바로가기
                    </a>
                </li>
            </ul>
            <h2 className="text-xl font-bold mt-3 mb-2">Website</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a
                        href="https://cjo3o.github.io/with_go/inquiry.html"
                        target="_blank"
                        className="underline text-blue-600 hover:text-blue-700 hover:font-bold cursor-pointer transition-colors"
                    >
                        배포사이트 바로가기
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Withgoi
