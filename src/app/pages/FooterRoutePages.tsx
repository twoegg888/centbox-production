import { useNavigate } from "react-router";
import type { ReactNode } from "react";
import {
  FaqPage,
  InquiryPage,
  PrivacyPage,
  ProbabilityPage,
  ServiceIntroPage,
  TermsPage,
} from "../../figma-make/components/FooterPages";
import NoticePage from "../../figma-make/components/NoticePage";
import SharedHeader from "../../figma-make/components/SharedHeader";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { getSupportPath } from "../components/SupportNavigation";

type MainPage = "home" | "result" | "exchange" | "point" | "lucky";

const pathByMainPage: Record<MainPage, string> = {
  home: "/",
  result: "/winning-tickets",
  exchange: "/exchange",
  point: "/points",
  lucky: "/lucky-draw",
};

function useBackToPreviousPage() {
  const navigate = useNavigate();

  return () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };
}

function SupportPageShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative mx-auto min-h-screen w-full max-w-[480px] bg-white pb-[64px]">
        <SharedHeader onCategoryClick={(label) => navigate(getSupportPath(label))} />
        {children}
      </div>
      <SharedNavBar activePage="home" onNavigate={(page) => navigate(pathByMainPage[page])} />
    </>
  );
}

export function FaqRoutePage() {
  return (
    <SupportPageShell>
      <FaqPage onBack={useBackToPreviousPage()} />
    </SupportPageShell>
  );
}

export function ServiceIntroRoutePage() {
  return (
    <SupportPageShell>
      <ServiceIntroPage onBack={useBackToPreviousPage()} />
    </SupportPageShell>
  );
}

export function ProbabilityRoutePage() {
  return (
    <SupportPageShell>
      <ProbabilityPage onBack={useBackToPreviousPage()} />
    </SupportPageShell>
  );
}

export function InquiryRoutePage() {
  return (
    <SupportPageShell>
      <InquiryPage onBack={useBackToPreviousPage()} />
    </SupportPageShell>
  );
}

export function TermsRoutePage() {
  return (
    <SupportPageShell>
      <TermsPage onBack={useBackToPreviousPage()} />
    </SupportPageShell>
  );
}

export function PrivacyRoutePage() {
  return (
    <SupportPageShell>
      <PrivacyPage onBack={useBackToPreviousPage()} />
    </SupportPageShell>
  );
}

export function NoticeRoutePage() {
  return (
    <SupportPageShell>
      <NoticePage onBack={useBackToPreviousPage()} />
    </SupportPageShell>
  );
}

export function EventsRoutePage() {
  const onBack = useBackToPreviousPage();

  return (
    <SupportPageShell>
      <div className="w-full bg-white pt-[162px]">
        <div className="flex h-[52px] items-center gap-[12px] border-b border-[#f0f0f0] px-[20px]">
          <button onClick={onBack} className="flex h-[32px] w-[32px] items-center justify-center" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#111130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="font-['Pretendard',sans-serif] text-[16px] font-semibold text-[#111130]">
            이벤트
          </span>
        </div>

        <div className="px-[20px] py-[24px] pb-[90px]">
          <section className="mb-[18px] rounded-[14px] bg-[#f5f5fb] p-[20px]">
            <p className="mb-[8px] font-['Pretendard',sans-serif] text-[18px] font-bold text-[#000047]">
              센트박스 런칭 이벤트
            </p>
            <p className="font-['Pretendard',sans-serif] text-[13px] leading-[1.8] text-[#666]">
              신규 가입 후 첫 포인트 충전과 첫 티켓 구매를 완료하면 이벤트 대상에 자동 포함됩니다.
            </p>
          </section>

          {[
            ["신규 가입 혜택", "첫 로그인 후 웰컴 혜택과 공지사항을 확인해 주세요."],
            ["첫 충전 이벤트", "포인트 충전 상품별 보너스는 포인트 충전 페이지 기준으로 적용됩니다."],
            ["럭키드로우 이벤트", "진행 중인 럭키드로우는 매일 업데이트되며 미당첨 시 정책에 따라 환급됩니다."],
          ].map(([title, description]) => (
            <section key={title} className="mb-[12px] rounded-[12px] border border-[#eeeeee] bg-white p-[16px]">
              <p className="mb-[6px] font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#111130]">
                {title}
              </p>
              <p className="font-['Pretendard',sans-serif] text-[13px] leading-[1.7] text-[#666]">
                {description}
              </p>
            </section>
          ))}
        </div>
      </div>
    </SupportPageShell>
  );
}
