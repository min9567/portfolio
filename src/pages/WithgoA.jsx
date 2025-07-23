
function WithgoA() {

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
