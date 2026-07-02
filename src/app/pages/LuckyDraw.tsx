import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import FigmaLucky from "../../figma-make/imports/Lucky";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { SupportFooterOverlays, SupportHeaderOverlays } from "../components/SupportNavigation";
import { useApp } from "../context/AppContext";
import { DISABLE_LOGIN_GUARDS } from "../utils/authBypass";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

type MainPage = "home" | "result" | "exchange" | "point" | "lucky";

type LuckyDrawProduct = {
  id: string;
  brand: string;
  name: string;
  imageUrl: string;
  entryPoints: number;
  status: "active" | "ended";
  winnerId?: string;
};

const LUCKY_CARD_HIT_AREAS = [
  "left-[24px] top-[808px] h-[204px] w-[207px]",
  "left-[249px] top-[808px] h-[204px] w-[207px]",
  "left-[24px] top-[1030px] h-[204px] w-[207px]",
];

export default function LuckyDraw() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, isLoggedIn, isInitialized, enterLuckyDraw } = useApp();
  const [luckyDraws, setLuckyDraws] = useState<LuckyDrawProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!DISABLE_LOGIN_GUARDS && isInitialized && !isLoggedIn) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [isInitialized, isLoggedIn, navigate, location]);

  useEffect(() => {
    const fetchLuckyDraws = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/lucky-draws`,
          {
            headers: { Authorization: `Bearer ${publicAnonKey}` },
          },
        );
        const data = await response.json();

        if (data.success) {
          const draws = data.luckyDraws.map((draw: any) => ({
            id: draw.id,
            brand: draw.brand,
            name: draw.name,
            imageUrl: draw.imageUrl,
            entryPoints: draw.entryPoints,
            status: draw.winnerId ? "ended" : "active",
            winnerId: draw.winnerId,
          }));
          setLuckyDraws(draws.slice(0, LUCKY_CARD_HIT_AREAS.length));
        }
      } catch (error) {
        console.error("Error fetching lucky draws:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn || DISABLE_LOGIN_GUARDS) {
      void fetchLuckyDraws();
    }
  }, [isLoggedIn]);

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

  const handleEnter = async (draw: LuckyDrawProduct) => {
    if ((userData.points || 0) < draw.entryPoints) {
      alert("포인트가 부족합니다.");
      return;
    }

    if (!confirm(`${draw.entryPoints.toLocaleString()}P로 참여하시겠습니까?`)) return;

    const success = await enterLuckyDraw(draw.id, draw.name, draw.entryPoints);
    alert(success ? "럭키드로우에 참여했습니다." : "참여에 실패했습니다.");
  };

  const handleCardClick = (draw: LuckyDrawProduct | undefined) => {
    if (loading) {
      alert("럭키드로우를 불러오는 중입니다.");
      return;
    }

    if (!draw) {
      alert("현재 연결된 럭키드로우 상품이 없습니다.");
      return;
    }

    if (draw.status !== "active") {
      alert("종료된 럭키드로우입니다.");
      return;
    }

    void handleEnter(draw);
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
      <div className="relative mx-auto h-[1835px] w-full max-w-[480px] bg-white">
        <style>{`
          [data-name="Background+HorizontalBorder"] { display: none !important; }
        `}</style>
        <FigmaLucky />
        <SupportHeaderOverlays />
        <SupportFooterOverlays firstRowTop={1481} secondRowTop={1525} />

        <button
          aria-label="럭키드로우 응모 내역"
          className="absolute left-[370px] top-[197px] z-30 h-[40px] w-[86px] rounded-full bg-transparent"
          onClick={() => alert("응모 내역은 백엔드 응답 구조 확인 후 연결 예정입니다.")}
          type="button"
        />

        {LUCKY_CARD_HIT_AREAS.map((className, index) => (
          <button
            aria-label={`럭키드로우 ${index + 1}번 상품 참여`}
            className={`absolute z-30 rounded-[14px] bg-transparent ${className}`}
            key={className}
            onClick={() => handleCardClick(luckyDraws[index])}
            type="button"
          />
        ))}
      </div>

      <SharedNavBar activePage="lucky" onNavigate={handleNavigate} />
    </>
  );
}
