import { useEffect, useState } from "react"

import home from "../css/Home.module.css"

import github from "../../public/github.svg"
import notion from "../../public/notion.svg"
import csharp from "../../public/csharp.svg"
import withpwa from "../../public/withpwa.svg"
import men from "../../public/men.svg"
import withgoa from "../../public/withgoa.svg"
import withgo from "../../public/withgo.svg"
import scheduler from "../../public/scheduler.svg"
import green from "../../public/green.svg"
import noimage from "../../public/noimage.svg"
import email from "../../public/email.svg"
import phone from "../../public/phone.svg"
import git from "../../public/git.svg"
import uparrow from "../../public/uparrow.svg";

import Pcsharp from "./Pcsharp"
import WithgoPwa from "./WithgoPwa"
import Airservice from "./Airservice"
import WithgoA from "./WithgoA"
import Withgoi from "./Withgoi"
import Scheduler from "./Scheduler"

function Home() {
  const [open, setOpen] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  const minimes = "../../public/files/minimes.zip"

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="home">
      <div className="bg-[url('/topbg.svg')] bg-cover bg-center pb-11">
        <div className={`mx-auto max-w-7xl pl-9 text-6xl sm:pl-10 lg:pl-14 sm:text-7xl md:text-8xl lg:text-9xl font-bold ${home.bigTitle}`}>
          <div className="pt-25 text-gray-600/70 pb-10 transition-all duration-500 cursor-default">
            <p>Full Stack</p>
            <p className='mt-5 pl-6 sm:pl-13 md:pl-18 lg:pl-25 transition-all duration-500'>Developer</p>
          </div>
        </div>
      </div>
      <section
        id="about"
        className="mx-auto max-w-4xl px-14 py-8 md:py-12 lg:py-16">
        <div className={`flex justify-center text-3xl sm:text-2xl text-black cursor-default ${home.title}`}>
          <p>About Me</p>
        </div>
        <div className="flex flex-wrap justify-center py-10 gap-10 cursor-default">
          <div className={`p-3 text-center border text-gray-700 border-gray-300 w-50 rounded-2xl transition-all duration-200
                hover:bg-gray-100 hover:shadow-lg hover:scale-105 hover:text-black ${home.text}`}>
            <p>이름</p>
            <p>노진욱</p>
          </div>
          <div className={`p-3 text-center border text-gray-700 border-gray-300 w-50 rounded-2xl transition-all duration-200
                hover:bg-gray-100 hover:shadow-lg hover:scale-105 hover:text-black ${home.text}`}>
            <p>생년월일</p>
            <p>89.10.01</p>
          </div>
          <div className={`p-3 text-center border text-gray-700 border-gray-300 w-50 rounded-2xl transition-all duration-200
                hover:bg-gray-100 hover:shadow-lg hover:scale-105 hover:text-black ${home.text}`}>
            <p>연락처</p>
            <a href="tel:01065269567" className="hover:text-blue-700">
              <p>010-6526-9567</p>
            </a>
          </div>
          <div className={`p-3 text-center border text-gray-700 border-gray-300 w-50 rounded-2xl transition-all duration-200
                hover:bg-gray-100 hover:shadow-lg hover:scale-105 hover:text-black ${home.text}`}>
            <p>이메일</p>
            <p>nju9567@gmail.com</p>
          </div>
          <div className={`p-3 border text-gray-700 border-gray-300 w-50 rounded-2xl transition-all duration-200
                hover:bg-gray-100 hover:shadow-lg hover:scale-105 hover:text-black ${home.text}`}>
            <p className="text-center">학력</p>
            <p>구미대학교</p>
            <p>(특수건설장비과)</p>
          </div>
        </div>
      </section>
      <div
        id="skills"
        className="bg-[url('/skillbg.svg')] bg-cover bg-center py-17 px-10">
        <div className={`flex justify-center text-4xl text-white cursor-default mb-8 ${home.title}`}>
          <p>Skills</p>
        </div>
        <section className="my-auto mx-auto max-w-3xl bg-white/50 rounded-3xl">
          <div className="flex flex-wrap justify-center gap-5 cursor-default">
            <div className="p-3 rounded-3xl transition-all duration-200 hover:shadow-lg hover:scale-110">
              <div className="text-center">
                <span className="font-semibold">언어</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-1 w-40">
                <span className="px-3 py-1 rounded-full bg-emerald-800 text-white">HTML5</span>
                <span className="px-3 py-1 rounded-full bg-red-300 text-white">CSS3</span>
                <span className="px-3 py-1 rounded-full bg-amber-300">JavaScript</span>
                <span className="px-3 py-1 rounded-full bg-blue-300 text-white">C#</span>
              </div>
            </div>
            <div className="p-3 rounded-3xl transition-all duration-200 hover:shadow-lg hover:scale-110">
              <div className="text-center">
                <span className="font-semibold">라이브러리</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-1 w-40">
                <span className="px-3 py-1 rounded-full bg-black/90 text-white">ReactJS</span>
              </div>
            </div>
            <div className="p-3 rounded-3xl transition-all duration-200 hover:shadow-lg hover:scale-110">
              <div className="text-center">
                <span className="font-semibold">Backend</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-1 w-50">
                <span className="px-3 py-1 rounded-full bg-green-600 text-white">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-gray-600 text-white">Express.js</span>
                <span className="px-3 py-1 rounded-full bg-rose-500 text-white">RestAPI</span>
              </div>
            </div>
            <div className="p-3 rounded-3xl transition-all duration-200 hover:shadow-lg hover:scale-110">
              <div className="text-center">
                <span className="font-semibold">Database / Cloud:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-1 w-50">
                <span className="px-3 py-1 rounded-full bg-blue-500 text-white">MySQL</span>
                <span className="px-3 py-1 rounded-full bg-gray-400 text-white">MariaDB</span>
                <span className="px-3 py-1 rounded-full bg-green-700 text-white">Supabase</span>
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white">Docker</span>
              </div>
            </div>
            <div className="p-3 rounded-3xl transition-all duration-200 hover:shadow-lg hover:scale-110">
              <div className="text-center">
                <span className="font-semibold">협업 / 도구</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-1 max-w-80">
                <span className="px-3 py-1 rounded-full bg-teal-700 text-white">GitHub</span>
                <span className="px-3 py-1 rounded-full bg-violet-400 text-white">Git Bash</span>
                <span className="px-3 py-1 rounded-full bg-blue-950 text-white">SourceTree</span>
                <span className="px-3 py-1 rounded-full bg-orange-700 text-white">Postman</span>
                <span className="px-3 py-1 rounded-full bg-black/60 text-white">Notion</span>
                <span className="px-3 py-1 rounded-full bg-cyan-600 text-white">VSCode</span>
                <span className="px-3 py-1 rounded-full bg-violet-500 text-white">WebStorm</span>
                <span className="px-3 py-1 rounded-full bg-green-950/60 text-white">HeidiSQL</span>
                <span className="px-3 py-1 rounded-full bg-pink-800/50 text-white">Figma</span>
                <span className="px-3 py-1 rounded-full bg-pink-400/80 text-white">Canva</span>
                <span className="px-3 py-1 rounded-full bg-orange-400/80 text-white">Vite</span>
                <span className="px-3 py-1 rounded-full bg-orange-800/80 text-white">Cursor</span>
                <span className="px-3 py-1 rounded-full bg-blue-400 text-white">Vercel</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        id="repository"
        className="px-10 bg-gray-500/10">
        <section className="my-auto mx-auto max-w-4xl py-10 rounded-3xl">
          <div className={`flex justify-center text-4xl text-black cursor-default ${home.title}`}>
            <p>Repository</p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center my-8">
            <a
              href="https://github.com/min9567"
              className="w-full max-w-[400px] p-4 bg-white rounded-2xl"
              target="_blank">
              <img src={github} alt="github" className="w-full max-w-xs" />
              <p className="mb-4 underline text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">https://github.com/min9567</p>
              <p>코드 저장소</p>
            </a>
            <a
              href="https://ambiguous-ravioli-5f5.notion.site/Portfolio-185ad92b763180849898cba1790b85cc"
              className={`w-full max-w-[400px] p-4 bg-white rounded-2xl ${home.Rcard}`}
              target="_blank">
              <img src={notion} alt="github" className="w-full max-w-xs" />
              <p className="mb-4 underline text-blue-600 hover:text-blue-800 cursor-pointer truncate  transition-colors">
                https://ambiguous-ravioli-5f5.notion.site/Portfolio-185ad92b763180849898cba1790b85cc</p>
              <p>노션 기록</p>
            </a>
          </div>
        </section>
      </div>
      <div
        id="project"
        className="bg-[url('/projectbg.svg')] bg-cover bg-center py-5 px-10">
        <section className="my-auto mx-auto max-w-7xl py-5 rounded-3xl">
          <div className={`flex justify-center text-4xl text-white cursor-default ${home.title}`}>
            <p>Project</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 my-8">
            <div className="w-full max-w-[400px] p-6 bg-white/40 rounded-2xl cursor-default">
              <div>
                <p className="px-3 py-1 rounded-lg text-[0.9rem] bg-red-500/80 text-white max-w-[145px]">C# 미니 Mes 버전</p>
                <p className="ml-3 text-[0.8rem] text-white">2025.07 (1인 프로젝트)</p>
              </div>
              <div className="my-3 flex justify-center">
                <img src={csharp} alt="csharp" className="w-full max-w-40 " />
              </div>
              <div className="text-white">
                <p className="mb-1">- 로그인/로그아웃</p>
                <p className="mb-1">- 간단한 입/출고/내역</p>
                <p className="mb-1">- 직원등록,목록</p>
                <p className="mb-3">- 부서등록,목록</p>
                <a
                  href={minimes}
                  download
                  className="underline text-white hover:text-blue-800 cursor-pointer transition-colors"
                >
                  미니 Mes(winform) 다운로드
                </a>
                <p className="mt-3 p-1 rounded-xl w-10 text-center bg-blue-300 text-black">C#</p>
                <div className="text-center">
                  <button
                    className="cursor-pointer mt-6 w-35 hover:rounded-[5px] transition-all duration-200
                hover:scale-125"
                    onClick={() => setOpen("csharp")}>프로젝트 소개</button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[400px] p-6 bg-white/40 rounded-2xl cursor-default">
              <div>
                <p className="px-3 py-1 rounded-lg text-[0.9rem] bg-red-500/80 text-white max-w-[167px]">짐이동/보관 PWA버전</p>
                <p className="ml-3 text-[0.8rem] text-white">2025.06 (팀 프로젝트)</p>
              </div>
              <div className="my-3 flex justify-center">
                <img src={withpwa} alt="csharp" className="w-full max-w-22 " />
              </div>
              <div className="text-white">
                <p className="mb-1">- 카카오 로그인/로그아웃</p>
                <p className="mb-1">- 배송/보관예약, 결제시스템</p>
                <p className="mb-1">- 배송/보관 신청 및 진행이력 확인</p>
                <p className="mb-3">- PWA(웹앱) 기능 구현</p>
                <a
                  href="https://with-go-mobile.vercel.app/login"
                  target="_blank"
                  className="underline text-white hover:text-blue-800 cursor-pointer transition-colors"
                >
                  With_go Mobile Pwa 바로가기
                </a>
                <div className="flex flex-wrap justify-normal">
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-black/90 text-white">React</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-20 text-center bg-gray-600 text-white">Express.js</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-17 text-center bg-rose-500 text-white">RestApi</p>
                  <p className="mt-3 p-1 rounded-xl max-w-20 text-center bg-green-700 text-white">Supabase</p>
                </div>
                <div className="text-center">
                  <button className="cursor-pointer mt-6 w-35 hover:rounded-[5px] transition-all duration-200
                hover:scale-125"
                    onClick={() => setOpen("WithgoPwa")}>프로젝트 소개</button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[400px] p-6 bg-white/40 rounded-2xl cursor-default">
              <div>
                <p className="px-3 py-1 rounded-lg text-[0.9rem] bg-red-500/80 text-white max-w-[125px]">
                  미세먼지서비스
                </p>
                <p className="ml-3 text-[0.8rem] text-white">2025.05 (팀 프로젝트)</p>
              </div>
              <div className="my-3 flex justify-center">
                <img src={men} alt="csharp" className="w-full max-w-81 " />
              </div>
              <div className="text-white">
                <p className="mb-1">- 메인화면 : 내 위치기준 오늘의 대기질</p>
                <p className="mb-1">- 메인화면 : 내 위치기준 대기정보 예보</p>
                <p className="mb-1">- 대기정보 : 실시간 대기정보 및 예보</p>
                <p className="mb-3">- 공공데이터 오픈 API 활용</p>
                <a
                  href="https://meonmang.vercel.app/"
                  target="_blank"
                  className="underline text-white hover:text-blue-800 cursor-pointer transition-colors"
                >
                  미세먼지서비스 바로가기
                </a>
                <div className="flex flex-wrap justify-normal">
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-black/90 text-white">React</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-20 text-center bg-amber-400/70 text-white">오픈API</p>
                  <p className="mt-3 p-1 rounded-xl max-w-15 text-center bg-pink-600/80 text-white">반응형</p>
                </div>
                <div className="text-center">
                  <button className="cursor-pointer mt-6 w-35 hover:rounded-[5px] transition-all duration-200
                hover:scale-125"
                    onClick={() => setOpen("Airservice")}>프로젝트 소개</button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[400px] p-6 bg-white/40 rounded-2xl cursor-default">
              <div>
                <p className="px-3 py-1 rounded-lg text-[0.9rem] bg-red-500/80 text-white max-w-[242px]">
                  짐이동/보관 관리자 웹,PWA(웹앱)
                </p>
                <p className="ml-3 text-[0.8rem] text-white">2025.04 (팀 프로젝트)</p>
              </div>
              <div className="my-3 flex justify-center">
                <img src={withgoa} alt="csharp" className="w-full max-w-83 " />
              </div>
              <div className="text-white">
                <p className="mb-1">- 실시간 모니터링(신청일기준)</p>
                <p className="mb-1">- 회원 목록(탈퇴)</p>
                <p className="mb-1">- 기사 목록(상세, 수정, 삭제)</p>
                <p className="mb-3">- 기사 등록</p>
                <a
                  href="https://with-go-admin-seven.vercel.app/login"
                  target="_blank"
                  className="underline text-white hover:text-blue-800 cursor-pointer transition-colors"
                >
                  With_Go 관리자페이지 바로가기
                </a>
                <div className="flex flex-wrap justify-normal">
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-black/90 text-white">React</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-20 text-center bg-green-700 text-white">Supabase</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-pink-600/80 text-white">반응형</p>
                </div>
                <div className="text-center">
                  <button className="cursor-pointer mt-6 w-35 hover:rounded-[5px] transition-all duration-200
                hover:scale-125"
                    onClick={() => setOpen("WithgoA")}>프로젝트 소개</button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[400px] p-6 bg-white/40 rounded-2xl cursor-default">
              <div>
                <p className="px-3 py-1 rounded-lg text-[0.9rem] bg-red-500/80 text-white max-w-[151px]">
                  WithGo 문의게시판
                </p>
                <p className="ml-3 text-[0.8rem] text-white">2025.03 (팀 프로젝트)</p>
              </div>
              <div className="my-3 flex justify-center">
                <img src={withgo} alt="csharp" className="w-full max-w-57 " />
              </div>
              <div className={`text-black ${home.Ptext}`}>
                <p className="mb-1">- 문의게시판</p>
                <p className="mb-1">- 검색기능</p>
                <p className="mb-1">- 페이지네이션</p>
                <p className="mb-3">- 로그인시 내가 작성한글 보이게 구현</p>
                <a
                  href="https://cjo3o.github.io/with_go/inquiry.html"
                  target="_blank"
                  className={`underline text-black/80 hover:text-blue-800 cursor-pointer transition-colors ${home.Ptext2}`}
                >
                  With_Go 사용자페이지 바로가기
                </a>
                <div className="flex flex-wrap justify-normal">
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-20 text-center bg-amber-300 text-black">Javascript</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-emerald-800 text-white">Html</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-red-300 text-white">Css</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-20 text-center bg-green-700 text-white">Supabase</p>
                </div>
                <div className="text-center">
                  <button className="cursor-pointer mt-6 w-35 hover:rounded-[5px] transition-all duration-200
                hover:scale-125"
                    onClick={() => setOpen("Withgoi")}>프로젝트 소개</button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[400px] p-6 bg-white/40 rounded-2xl cursor-default">
              <div>
                <p className="px-3 py-1 rounded-lg text-[0.9rem] bg-red-500/80 text-white max-w-[119px]">
                  스케줄러 Html
                </p>
                <p className="ml-3 text-[0.8rem] text-white">2025.01 (팀 프로젝트)</p>
              </div>
              <div className="my-3 flex justify-center">
                <img src={scheduler} alt="csharp" className="w-full max-w-35 " />
              </div>
              <div className={`text-black ${home.Ptext3}`}>
                <p className="mb-1">- 로그인 화면</p>
                <p className="mb-1">- 회원가입 화면</p>
                <p className="mb-1">- 아이디/비밀번호 찾기 화면</p>
                <p className="mb-3"> 　</p>
                <a
                  href="https://min9567.github.io/project/team1/login"
                  target="_blank"
                  className={`underline text-black/80 hover:text-blue-800 cursor-pointer transition-colors ${home.Ptext3}`}
                >
                  스케줄러 Html 바로가기
                </a>
                <div className="flex justify-normal">
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-emerald-800 text-white">Html</p>
                  <p className="mr-3 mt-3 p-1 rounded-xl max-w-15 text-center bg-red-300 text-white">Css</p>
                </div>
                <div className="text-center">
                  <button className="cursor-pointer mt-6 w-35 hover:rounded-[5px] transition-all duration-200
                hover:scale-125"
                    onClick={() => setOpen("Scheduler")}>프로젝트 소개</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        id="step"
        className="py-5 px-10">
        <section className="my-auto mx-auto max-w-4xl py-5 rounded-3xl cursor-default">
          <div className={`flex justify-center text-4xl cursor-default ${home.title}`}>
            <p>Step</p>
          </div>
          <div className={`flex flex-wrap items-center gap-5 mb-7 ${home.Stitle}`}>
            <div className={`${home.Stitle2}`}>
              <img src={noimage} alt="green" className="max-w-30" />
            </div>
            <div>
              <p className="text-2xl">구직중</p>
            </div>
          </div>
          <div className={`flex flex-wrap items-center gap-5 ${home.Stitle}`}>
            <div className={`${home.Stitle2}`}>
              <img src={green} alt="green" className="max-w-30" />
            </div>
            <div>
              <p className="text-2xl">그린컴퓨터아트학원 대구</p>
              <p className="ml-4 mb-2 text-gray-600">2024. 12. 31 ~ 2025. 07. 15</p>
              <p className="text-[20px]">기업요구 프로젝트 중심 풀스택 개발자 (PWA를 활용한 React, Express.js) 교육과정 수료</p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-blue-200 py-10 px-10 cursor-default">
        <div className="my-auto mx-auto max-w-3xl">
          <div className={`text-2xl ${home.Stitle3}`}>
            <p>Finish</p>
          </div>
          <div className={`my-10 flex flex-wrap justify-center items-center gap-20 ${home.Stitle}`}>
            <div className={`text-7xl ${home.Stitle5}`}>Thank you</div>
            <div className="text-[1.5rem]">
              <div className="flex items-center gap-2">
                <img src={phone} alt="phone" className="max-w-7" />
                <a href="tel:01065269567" className="hover:text-blue-700">
                  <span>010-6526-9567</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={email} alt="email" className="max-w-7" />
                <span>nju9567@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={git} alt="git" className="max-w-7" />
                <a href="https://github.com/min9567">
                  <span className={`hover:text-blue-700 ${home.Stitle4}`}>
                    https://github.com/min9567
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={home.Stitle}>
            <div className="flex flex-wrap justify-center text-2xl">
              <p className="mr-2 mb-5 underline hover:text-blue-700">#늦은 시작</p>
              <p className="mr-2 mb-5 underline hover:text-blue-700">#새로운 도전</p>
              <p className="mr-2 mb-5 underline hover:text-blue-700">#노력</p>
              <p className="mb-5 underline hover:text-blue-700">#no 포기!!</p>
            </div>
            <div>
              <p className="text-3xl">사용자와 팀 모두에게 가치 있는 결과물을 만드는 개발자가 되겠습니다.</p>
            </div>
          </div>
        </div>
      </div>

      {showBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-1 sm:right-4 z-50shadow-lg p-0 sm:p-3 transition cursor-pointer"
          aria-label="맨 위로"
        >
          <img src={uparrow} alt="맨 위로" className="w-15 h-15" />
        </button>
      )}

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setOpen(false)}>
          <div className="bg-white rounded-lg pl-8 pr-2 shadow-lg max-w-3xl w-full relative max-h-[70vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 z-10 bg-white min-h-[44px]">
              <div className="flex justify-end pt-2 pr-2">
                <button
                  className="text-gray-500 text-2xl cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>
            <div>
              {open === "csharp" && <Pcsharp />}
              {open === "WithgoPwa" && <WithgoPwa />}
              {open === "Airservice" && <Airservice />}
              {open === "WithgoA" && <WithgoA />}
              {open === "Withgoi" && <Withgoi />}
              {open === "Scheduler" && <Scheduler />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home
