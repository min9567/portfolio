import { useState } from "react";

function WithgoA() {
    const [showDetail, setShowDetail] = useState(false);
    const [showDetail2, setShowDetail2] = useState(false);
    const [showDetail3, setShowDetail3] = useState(false);

    return (
        <div className="my-4">
            <div className="flex items-center mb-1">
                <h2 className="text-xl font-bold mb-1">짐이동/보관 관리자 웹, PWA</h2>
                <span className="ml-1 text-[0.9rem] text-gray-700">(2025.04)</span>
            </div>
            <p className="mb-3 ml-2">React, Supabase 기반 관리자 웹앱, 5인 팀 프로젝트</p>
            <h2 className="text-xl font-bold mb-3">Purpose of making</h2>
            <p className="pl-2">짐이동/보관서비스 사용자 웹을 만들고나니, 사용자 웹을 관리할 관리자 웹이 필요하다는 걸 알게 되어 관리자 웹을 구현하였습니다.</p>
            <h2 className="text-xl font-bold mt-3">function</h2>
            <ul className="list-disc pl-8 my-2">
                <li>화면 기획 / 팀원 역할 분담</li>
                <li>실시간 모니터링(신청일 기준)</li>
                <li>회원/기사 목록 및 관리</li>
                <li>기사 등록 및 상세/수정/삭제</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">resolve</h2>
            <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer text-left"
                onClick={() => setShowDetail(!showDetail)}
            >
                {showDetail ? "▼" : "▶"} 실시간모니터링 페이지 새로고침(F5) 없이 화면 자동 렌더링
            </button>
            {showDetail && (
                <pre className="text-[0.92rem]  whitespace-pre-wrap break-all">
                    <div>
                        <p className="pl-3.5 mt-2">처음 만들었을 땐 새로고침해야 접수된 건수가 보였으나, 사용자 입장에서 생각했을 때 불편할 것 같아, 자동으로 재랜더링 되게 했습니다. 아래 코드 참고.</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`useEffect(() => {
    const res =  [...생략]
    const supaData = [...생략]
        
      settwoData(AllData);

      const todayDeliveryCount = [...생략]
      const todayStorageCount = [...생략]
      const completeCount = [...생략]
      const cancelCount = [...생략]
      const totalPrice = [...생략]
      const canceledPrice = [...생략]

      setTotalPrice(totalPrice);
      setCanceledPrice(canceledPrice);
      setCompleteCount(completeCount);
      setCancelCount(cancelCount);
      setTodayCount(todayDeliveryCount + todayStorageCount);
      setTodayDeliveryCount(todayDeliveryCount);
      setTodayStorageCount(todayStorageCount);
    };
    supaData();
  }, []);`}
                            </code>
                        </pre>
                        <p className="pl-3.5">- 자동으로 재랜더링 되는 부분을 어떻게 해야할지 몰라서 구글링도하고 gpt도 사용했습니다.</p>
                        <p className="pl-3.5">- React는 setXXX() 함수가 호출되면 해당 상태값이 바뀌었다고 판단하고 자동으로 컴포넌트를 재렌더링한다는걸 알게되었습니다.</p>
                        <div className="flex items-center text-center my-3 h-8 bg-gray-200 rounded-md">
                            <button
                                className="w-full cursor-pointer"
                                onClick={() => setShowDetail(false)}
                            >접기 ▲</button>
                        </div>
                    </div>
                </pre>
            )}
            <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer text-left"
                onClick={() => setShowDetail2(!showDetail2)}
            >
                {showDetail2 ? "▼" : "▶"} 첨부파일 다운로드 미리보기 안뜨게 하기
            </button>
            {showDetail2 && (
                <pre className="text-[0.92rem]  whitespace-pre-wrap break-all">
                    <div>
                        <p className="pl-3.5 mt-2">첨부파일 이모지 클릭하면 파일이 바로 다운되야하는데 자꾸 미리보기가 떠서 찾아보았습니다.</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`<a
  href="#"
  onClick={async (e) => {
    e.preventDefault();

    const response = await fetch(driver.file_url);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = driver.file_url.split("/").pop(); // 파일명 지정
    document.body.appendChild(link);
    link.click(); // 강제 다운로드 발생
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  }}
>
  <span className={DlStyle.tdfile}>💾</span>
</a>`}
                            </code>
                        </pre>
                        <p>위 코드 방식으로 바꿔서 미리보기 안뜨고 바로 다운받게 만들었습니다.</p>
                        <div className="flex items-center text-center my-3 h-8 bg-gray-200 rounded-md">
                            <button
                                className="w-full cursor-pointer"
                                onClick={() => setShowDetail2(false)}
                            >접기 ▲</button>
                        </div>
                    </div>
                </pre>
            )}
            <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer text-left"
                onClick={() => setShowDetail3(!showDetail3)}
            >
                {showDetail3 ? "▼" : "▶"} 해당 페이지 있을 때 link누르면 리렌더링 안되는 현상 해결하기
            </button>
            {showDetail3 && (
                <pre className="text-[0.92rem]  whitespace-pre-wrap break-all">
                    <div>
                        <p className="pl-3.5 mt-2">- react router는 “실시간 모니터링” 페이지에 있는 상태에서 다시 “실시간 모니터링” 를 눌러도 아무 동작 하지 않았습니다.</p>
                        <p className="pl-3.5">- 다른 홈페이지 사용할 때를 생각해보니 그 페이지에 있더라도 새로고침이 아니라 현재 있는 페이지버튼을 누르는 경우 있어서, 그래서 안된다면 불편할 거 같아 재렌더링 되게 코드 수정.</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`const handleLinkClick = (e, targetPath) => {
  if (location.pathname === targetPath) {
    e.preventDefault(); // 동일 경로면 기본 이동 막고
    window.location.reload(); // 강제로 새로고침
  }
};`}
                            </code>
                        </pre>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`<Link to="/admin" onClick={(e) => handleLinkClick(e, '/admin')}>
실시간 모니터링</Link>`}
                            </code>
                        </pre>
                        <p className="pl-3.5">위와 같이 onClick했을때 재렌더링되게 설정.</p>
                        <div className="flex items-center text-center my-3 h-8 bg-gray-200 rounded-md">
                            <button
                                className="w-full cursor-pointer"
                                onClick={() => setShowDetail3(false)}
                            >접기 ▲</button>
                        </div>
                    </div>
                </pre>
            )}
            <h2 className="text-xl font-bold my-3">Result</h2>
            <p className="pl-2">처음 사용자 웹을 만들면서 그냥 사용자 웹만 만들면 되는구나 라는 생각을 하며 만들었는데, 만들고나니 해당 페이지를 관리 할 관리자 웹도 필요하다는걸 알게 되었습니다. 또한, 만들면서 DB의 중요성을 깨달았고 웹마다 독자적인 DB가 아니라 서로 연계가 되야하며 작동을 해야는 등 신경써야 할게 너무 많았습니다. 만들면서 사용자 편의성, DB의 연계성 등 깨달은 것이 많은 프로젝트였습니다.</p>
            <h2 className="text-xl font-bold mt-3">Stack</h2>
            <p className="pl-2 my-2">React / Supabase / 반응형</p>
            <h2 className="text-xl font-bold mt-3 mb-2">GitHub</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a href="https://github.com/cjo3o/with_go_admin"
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
                        href="https://with-go-admin-seven.vercel.app/login"
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
export default WithgoA
