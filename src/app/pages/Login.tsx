import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useApp } from '../context/AppContext';
import { kakaoRestApiKey } from '../../../utils/supabase/info';
import imgKakao from "figma:asset/152a75c45e952c474894abadfecac91956cd1209.png";
import SharedHeader from "../../figma-make/components/SharedHeader";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { getSupportPath, SupportFooterOverlays } from "../components/SupportNavigation";

type MainPage = "home" | "result" | "exchange" | "point" | "lucky";

function HeaderBrandLogo({
  className,
  scale,
}: {
  className: string;
  scale: number;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-label="CENTBOX">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[162px] w-[480px]"
        style={{
          transform: `translate(${-26 * scale}px, ${-69 * scale}px) scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        <SharedHeader />
      </div>
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, isInitialized } = useApp();

  const redirectUri = `${window.location.origin}/login/callback`;
  
  // 로그인 후 돌아갈 페이지 (state로 전달받음)
  const from = (location.state as any)?.from?.pathname || '/';

  // 초기화 완료 후, 이미 로그인된 경우 원래 가려던 페이지로 리다이렉트
  useEffect(() => {
    if (isInitialized && isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [isInitialized, isLoggedIn, navigate, from]);

  // 초기화가 완료되지 않았으면 로딩 화면 표시
  if (!isInitialized) {
    return (
      <div className="bg-white relative w-[480px] mx-auto h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleKakaoLogin = () => {
    if (!kakaoRestApiKey) {
      alert('카카오 로그인 설정이 누락되었습니다.');
      return;
    }

    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApiKey}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  const handleNavigate = (page: MainPage) => {
    const pathByPage: Record<MainPage, string> = {
      home: "/",
      result: "/winning-tickets",
      exchange: "/exchange",
      point: "/points",
      lucky: "/lucky-draw",
    };

    navigate(pathByPage[page]);
  };

  const handleNaverLogin = () => {
    alert("네이버 로그인은 백엔드 연동 후 사용할 수 있습니다.");
  };

  return (
    <>
      <div className="relative mx-auto h-[1250px] w-full max-w-[480px] bg-white">
        <SharedHeader onCategoryClick={(label) => navigate(getSupportPath(label))} />

        <main className="absolute left-0 right-0 top-[220px] flex flex-col items-center px-[28px]">
          <HeaderBrandLogo className="mb-[18px] h-[72px] w-[246px]" scale={2.76} />
          <p className="mb-[62px] font-['Pretendard',sans-serif] text-[14px] font-normal text-[#707070]">
            로그인하고 다양한 혜택을 만나보세요!
          </p>

          <button
            onClick={handleKakaoLogin}
            className="relative mb-[16px] h-[56px] w-full rounded-[13px] bg-[#fee642] font-['Pretendard',sans-serif] text-[15px] font-bold text-black"
            type="button"
          >
            <img
              src={imgKakao}
              alt=""
              className="absolute left-[22px] top-1/2 size-[22px] -translate-y-1/2"
            />
            카카오 로그인
          </button>

          <button
            onClick={handleNaverLogin}
            className="relative h-[56px] w-full rounded-[13px] bg-[#45b035] font-['Pretendard',sans-serif] text-[15px] font-bold text-white"
            type="button"
          >
            <span className="absolute left-[22px] top-1/2 -translate-y-1/2 font-['Arial',sans-serif] text-[25px] font-black leading-none">
              N
            </span>
            네이버 로그인
          </button>
        </main>

        <footer className="absolute left-0 right-0 top-[760px] h-[490px] bg-white shadow-[0px_-4px_4px_-4px_rgba(0,0,0,0.25)]">
          <div className="px-[29px] pt-[31px]">
            <HeaderBrandLogo className="mb-[16px] h-[36px] w-[122px]" scale={1.37} />
            <div className="space-y-[7px] font-['Noto_Sans_KR',sans-serif] text-[12px] leading-none text-[#9e9e9e]">
              <p>고객센터 : centbox_cs@gmail.com</p>
              <p>운영시간 : 13:00 ~ 17:00 / 공휴일 휴무</p>
              <p>{`계좌번호 : `}</p>
              <p>반송주소 : 경상남도 김해시 대청로104번길 27-31 1층</p>
            </div>
            <p className="mt-[38px] font-['Noto_Sans_KR',sans-serif] text-[12px] font-medium text-[#3e3e3e]">
              고객지원
            </p>
          </div>

          <div className="absolute left-[30px] top-[187px] h-[34px] w-[120px] border border-[#ebebeb]" />
          <div className="absolute left-[180px] top-[187px] h-[34px] w-[120px] border border-[#ebebeb]" />
          <div className="absolute left-[330px] top-[187px] h-[34px] w-[120px] border border-[#ebebeb]" />
          <div className="absolute left-[30px] top-[231px] h-[34px] w-[120px] border border-[#ebebeb]" />
          <div className="absolute left-[180px] top-[231px] h-[34px] w-[120px] border border-[#ebebeb]" />
          <div className="absolute left-[330px] top-[231px] h-[34px] w-[120px] border border-[#ebebeb]" />

          {[
            ["자주 묻는 질문", 54, 204],
            ["서비스 소개", 212, 204],
            ["확률표", 374, 204],
            ["문의 게시판", 62, 248],
            ["이용약관", 219, 248],
            ["개인정보처리방침", 348, 248],
          ].map(([label, left, top]) => (
            <p
              key={label}
              className="absolute -translate-y-1/2 font-['Noto_Sans_KR',sans-serif] text-[12px] font-medium tracking-[-0.48px] text-[#737373]"
              style={{ left: Number(left), top: Number(top) }}
            >
              {label}
            </p>
          ))}
          <SupportFooterOverlays firstRowTop={187} secondRowTop={231} />

          <div className="absolute left-0 right-0 top-[332px] h-[158px] bg-white px-[29px] pt-[30px]">
            <div className="space-y-[9px] font-['Pretendard',sans-serif] text-[12px] leading-none text-[#959595]">
              <p>주식회사 투베이스 ㅣ 센트박스</p>
              <p>대표자 : 최승연</p>
              <p>
                사업자등록번호 : 288-88-03513
                <span className="ml-[8px]">사업자정보확인</span>
              </p>
              <p>{`통신판매업 : 2026-김해장유-0206 `}</p>
              <p>사업장소재지 : 경상남도 김해시 대청로104번길 27-31 1층</p>
              <p>COPYRIGHT : 2026 투베이스</p>
            </div>
          </div>
        </footer>

      </div>

      <SharedNavBar activePage="point" onNavigate={handleNavigate} />
    </>
  );
}
