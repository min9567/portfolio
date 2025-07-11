
function Pcsharp() {
    const minimes = "../../public/files/minimes.zip"

    return (
        <div className="my-4">
            <div className="flex items-center mb-1">
                <h2 className="text-xl font-bold mb-1">C# 미니 Mes 버전</h2>
                <span className="ml-1 text-[0.9rem] text-gray-700">(2025.07)</span>
            </div>
            <p className="mb-3 ml-2">WinForm 기반 1인 프로젝트, 실무 경험 목적의 미니 MES 구현</p>
            <h2 className="text-xl font-bold mb-3">Purpose of making</h2>
            <p className="pl-2">처음 개발이란 직무에 관심을 가지게 되었던게 window에서 실행 프로그램을 보고 관심을 가지게 되었습니다. 혼자서 해보려고 했지만, 코드에 대해 아는게 없는 상태에서 이해가 전혀 안되었었습니다.
                교육과정을 거치며, 어느 정도 코드에 대해 알게 되어 구글링, GPT 등을 통해 C#에 대해 공부하며, 미니 버전으로 만들어 보았습니다.</p>
            <h2 className="text-xl font-bold mt-3">Function</h2>
            <ul className="list-disc pl-8 my-2">
                <li>로그인/로그아웃</li>
                <li>간단한 입/출고/내역 관리</li>
                <li>직원/부서 등록 및 목록</li>
            </ul>
            <h2 className="text-xl font-bold my-3">Result</h2>
            <p className="pl-2">C#을 완전 처음 접할 때는 언어/프로그램 등 다 낯설었지만, 계속 만지며 찾아보고 공부하다보니 낯설다라는 느낌이 많아 사라지고, 코드에 대한 이해도도 많이 올라가서 좋았습니다. 앞으로도 지속적인 자기계발을 통해 역량을 키워나가보려 합니다.</p>
            <h2 className="text-xl font-bold mt-3">Stack</h2>
            <p className="pl-2 my-2">C#</p>

            <h2 className="text-xl font-bold mt-3 mb-2">GitHub</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a href="https://github.com/min9567/CsharpProject/tree/main/mes%20study/mes%20study"
                        target="_blank"
                        className='underline text-blue-600 hover:text-blue-700 hover:font-bold'>
                        Github 코드 바로가기
                    </a>
                </li>
            </ul>
            <h2 className="text-xl font-bold mt-3 mb-2">Download</h2>
            <ul className="list-disc pl-8 my-2">
                <li>
                    <a
                        href={minimes}
                        download
                        className="underline text-blue-600 hover:text-blue-700 hover:font-bold cursor-pointer transition-colors"
                    >
                        미니 Mes(winform) 다운로드
                    </a>
                </li>
            </ul>
        </div>

    );
}
export default Pcsharp
