import { useState } from "react";

function WithgoPwa() {
    const [showDetail, setShowDetail] = useState(false);
    const [showDetail2, setShowDetail2] = useState(false);

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
            <h2 className="text-xl font-bold mb-2">resolve</h2>
            <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer text-left"
                onClick={() => setShowDetail(!showDetail)}
            >
                {showDetail ? "▼" : "▶"} 카카오 인앱 브라우저에서 PWA 다운 불가 현상
            </button>
            {showDetail && (
                <pre className="text-[0.92rem]  whitespace-pre-wrap break-all">
                    <div>
                        <p className="pl-3.5 mt-2">- 카카오 인앱에서는 PWA 설치 불가하여 카카오 인앱 브라우저를 통해서 들어오게 되면 안드로이드/IOS 설치방법 확인 할 수 있게 모달창 구현</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`const [isKakaoInApp, setIsKakaoInApp] = useState(false);

  useEffect(() => {
    if (/KAKAOTALK/i.test(navigator.userAgent)) {
      setIsKakaoInApp(true);
    }
  }, []);
  
  {isKakaoInApp && (
          <>
            <div>
              <button
                className="mt-5 mb-1 text-[15px] text-white"
                onClick={AndroidModalOpen}>
                [ 안드로이드/Android 설치방법 ]
              </button>
            </div>
            <div>
              <button className="mb-5 text-[15px] text-white"
                onClick={AppleModalOpen}>
                [ 애플/iPhone 설치방법 ]
              </button>
            </div>
          </>
        )} `}
                            </code>
                        </pre>
                        <p className="pl-3.5">- 카카오 인앱 브라우저로 들어오게 되면 위 코드로 화면이 나오게 구현</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`{!isKakaoInApp && (
          <>
            <div>
              <p className="mt-2 text-[15px] text-center text-white">
                안드로이드는<br />터치시 바로 설치가능합니다.
              </p>
            </div>
            <div className="mt-5">
              <button className="mb-5 text-[15px] text-white"
                onClick={SaAppleModalOpen}>
                [ 애플/iPhone 설치방법 ]
              </button>
            </div>
          </>
        )}`}
                            </code>
                        </pre>
                        <p className="pl-3.5">- 일반 브라우저로 들어오게 되면 위코드로 나오게 구현</p>
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
                {showDetail2 ? "▼" : "▶"} 결제 시스템을 처음 사용하다보니 적용 하는 부분을 코드 짜기 힘들어 찾아봄.
            </button>
            {showDetail2 && (
                <pre className="text-[0.92rem]  whitespace-pre-wrap break-all">
                    <div>
                        <p className="pl-3.5 mt-2">- 배송예약 화면에서 상세페이지로 이동하여 신청 내역 확인 후 결제 진행하는 시스템.</p>
                        <p className="pl-3.5 mt-2">- 아래 코드는 상세페이지에서 토스 결제 테스트용으로 넣은거고 결제에 필요한 데이터를 localstorage에 저장 후 결제 진행.</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`const Payment = () => {
  // 필수 동의 체크 (예시 코드에서는 생략)
  if (!window.TossPayments) {
    Swal.fire("결제 모듈이 로드되지 않았습니다.");
    return;
  }

  // 결제에 필요한 데이터 localStorage에 저장 (필요에 따라 생략 가능)
  localStorage.setItem("delivery_reservation", JSON.stringify(state));

  // 토스페이먼츠 객체 생성 (테스트용 key 사용)
  const tossPayments = window.TossPayments("Test Key");

  // 결제 요청
  tossPayments.requestPayment("카드", {
    amount: state.indown, // 결제 금액
    orderId: "order_" + new Date().getTime(), // 주문번호
    orderName: "배송 예약 결제", // 주문명
    customerName: state.name, // 고객 이름
    successUrl:
      window.location.origin +
      "/delivery-payment-success?amount=" +
      state.indown, // 성공시 리다이렉트
    failUrl: window.location.origin + "/payment-fail", // 실패시 리다이렉트
  });
};`}
                            </code>
                        </pre>
                        <p className="pl-3.5">- 결제 후 localstorage에 담은 걸 다시 읽음.</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`useEffect(() => {
    // 결제 정보 localStorage에서 읽기
    const reservation = JSON.parse(localStorage.getItem("delivery_reservation"));
    if (!reservation) {
      Swal.fire("예약 정보가 없습니다.");
      navigate("/");
      return;
    }`}
                            </code>
                        </pre>
                        <p className="pl-3.5">- 그후 supabase 저장</p>
                        <div className="flex items-center text-center my-3 h-8 bg-gray-200 rounded-md">
                            <button
                                className="w-full cursor-pointer"
                                onClick={() => setShowDetail2(false)}
                            >접기 ▲</button>
                        </div>
                    </div>
                </pre>
            )}
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
