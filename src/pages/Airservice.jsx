
function Airservice() {

    return (
        <div className="my-4">
            <div className="flex items-center mb-1">
                <h2 className="text-xl font-bold mb-1">미세먼지 서비스</h2>
                <span className="ml-1 text-[0.9rem] text-gray-700">(2025.05)</span>
            </div>
            <p className="mb-3 ml-2">React 기반, 반응형 웹, 3인 팀 프로젝트</p>
            <h2 className="text-xl font-bold mb-3">Purpose of making</h2>
            <p className="pl-2">팀 프로젝트로 미세먼지서비스를 하게 되었습니다. 오픈 Api를 활용하여 웹, 웹앱(PWA)를 제작했고, 메인 페이지에 내위치 기반으로 실시간 대기정보와 예보, 지역별 대기정보/예보를 맡았습니다.</p>
            <h2 className="text-xl font-bold mt-3">function</h2>
            <ul className="list-disc pl-8 my-2">
                <li>화면 기획/구성</li>
                <li>내 위치 기반 오늘의 대기질/예보</li>
                <li>실시간 대기정보 제공</li>
                <li>공공데이터 오픈 API 활용</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">resolve</h2>
            <p>위치기반 구현의 문제</p>
            <h2 className="text-xl font-bold my-3">Result</h2>
            <p className="pl-2">처음 교육과정에서 Api를 활용할 때 어떻게 데이터를 불러오며, 어떻게 활용하는건지 교육은 받았지만 이해가 잘 안되는 부분이 많았습니다. 프로젝트를 통해서 Api를 활용하며 직접 공부하며, 만들어가다보니 조금씩 익숙해지며 이해도가 많이 올랐습니다. 또한, 기간이 촉박하다보니 Api데이터를 DB에 저장하질 않고 바로 화면에 표시했더니, 일일요청건수 제한이 걸려 다른 팀원의 Service Key를 가져와서 써야했던 경험이 있습니다. 다음에 Api를 활용할 때에는 DB활용하여 구현해보려고 합니다.</p>
            <h2 className="text-xl font-bold mt-3">Stack</h2>
            <p className="pl-2 my-2">React / 오픈API / 반응형</p>

            <h2 className="text-xl font-bold mt-3 mb-2">GitHub</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a href="https://github.com/cjo3o/meonmang"
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
                        href="https://meonmang.vercel.app/"
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
export default Airservice
