import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import FigmaPointPage from "../../figma-make/imports/PointPage";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { useApp } from "../context/AppContext";
import { SupportFooterOverlays, SupportHeaderOverlays } from "../components/SupportNavigation";
import { CHARGE_PRODUCTS } from "../constants/chargeProducts";
import { apiBase, publicAnonKey, tossClientKey } from "../../../utils/supabase/info";
import { DISABLE_LOGIN_GUARDS } from "../utils/authBypass";

const PENDING_CHARGE_STORAGE_KEY = "pending_toss_charge";

type MainPage = "home" | "result" | "exchange" | "point" | "lucky";

function ChargeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedAmount, setSelectedAmount] = useState(CHARGE_PRODUCTS[0]?.amount ?? 10000);
  const [isProcessing, setIsProcessing] = useState(false);
  const { userData, isLoggedIn } = useApp();

  if (!isOpen) return null;

  const selectedProduct = CHARGE_PRODUCTS.find((item) => item.amount === selectedAmount);

  const handleConfirm = async () => {
    if (!selectedProduct || !userData.kakaoId) return;

    setIsProcessing(true);

    try {
      const response = await fetch(
        `${apiBase}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            amount: selectedProduct.amount,
            productCode: selectedProduct.productCode,
            points: selectedProduct.points,
            orderName: `${selectedProduct.points.toLocaleString()}P 충전`,
            kakaoId: userData.kakaoId,
          }),
        },
      );

      const result = await response.json();
      if (!response.ok || !result.success || !result.orderId) {
        throw new Error(result.error || "Failed to create payment order.");
      }

      localStorage.setItem(
        PENDING_CHARGE_STORAGE_KEY,
        JSON.stringify({
          orderId: result.orderId,
          amount: selectedProduct.amount,
          points: selectedProduct.points,
          productCode: selectedProduct.productCode,
          kakaoId: userData.kakaoId,
          createdAt: new Date().toISOString(),
        }),
      );

      const tossPayments = await loadTossPayments(tossClientKey);
      await tossPayments.requestPayment("CARD", {
        amount: selectedProduct.amount,
        orderId: result.orderId,
        orderName: result.orderName || `${selectedProduct.points.toLocaleString()}P 충전`,
        customerName: userData.userName || "User",
        customerEmail: userData.email || undefined,
        successUrl: `${window.location.origin}/payment/success`,
        failUrl: `${window.location.origin}/payment/fail`,
      });
    } catch (error) {
      console.error("Charge create error:", error);
      alert(error instanceof Error ? error.message : "Failed to start payment.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/30">
      <div className="w-full max-w-[480px] rounded-t-[20px] bg-white pb-[20px]">
        <div className="px-[24px] pb-[16px] pt-[24px]">
          <h2 className="mb-[8px] font-['Pretendard:Bold',sans-serif] text-[20px] text-[#020202]">
            포인트 충전
          </h2>
          <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#666]">
            충전 금액을 선택한 뒤 결제를 진행합니다.
          </p>
        </div>

        {!isLoggedIn && (
          <div className="mx-[24px] mb-[16px] rounded-[8px] bg-[#fff3f3] p-[16px] text-[13px] text-[#d92d20]">
            로그인 후 충전할 수 있습니다.
          </div>
        )}

        <div className="max-h-[42vh] space-y-[12px] overflow-y-auto px-[24px]">
          {CHARGE_PRODUCTS.map((product) => (
            <label
              key={product.productCode}
              className="flex cursor-pointer items-center justify-between rounded-[12px] border border-[#eaeaea] bg-white px-[16px] py-[14px]"
            >
              <div className="flex items-center gap-[12px]">
                <input
                  className="size-4 accent-black"
                  name="chargeAmount"
                  type="radio"
                  value={product.amount}
                  checked={selectedAmount === product.amount}
                  onChange={() => setSelectedAmount(product.amount)}
                />
                <div>
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#020202]">
                    {product.amount.toLocaleString()}원
                  </p>
                  <p className="mt-[2px] font-['Pretendard:Regular',sans-serif] text-[13px] text-[#666]">
                    {product.points.toLocaleString()}P 충전
                  </p>
                </div>
              </div>
              {product.bonus > 0 ? (
                <span className="rounded-full bg-[#111] px-[10px] py-[5px] text-[11px] font-semibold text-white">
                  +{product.bonus.toLocaleString()}P
                </span>
              ) : product.label ? (
                <span className="rounded-full bg-[#f1f1f1] px-[10px] py-[5px] text-[11px] font-semibold text-[#555]">
                  {product.label}
                </span>
              ) : null}
            </label>
          ))}
        </div>

        <div className="mt-[24px] space-y-[12px] px-[24px]">
          <button
            className="h-[52px] w-full rounded-[8px] bg-[#020202] font-['Pretendard:SemiBold',sans-serif] text-[16px] text-white disabled:cursor-not-allowed disabled:bg-[#999]"
            disabled={!isLoggedIn || isProcessing || !selectedProduct}
            onClick={handleConfirm}
            type="button"
          >
            {isProcessing ? "이동 중..." : "결제 진행하기"}
          </button>
          <button
            className="h-[52px] w-full rounded-[8px] border border-[#ddd] bg-white font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#666]"
            disabled={isProcessing}
            onClick={onClose}
            type="button"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Points() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChargeOpen, setIsChargeOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const { userData, isLoggedIn, isInitialized, refreshUserData } = useApp();

  useEffect(() => {
    if (!DISABLE_LOGIN_GUARDS && isInitialized && !isLoggedIn) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [isInitialized, isLoggedIn, navigate, location]);

  useEffect(() => {
    if (!isInitialized || (!DISABLE_LOGIN_GUARDS && !isLoggedIn)) return;
    void refreshUserData();
  }, [isInitialized, isLoggedIn, refreshUserData]);

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

  return (
    <>
      <div className="relative mx-auto h-[1709px] w-full max-w-[480px] bg-white">
        <style>{`
          [data-name="Background+HorizontalBorder"] { display: none !important; }
        `}</style>
        <FigmaPointPage points={userData.points || 0} />
        <SupportHeaderOverlays />
        <SupportFooterOverlays firstRowTop={1352} secondRowTop={1396} />

        <button
          aria-label="포인트 충전"
          className="absolute left-[378px] top-[244px] z-30 h-[42px] w-[53px] rounded-[21px] bg-transparent"
          onClick={() => setIsChargeOpen(true)}
          type="button"
        />
        <button
          className="absolute left-[375px] top-[348px] z-30 h-[40px] w-[82px] bg-transparent"
          onClick={() => setShowHistory((value) => !value)}
          type="button"
          aria-label="사용 내역 보기"
        />

        {showHistory && (
          <div className="absolute left-[22px] right-[22px] top-[395px] z-20 h-[708px] overflow-y-auto bg-white">
            {userData.transactions.length > 0 ? (
              <div className="space-y-[12px]">
                {userData.transactions.slice(0, 20).map((transaction) => (
                  <div key={transaction.id} className="rounded-[8px] border border-[#eee] bg-white p-[16px]">
                    <div className="mb-[8px] flex items-start justify-between gap-3">
                      <span className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#020202]">
                        {transaction.description}
                      </span>
                      <span
                        className={`font-['Pretendard:Bold',sans-serif] text-[16px] ${
                          transaction.amount > 0 ? "text-[#4caf50]" : "text-[#ff4444]"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}
                        {transaction.amount.toLocaleString()}P
                      </span>
                    </div>
                    <span className="font-['Pretendard:Regular',sans-serif] text-[12px] text-[#999]">
                      {new Date(transaction.createdAt).toLocaleString("ko-KR")}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pt-[210px] text-center font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] text-[13px] font-medium tracking-[0.26px] text-[#ddd]">
                내역이 없습니다.
              </div>
            )}
          </div>
        )}
      </div>

      <SharedNavBar activePage="point" onNavigate={handleNavigate} />
      <ChargeModal isOpen={isChargeOpen} onClose={() => setIsChargeOpen(false)} />
    </>
  );
}
