import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import FigmaResult from "../../figma-make/imports/Result-1";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { TicketCard } from "../components/TicketCard";
import { SupportFooterOverlays, SupportHeaderOverlays } from "../components/SupportNavigation";
import { useApp } from "../context/AppContext";
import { DISABLE_LOGIN_GUARDS } from "../utils/authBypass";

type MainPage = "home" | "result" | "exchange" | "point" | "lucky";

export default function WinningTickets() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"pending" | "completed" | "exchange">("completed");
  const { userData, isLoggedIn, isInitialized } = useApp();

  useEffect(() => {
    if (!DISABLE_LOGIN_GUARDS && isInitialized && !isLoggedIn) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [isInitialized, isLoggedIn, navigate, location]);

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

  if (!isInitialized || (!DISABLE_LOGIN_GUARDS && !isLoggedIn)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  const filteredTickets = userData.winningTickets.filter((ticket) => {
    if (ticket.status === "converted") return false;
    if (activeTab === "pending") return ticket.status === "active";
    if (activeTab === "completed") return ticket.status !== "active";
    if (activeTab === "exchange") return ticket.status === "exchanged";
    return true;
  });

  return (
    <>
      <div className="relative mx-auto h-[1435px] w-full max-w-[480px] bg-white">
        <style>{`
          [data-name="Background+HorizontalBorder"] { display: none !important; }
          [data-name="Stock container"],
          [data-name="View all container"] { display: none !important; }
        `}</style>
        <FigmaResult />
        <SupportHeaderOverlays />
        <SupportFooterOverlays firstRowTop={1089} secondRowTop={1133} />

        <div className="absolute left-0 right-0 top-[162px] z-30 h-[48px] border-b border-[#eaeaea] bg-white">
          <div className="flex gap-[16px] px-[24px]">
            {[
              { key: "completed", label: "발급 완료" },
              { key: "exchange", label: "거래소 등록" },
              { key: "pending", label: "발급 전" },
            ].map((tab) => {
              const selected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  className="relative px-[2px] py-[14px]"
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  type="button"
                >
                  <span
                    className={`text-[15px] ${
                      selected
                        ? "font-['Noto_Sans_KR:Medium',sans-serif] text-black"
                        : "font-['Noto_Sans_KR:Regular',sans-serif] text-[#666]"
                    }`}
                  >
                    {tab.label}
                  </span>
                  {selected && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute left-[24px] top-[241px] z-30 font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] text-[13px] font-medium tracking-[0.13px] text-[#020202]">
          총 {filteredTickets.length}개
        </div>

        <div className="absolute left-[24px] right-[24px] top-[280px] z-30 h-[568px] overflow-y-auto bg-white pb-[24px]">
          {filteredTickets.length > 0 ? (
            <div className="space-y-[12px]">
              {filteredTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          ) : (
            <div className="pt-[120px] text-center font-['Pretendard:Regular',sans-serif] text-[14px] text-[#999]">
              {activeTab === "pending"
                ? "발급 전 티켓이 없습니다"
                : activeTab === "completed"
                  ? "발급 완료된 티켓이 없습니다"
                  : "거래소 등록 티켓이 없습니다"}
            </div>
          )}
        </div>
      </div>

      <SharedNavBar activePage="result" onNavigate={handleNavigate} />
    </>
  );
}
