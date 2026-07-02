import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ExchangePage from "../../figma-make/components/ExchangePage";
import SharedHeader from "../../figma-make/components/SharedHeader";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { getSupportPath } from "../components/SupportNavigation";
import { useApp } from "../context/AppContext";
import { DISABLE_LOGIN_GUARDS } from "../utils/authBypass";

type MainPage = "home" | "result" | "exchange" | "point" | "lucky";

export default function Exchange() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, isLoggedIn, isInitialized, fetchExchangeTickets, purchaseExchangeTicket } = useApp();
  const [allTickets, setAllTickets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!DISABLE_LOGIN_GUARDS && isInitialized && !isLoggedIn) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [isInitialized, isLoggedIn, navigate, location]);

  const loadTickets = async () => {
    setIsLoading(true);
    const tickets = await fetchExchangeTickets("all");
    setAllTickets(tickets);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn || DISABLE_LOGIN_GUARDS) {
      void loadTickets();
    }
  }, [isLoggedIn, fetchExchangeTickets]);

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

  const handlePurchase = async (ticket: any) => {
    if (ticket.sellerId === userData.userId) {
      alert("본인이 등록한 티켓은 구매할 수 없습니다.");
      return;
    }

    if ((userData.points || 0) < ticket.price) {
      alert("포인트가 부족합니다.");
      return;
    }

    if (!confirm(`${ticket.price.toLocaleString()}P로 거래를 신청하시겠습니까?`)) return;

    const success = await purchaseExchangeTicket(ticket.id);
    if (success) {
      alert("구매가 완료되었습니다.\n당첨 내역에서 확인하세요.");
      await loadTickets();
      return;
    }

    alert("구매에 실패했습니다.");
  };

  if (!isInitialized || (!DISABLE_LOGIN_GUARDS && !isLoggedIn)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  return (
    <>
      <div className="relative mx-auto min-h-screen w-full max-w-[480px] bg-white">
        <SharedHeader onCategoryClick={(label) => navigate(getSupportPath(label))} />
        {isLoading ? (
          <div className="pt-[260px] text-center font-['Pretendard:Regular',sans-serif] text-[14px] text-[#999]">
            티켓을 불러오는 중입니다...
          </div>
        ) : (
          <ExchangePage
            currentUserId={userData.userId}
            items={allTickets}
            onPurchase={handlePurchase}
          />
        )}
      </div>

      <SharedNavBar activePage="exchange" onNavigate={handleNavigate} />
    </>
  );
}
