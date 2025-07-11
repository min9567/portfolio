
function Scheduler() {

    return (
        <div className="my-4">
            <div className="flex items-center mb-1">
                <h2 className="text-xl font-bold mb-1">스케줄러 Html</h2>
                <span className="ml-1 text-[0.9rem] text-gray-700">(2025.01)</span>
            </div>
            <p className="mb-3 ml-2">기본 UI/UX 구현, HTML과 CSS 중심, 팀 프로젝트</p>
            <h2 className="text-xl font-bold mb-3">Purpose of making</h2>
            <p className="pl-2">교육과정 시작하고, 팀 프로젝트로 처음 구현했습니다. Html/Css만 했으며, 이때는 처음하다보니 label, img, input만 주로 사용해서 만들었습니다.</p>
            <h2 className="text-xl font-bold mt-3">function</h2>
            <ul className="list-disc pl-8 my-2">
                <li>로그인 화면</li>
                <li>회원가입 화면</li>
                <li>아이디/비밀번호 찾기</li>
            </ul>
                        <h2 className="text-xl font-bold mb-2">Result</h2>
            <p className="pl-2">교육과정 시작하고 얼마안되서 바로 시작한 팀 프로젝트인데.. 개발을 공부한지 얼마 안되다 보니 css를 적용해야하는게 막막했고 프로젝트를 했지만, 이해가 안되는 부분이 많았습니다. 생각해보면 프로젝트를 하면서 html/css에 대해 자세히 알 수 있었던 것 같습니다.</p>
            <h2 className="text-xl font-bold mt-3">Stack</h2>
            <p className="pl-2 my-2">HTML / CSS</p>

            <h2 className="text-xl font-bold mt-3 mb-2">GitHub</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a href="https://github.com/min9567/project/tree/main/team1"
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
                        href="https://min9567.github.io/project/team1/login"
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
export default Scheduler
