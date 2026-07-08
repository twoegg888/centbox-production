import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FigmaHome from "../../figma-make/imports/Home-1";
import SharedHeader, { HeaderAcquisitionBanner, HEADER_BANNER_HEIGHT } from "../../figma-make/components/SharedHeader";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { getSupportPath, SupportFooterOverlays } from "../components/SupportNavigation";
import { getApiBase, publicAnonKey } from "../../../utils/supabase/info";
import { buildTicketDetailPath, getTicketDisplayName, getTicketFallbackImage } from "../utils/ticketDetailMeta";
import { TicketType } from "../types";
import { canonicalizeBoxTicketType, toLegacyBoxTicketType } from "../utils/ticketTypes";
import { BoxSetting, DEFAULT_BOX_DISPLAY_NAMES, useBoxSettings } from "../utils/boxSettings";
import { useSiteResources } from "../utils/siteResources";

type MainPage = "home" | "result" | "exchange" | "point" | "lucky";
type TicketTypePath = TicketType;
type HomeProduct = {
  id: string;
  name: string;
  brand?: string;
  points?: number;
  imageUrl?: string;
  ticketType: TicketTypePath;
  exchangeCount?: number;
};

function ManagedHomeBanner({ imageUrls }: { imageUrls: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (imageUrls.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % imageUrls.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [imageUrls.length]);

  if (imageUrls.length === 0) return null;

  return (
    <div className="absolute left-0 top-[162px] z-10 h-[289px] w-full overflow-hidden bg-white">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={imageUrl}
          src={imageUrl}
          alt="홈 메인 배너"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

const HOME_TICKET_LINKS: Array<{
  ariaLabel: string;
  ticketType: TicketTypePath;
  className: string;
}> = [
  {
    ariaLabel: "별빛 상자 상세 열기",
    ticketType: "starlight",
    className: "left-[2px] top-[660px] h-[300px] w-[164px]",
  },
  {
    ariaLabel: "미스터리 상자 상세 열기",
    ticketType: "mystery",
    className: "left-[182px] top-[660px] h-[300px] w-[164px]",
  },
  {
    ariaLabel: "전설의 상자 상세 열기",
    ticketType: "legendary",
    className: "left-[362px] top-[660px] h-[300px] w-[118px]",
  },
  {
    ariaLabel: "전설의 상자 상세 열기",
    ticketType: "legendary",
    className: "left-[29px] top-[1051px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "미스터리 상자 상세 열기",
    ticketType: "mystery",
    className: "left-[244px] top-[1051px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "행운의 상자 상세 열기",
    ticketType: "lucky",
    className: "left-[29px] top-[1393px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "별빛 상자 상세 열기",
    ticketType: "starlight",
    className: "left-[244px] top-[1393px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "퍼달이의 주머니 상세 열기",
    ticketType: "purdal",
    className: "left-[29px] top-[1735px] h-[275px] w-[206px]",
  },
];

function TicketLinkOverlays({
  homeProducts,
  onOpenProduct,
}: {
  homeProducts: HomeProduct[];
  onOpenProduct: (productName: string | undefined, fallbackTicketType: TicketTypePath) => void;
}) {
  return (
    <>
      {HOME_TICKET_LINKS.map((link, index) => (
        <button
          aria-label={link.ariaLabel}
          className={`absolute z-30 rounded-[12px] bg-transparent ${link.className}`}
          key={`${link.ticketType}-${index}`}
          onClick={() => onOpenProduct(homeProducts[index]?.name, homeProducts[index]?.ticketType || link.ticketType)}
          type="button"
        />
      ))}
    </>
  );
}

function normalizeHomeProduct(product: HomeProduct): HomeProduct {
  return {
    ...product,
    ticketType: canonicalizeBoxTicketType(product.ticketType) as TicketTypePath,
  };
}

function getHomeFallbackImage(ticketType: TicketTypePath, boxSettings: BoxSetting[] = []) {
  const canonicalType = canonicalizeBoxTicketType(ticketType);
  const setting = boxSettings.find((boxSetting) => boxSetting.ticketType === canonicalType);
  return setting?.homeImageUrl || getTicketFallbackImage(ticketType);
}

function shuffleProducts(products: HomeProduct[]) {
  const shuffled = [...products];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function DynamicProductCard({
  product,
  className,
  compact = false,
  displayNames = DEFAULT_BOX_DISPLAY_NAMES,
  boxSettings,
  onClick,
}: {
  product: HomeProduct;
  className?: string;
  compact?: boolean;
  displayNames?: Partial<Record<TicketTypePath, string>>;
  boxSettings: BoxSetting[];
  onClick: () => void;
}) {
  const displayName = displayNames[product.ticketType] || getTicketDisplayName(product.ticketType);

  return (
    <button
      aria-label={`${product.name} 상세 열기`}
      className={`group bg-white text-left ${className || ""}`}
      onClick={onClick}
      type="button"
    >
      <div
        className={`overflow-hidden bg-[#f2f2f2] ${
          compact ? "h-[206px] rounded-none" : "h-[165px] rounded-[16px]"
        }`}
      >
        <img
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          src={product.imageUrl || getHomeFallbackImage(product.ticketType, boxSettings)}
        />
      </div>
      <div className={compact ? "pt-[14px]" : "pt-[14px]"}>
        <p className="truncate font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-[15px] text-[#2c2c2c]">
          {product.name}
        </p>
        <p className="mt-[4px] truncate font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-[#606060]">
          {product.brand || displayName}
        </p>
        <p className="mt-[8px] truncate font-['Noto_Sans:SemiBold','Noto_Sans_KR:SemiBold',sans-serif] text-[18px] text-[#606060]">
          {typeof product.points === "number" ? `${product.points.toLocaleString()}P` : displayName}
        </p>
      </div>
    </button>
  );
}

function TreasureProductRail({
  products,
  displayNames,
  boxSettings,
  onOpenProduct,
}: {
  products: HomeProduct[];
  displayNames: Partial<Record<TicketTypePath, string>>;
  boxSettings: BoxSetting[];
  onOpenProduct: (productName: string | undefined, fallbackTicketType: TicketTypePath) => void;
}) {
  const repeatCount = products.length > 0 ? Math.max(1, Math.ceil(4 / products.length)) : 1;
  const railProducts = Array.from({ length: repeatCount }).flatMap(() => products);
  const loopProducts = products.length > 1 ? [...railProducts, ...railProducts] : products;

  return (
    <div className="absolute left-0 top-[660px] z-20 h-[300px] w-full overflow-hidden bg-white pb-[20px]">
      {products.length > 0 ? (
        <div className={`flex w-max gap-[16px] px-[2px] ${products.length > 1 ? "home-treasure-track" : ""}`}>
          {loopProducts.map((product, index) => (
            <DynamicProductCard
              key={`${product.ticketType}-${product.id}-${index}`}
              product={product}
              displayNames={displayNames}
              boxSettings={boxSettings}
              className="w-[164px] shrink-0"
              onClick={() => onOpenProduct(product.name, product.ticketType)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function BoxImageFallbackOverlays({
  displayNames,
  boxSettings,
}: {
  displayNames: Partial<Record<TicketTypePath, string>>;
  boxSettings: BoxSetting[];
}) {
  const slots: Array<{ ticketType: TicketTypePath; className: string }> = [
    { ticketType: "legendary", className: "left-[29px] top-[1051px]" },
    { ticketType: "mystery", className: "left-[244px] top-[1051px]" },
    { ticketType: "lucky", className: "left-[29px] top-[1393px]" },
    { ticketType: "starlight", className: "left-[244px] top-[1393px]" },
    { ticketType: "purdal", className: "left-[29px] top-[1735px]" },
  ];

  return (
    <>
      {slots.map((slot) => (
        <div className={`absolute z-20 h-[206px] w-[206px] overflow-hidden bg-[#f2f2f2] ${slot.className}`} key={slot.className}>
          <img
            alt={displayNames[slot.ticketType] || getTicketDisplayName(slot.ticketType)}
            className="h-full w-full object-cover"
            loading="lazy"
            src={getHomeFallbackImage(slot.ticketType, boxSettings)}
          />
        </div>
      ))}
    </>
  );
}

function FeaturedHighValueProducts({
  products,
  displayNames,
  boxSettings,
  onOpenProduct,
}: {
  products: HomeProduct[];
  displayNames: Partial<Record<TicketTypePath, string>>;
  boxSettings: BoxSetting[];
  onOpenProduct: (productName: string | undefined, fallbackTicketType: TicketTypePath) => void;
}) {
  const slots = [
    "left-[29px] top-[2258px]",
    "left-[244px] top-[2258px]",
    "left-[29px] top-[2600px]",
    "left-[244px] top-[2600px]",
    "left-[29px] top-[2942px]",
    "left-[244px] top-[2942px]",
  ];

  return (
    <>
      <div className="absolute left-0 top-[2170px] z-10 h-[1110px] w-full bg-white" />
      <div className="absolute left-[29px] top-[2188px] z-20 font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] text-[20px] font-medium text-[#000060]">
        상자 속 고가 상품
      </div>
      <div className="absolute left-[29px] top-[2219px] z-20 font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-[#4b4b4b]">
        등록된 상품 중 높은 가치의 상품을 랜덤으로 보여드려요
      </div>
      {products.length > 0 ? (
        <>
          {products.slice(0, slots.length).map((product, index) => (
            <DynamicProductCard
              key={`${product.ticketType}-${product.id}-${index}`}
              product={product}
              displayNames={displayNames}
              boxSettings={boxSettings}
              compact
              className={`absolute z-20 w-[206px] ${slots[index]}`}
              onClick={() => onOpenProduct(product.name, product.ticketType)}
            />
          ))}
        </>
      ) : (
        <div className="absolute left-[29px] top-[2258px] z-20 flex h-[206px] w-[421px] items-center justify-center bg-[#fafafa] px-[24px] text-center">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] leading-[20px] text-[#777]">
            아직 등록된 상품이 없습니다.
          </p>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { boxSettings, activeBoxSettings, displayNames } = useBoxSettings();
  const { homeBannerImageUrls } = useSiteResources();
  const [homeProducts, setHomeProducts] = useState<HomeProduct[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<HomeProduct[]>([]);
  const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const response = await fetch(`${getApiBase()}/home-products`, {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) return;

        const data = await response.json();
        setHomeProducts((data.products || []).map(normalizeHomeProduct));
      } catch (error) {
        console.error("Failed to fetch home products:", error);
      }
    };

    void fetchHomeProducts();
  }, []);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const productGroups = await Promise.all(
          activeBoxSettings.map(async (setting) => {
            const ticketType = setting.ticketType;
            const apiTicketType = toLegacyBoxTicketType(ticketType);
            const response = await fetch(`${getApiBase()}/products/${apiTicketType}`, {
              headers: {
                Authorization: `Bearer ${publicAnonKey}`,
              },
            });

            if (!response.ok) return [];

            const data = await response.json();
            return (data.products || []).map((product: HomeProduct) =>
              normalizeHomeProduct({
                ...product,
                ticketType,
              })
            );
          })
        );

        const highValueProducts = productGroups
          .flat()
          .map((product) => ({
            ...product,
            points: Number(product.points || 0),
          }))
          .filter((product) => product.name && Number.isFinite(product.points) && product.points > 0)
          .sort((first, second) => Number(second.points || 0) - Number(first.points || 0))
          .slice(0, 24);

        setFeaturedProducts(shuffleProducts(highValueProducts).slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      }
    };

    void fetchFeaturedProducts();
  }, [activeBoxSettings]);

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

  const handleCategoryClick = (label: string) => {
    navigate(getSupportPath(label));
  };

  return (
    <>
      <div className="relative mx-auto h-[3893px] w-full max-w-[480px] bg-white">
        <style>{`
          [data-name="Background+HorizontalBorder"] { display: none !important; }
          [data-name="auto_slide_interaction"] { display: none !important; }
          [data-name="Main banner"] { display: none !important; }
          [data-name="Launch announcement button"] { display: none !important; }
          [data-name="How to use button"] { display: none !important; }
          .text-shadow-\\[0px_4px_4px_rgba\\(0\\,0\\,0\\,0\\.28\\)\\] { display: none !important; }
          @keyframes homeRail {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .home-treasure-track {
            animation: homeRail 28s linear infinite;
          }
        `}</style>

        <div className={`absolute inset-0 transition-transform duration-200 ${isTopBannerVisible ? "" : "-translate-y-[52px]"}`}>
          <FigmaHome />
          <ManagedHomeBanner imageUrls={homeBannerImageUrls} />
          <BoxImageFallbackOverlays displayNames={displayNames} boxSettings={boxSettings} />
          <TreasureProductRail
            products={homeProducts}
            displayNames={displayNames}
            boxSettings={boxSettings}
            onOpenProduct={(productName, fallbackTicketType) =>
              navigate(buildTicketDetailPath(productName || "", fallbackTicketType))
            }
          />
          <FeaturedHighValueProducts
            products={featuredProducts}
            displayNames={displayNames}
            boxSettings={boxSettings}
            onOpenProduct={(productName, fallbackTicketType) =>
              navigate(buildTicketDetailPath(productName || "", fallbackTicketType))
            }
          />
          <TicketLinkOverlays
            homeProducts={homeProducts}
            onOpenProduct={(productName, fallbackTicketType) =>
              navigate(buildTicketDetailPath(productName || "", fallbackTicketType))
            }
          />
          <SupportFooterOverlays firstRowTop={3543} secondRowTop={3587} />

          <button
            aria-label="공지사항 열기"
            className="absolute left-0 top-[451px] z-30 h-[49px] w-full bg-transparent"
            onClick={() => navigate("/notice")}
            type="button"
          />
        </div>
        {isTopBannerVisible && (
          <div className="absolute left-0 top-0 z-30 h-[52px] w-full">
            <HeaderAcquisitionBanner onDismiss={() => setIsTopBannerVisible(false)} />
          </div>
        )}
        <SharedHeader
          includeBanner={false}
          topOffset={isTopBannerVisible ? HEADER_BANNER_HEIGHT : 0}
          onCategoryClick={handleCategoryClick}
        />
      </div>

      <SharedNavBar activePage="home" onNavigate={handleNavigate} />
    </>
  );
}
