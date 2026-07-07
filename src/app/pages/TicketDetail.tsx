import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import TicketDetailTemplate from "../components/TicketDetailTemplate";
import { useApp } from "../context/AppContext";
import { DISABLE_LOGIN_GUARDS } from "../utils/authBypass";
import { getApiBase, publicAnonKey } from "../../../utils/supabase/info";
import { TicketType } from "../types";
import { resolveTicketDetailMeta, TicketDetailMeta } from "../utils/ticketDetailMeta";
import { canonicalizeBoxTicketType, isCanonicalBoxTicketType, isLegacyBoxTicketType } from "../utils/ticketTypes";
import { useBoxSettings } from "../utils/boxSettings";

type ProductDetailResponse = {
  success: boolean;
  ticketType: TicketType;
  product: {
    id: string;
    name: string;
    brand?: string;
    imageUrl: string;
  } | null;
};

export default function TicketDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useApp();
  const { boxSettings, displayNames } = useBoxSettings();
  const { productNameOrType } = useParams<{ productNameOrType: string }>();
  const queryProductName = useMemo(() => new URLSearchParams(location.search).get("productName"), [location.search]);
  const productNameParam = queryProductName || productNameOrType || "";
  const [detailMeta, setDetailMeta] = useState<TicketDetailMeta | null>(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(true);

  useEffect(() => {
    if (!DISABLE_LOGIN_GUARDS && !isLoggedIn) {
      navigate("/login", { state: { from: location } });
    }
  }, [isLoggedIn, navigate, location]);

  useEffect(() => {
    const fetchProductDetail = async () => {
      setIsLoadingDetail(true);

      try {
        const normalizedParam = decodeURIComponent(productNameParam).toLowerCase();
        const canonicalParam = canonicalizeBoxTicketType(normalizedParam);
        if (isCanonicalBoxTicketType(canonicalParam) || isLegacyBoxTicketType(normalizedParam)) {
          const boxMeta = resolveTicketDetailMeta(String(canonicalParam));
          const boxSetting = boxSettings.find((setting) => setting.ticketType === boxMeta?.ticketType);
          setDetailMeta(
            boxMeta
              ? {
                  ...boxMeta,
                  ticketName: displayNames[boxMeta.ticketType] || boxMeta.ticketName,
                  mainImage: boxSetting?.detailImageUrl || boxMeta.mainImage,
                }
              : null
          );
          return;
        }

        const response = await fetch(`${getApiBase()}/products/detail/${encodeURIComponent(productNameParam)}`, {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        });

        if (response.ok) {
          const data = (await response.json()) as ProductDetailResponse;
          if (data.success && data.product) {
            setDetailMeta({
              ticketName: data.product.name,
              mainImage: data.product.imageUrl,
              ticketType: canonicalizeBoxTicketType(data.ticketType) as TicketType,
            });
            return;
          }

          const fallbackMeta = resolveTicketDetailMeta(data.ticketType);
          const boxSetting = boxSettings.find((setting) => setting.ticketType === fallbackMeta?.ticketType);
          setDetailMeta(
            fallbackMeta
              ? {
                  ...fallbackMeta,
                  ticketName: displayNames[fallbackMeta.ticketType] || fallbackMeta.ticketName,
                  mainImage: boxSetting?.detailImageUrl || fallbackMeta.mainImage,
                }
              : null
          );
          return;
        }
      } catch (error) {
        console.error("Failed to fetch product detail:", error);
      } finally {
        setIsLoadingDetail(false);
      }

      const fallbackMeta = resolveTicketDetailMeta(productNameParam);
      const boxSetting = boxSettings.find((setting) => setting.ticketType === fallbackMeta?.ticketType);
      setDetailMeta(
        fallbackMeta
          ? {
              ...fallbackMeta,
              ticketName: displayNames[fallbackMeta.ticketType] || fallbackMeta.ticketName,
              mainImage: boxSetting?.detailImageUrl || fallbackMeta.mainImage,
            }
          : null
      );
    };

    if (productNameParam) {
      void fetchProductDetail();
      return;
    }

    setDetailMeta(null);
    setIsLoadingDetail(false);
  }, [productNameParam, displayNames, boxSettings]);

  if (!DISABLE_LOGIN_GUARDS && !isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  if (isLoadingDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  if (!detailMeta) {
    return (
      <div className="bg-white relative w-[480px] mx-auto min-h-screen flex items-center justify-center">
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[16px] text-black">티켓을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <TicketDetailTemplate
      ticketName={detailMeta.ticketName}
      mainImage={detailMeta.mainImage}
      productName={detailMeta.ticketName}
      ticketType={detailMeta.ticketType}
    />
  );
}
