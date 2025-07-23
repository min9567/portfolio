import { useState } from "react";

function Airservice() {
    const [showDetail, setShowDetail] = useState(false);

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
            <button
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                onClick={() => setShowDetail(!showDetail)}
            >
                {showDetail ? "▼" : "▶"} 위치기반 구현의 문제
            </button>
            {showDetail && (
                <pre className="text-[0.92rem] whitespace-pre-wrap break-all">
                    <div>
                        <p className="pl-3.5 mt-2">1. 메인 페이지 오늘의 대기질 정보 코드를 짤 때 내 위치기반으로 데이터가 나오게 해야 하는 부분에서 처음 하는 부분이다 보니 어떻게 해야 내 위치를 불러오는지 이해가 안되었습니다.</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem]">
                            <code>
                                {`const myCoords = {
  lat: pos.coords.latitude,
  lng: pos.coords.longitude,
};
console.log("내 위치 위도:", myCoords.lat);
console.log("내 위치 경도:", myCoords.lng);`}
                            </code>
                        </pre>

                        <p className="pl-3.5">- 위 코드 작성시 내 위치 위/경도를 확인 가능</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`const fetchAllStations = async () => {
  const allStations = [];
  for (const sido of sidoList) {
    try {
      const response = await axios.get(
        "https://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getMsrstnList",
        {
          params: {
            serviceKey: "...(생략)...",
            returnType: "json",
            addr: sido,
            numOfRows: 2000,
            pageNo: 1,
          },
        }
      );
      const items = response?.data?.response?.body?.items;
      if (items) allStations.push(...items);
    } catch (e) {
      console.error(\`\${sido} 측정소 정보 실패\`, e);
    }
  }
  return allStations;
};`}
                            </code>
                        </pre>

                        <p className="pl-3.5">- 위 코드로 측정소 api 정보를 불러옴</p>
                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl my-2 text-[0.92rem]  whitespace-pre-wrap break-all">
                            <code>
                                {`const haversineDistance = (coords1, coords2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // 지구 반지름 (km)
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lng - coords1.lng);
  const lat1 = toRad(coords1.lat);
  const lat2 = toRad(coords2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // 두 지점 사이 거리(km)
};`}
                            </code>
                        </pre>

                        <p className="pl-3.5">- 측정소와 내 위치와 거리 계산.</p>

                        <pre className="ml-4 bg-gray-200 p-3 rounded-2xl mt-2 text-[0.92rem] whitespace-pre-wrap break-all">
                            <code>
                                {`const findNearestStation = (myCoords, stations) => {
  let nearest = null;
  let minDist = Infinity;

  for (const station of stations) {
    const lat = parseFloat(station.dmX);   // 측정소 위도
    const lng = parseFloat(station.dmY);   // 측정소 경도

    if (!isNaN(lat) && !isNaN(lng)) {
      const dist = haversineDistance(myCoords, { lat, lng }); // 거리 계산
      if (!isNaN(dist) && dist < minDist) {
        minDist = dist;
        nearest = station;
      }
    }
  }

  return nearest;
};`}
                            </code>
                        </pre>
                        <p className="pl-3.5">- 위 코드로 내 위/경도와 측정소 api에서 가져온 측정소 위/경도를 비교해서 가까운 곳 찾는 코드.</p>
                        <p className="pl-3.5">- 내 위치 기반으로 코드를 짜는 건 처음이였고, GPT와 구글링을 많이 참고.</p>
                        <div className="flex items-center text-center mt-3 h-8 bg-gray-200 rounded-md">
                        <button
                        className="w-full cursor-pointer"
                        onClick={() => setShowDetail(false)}
                        >접기 ▲</button>
                        </div>
                    </div>
                </pre>
            )}
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
