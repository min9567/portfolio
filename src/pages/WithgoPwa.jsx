
function WithgoPwa() {

    return (
        <div className="my-4">
            <div className="flex items-center mb-1">
                <h2 className="text-xl font-bold mb-1">짐이동/보관 PWA(웹앱)버전</h2>
                <span className="ml-1 text-[0.9rem] text-gray-700">(2025.06)</span>
            </div>
            <p className="mb-3 ml-2">React + Express + Supabase 기반 모바일 웹앱, 1인 프로젝트</p>
            <h2 className="text-xl font-bold mb-3">Purpose of making</h2>
            <ul className="list-disc pl-8 my-2">
               <li>짐이동/보관 사용자 웹에서 반응형으로 구현해야하나, 프로젝트 기간이 촉박하여 팀원들과 상의 결과 PWA 버전을 따로 만들자고 하여 PWA를 전담하여 제작하게 되었습니다.</li> 
               <li>팀원 2명은 배송기사앱 제작, 1명은 사용자 웹 배송/예약부분 수정 진행했습니다.</li>
            </ul>
            <h2 className="text-xl font-bold mt-3">function</h2>
            <ul className="list-disc pl-8 my-2">
                <li>화면 기획/구성/디자인</li>
                <li>카카오 로그인/로그아웃</li>
                <li>배송/보관 예약, 결제 시스템</li>
                <li>실시간 진행 이력, PWA(웹앱) 지원</li>
            </ul>
            <h2 className="text-xl font-bold my-3">Result</h2>
            <p className="pl-2"> PWA(웹앱)버전을 만들면서 RestApi도 해보며, 값진 경험을 하였습니다. 처음 교육 받을 때는 이해가 가지않던 RestAPI에 대해 이해가 되기 시작했고, 제가 성장하는 밑거름이 된 것 같습니다.</p>
            <h2 className="text-xl font-bold mt-3">Stack</h2>
            <p className="pl-2 my-2">React / Express.js / RestApi / Supabase / PWA</p>

            <h2 className="text-xl font-bold mt-3 mb-2">GitHub</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a href="https://github.com/min9567/with_go_mobile"
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
                        href="https://with-go-mobile.vercel.app/login"
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
export default WithgoPwa
