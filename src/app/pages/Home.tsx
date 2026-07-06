import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FigmaHome from "../../figma-make/imports/Home-1";
import SharedHeader from "../../figma-make/components/SharedHeader";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { getSupportPath, SupportFooterOverlays } from "../components/SupportNavigation";
import { getApiBase, publicAnonKey } from "../../../utils/supabase/info";
import { buildTicketDetailPath, getTicketDisplayName, getTicketFallbackImage } from "../utils/ticketDetailMeta";
import { TicketType } from "../types";
import { canonicalizeBoxTicketType, toLegacyBoxTicketType } from "../utils/ticketTypes";

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

const HOME_BOX_IMAGE_URLS: Partial<Record<TicketTypePath, string>> = {
  legendary: "https://dbase01.cafe24.com/centbox/dia%20box.png",
  mystery: "https://dbase01.cafe24.com/centbox/gold%20box.png",
  lucky: "https://dbase01.cafe24.com/centbox/pla%20box.png",
  starlight: "https://dbase01.cafe24.com/centbox/rubybox.png",
  diamond: "https://dbase01.cafe24.com/centbox/dia%20box.png",
  gold: "https://dbase01.cafe24.com/centbox/gold%20box.png",
  platinum: "https://dbase01.cafe24.com/centbox/pla%20box.png",
  ruby: "https://dbase01.cafe24.com/centbox/rubybox.png",
};

const HOME_PRODUCT_TICKET_TYPES: TicketTypePath[] = ["legendary", "mystery", "lucky", "starlight"];

const HOME_TICKET_LINKS: Array<{
  ariaLabel: string;
  ticketType: TicketTypePath;
  className: string;
}> = [
  {
    ariaLabel: "별빛 상자 상세 열기",
    ticketType: "starlight",
    className: "left-[2px] top-[660px] h-[247px] w-[164px]",
  },
  {
    ariaLabel: "미스터리 상자 상세 열기",
    ticketType: "mystery",
    className: "left-[182px] top-[660px] h-[247px] w-[164px]",
  },
  {
    ariaLabel: "전설의 상자 상세 열기",
    ticketType: "legendary",
    className: "left-[362px] top-[660px] h-[247px] w-[118px]",
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
    ariaLabel: "뷰티 티켓 상세 열기",
    ticketType: "beauty",
    className: "left-[29px] top-[1735px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "미트 티켓 상세 열기",
    ticketType: "meat",
    className: "left-[244px] top-[1735px] h-[275px] w-[206px]",
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

function getHomeFallbackImage(ticketType: TicketTypePath) {
  return HOME_BOX_IMAGE_URLS[ticketType] || getTicketFallbackImage(ticketType);
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
  onClick,
}: {
  product: HomeProduct;
  className?: string;
  compact?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={`${product.name} 상세 열기`}
      className={`group overflow-hidden bg-white text-left ${className || ""}`}
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
          src={product.imageUrl || getHomeFallbackImage(product.ticketType)}
        />
      </div>
      <div className={compact ? "pt-[14px]" : "pt-[14px]"}>
        <p className="truncate font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-[15px] text-[#2c2c2c]">
          {product.name}
        </p>
        <p className="mt-[4px] truncate font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-[#606060]">
          {product.brand || getTicketDisplayName(product.ticketType)}
        </p>
        <p className="mt-[8px] truncate font-['Noto_Sans:SemiBold','Noto_Sans_KR:SemiBold',sans-serif] text-[18px] text-[#606060]">
          {typeof product.points === "number" ? `${product.points.toLocaleString()}P` : getTicketDisplayName(product.ticketType)}
        </p>
      </div>
    </button>
  );
}

function TreasureProductRail({
  products,
  onOpenProduct,
}: {
  products: HomeProduct[];
  onOpenProduct: (productName: string | undefined, fallbackTicketType: TicketTypePath) => void;
}) {
  const loopProducts = products.length >= 4 ? [...products, ...products] : products;

  return (
    <div className="absolute left-0 top-[660px] z-20 h-[247px] w-full overflow-hidden bg-white">
      {products.length > 0 ? (
        <div className={`flex gap-[16px] px-[2px] ${products.length >= 4 ? "animate-[homeRail_28s_linear_infinite]" : ""}`}>
          {loopProducts.map((product, index) => (
            <DynamicProductCard
              key={`${product.ticketType}-${product.id}-${index}`}
              product={product}
              className="w-[164px] shrink-0"
              onClick={() => onOpenProduct(product.name, product.ticketType)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function BoxImageFallbackOverlays() {
  const slots: Array<{ ticketType: TicketTypePath; className: string }> = [
    { ticketType: "legendary", className: "left-[29px] top-[1051px]" },
    { ticketType: "mystery", className: "left-[244px] top-[1051px]" },
    { ticketType: "lucky", className: "left-[29px] top-[1393px]" },
    { ticketType: "starlight", className: "left-[244px] top-[1393px]" },
    { ticketType: "beauty", className: "left-[29px] top-[1735px]" },
    { ticketType: "meat", className: "left-[244px] top-[1735px]" },
  ];

  return (
    <>
      {slots.map((slot) => (
        <div className={`absolute z-20 h-[206px] w-[206px] overflow-hidden bg-[#f2f2f2] ${slot.className}`} key={slot.className}>
          <img
            alt={getTicketDisplayName(slot.ticketType)}
            className="h-full w-full object-cover"
            loading="lazy"
            src={getHomeFallbackImage(slot.ticketType)}
          />
        </div>
      ))}
    </>
  );
}

function FeaturedHighValueProducts({
  products,
  onOpenProduct,
}: {
  products: HomeProduct[];
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
  const [homeProducts, setHomeProducts] = useState<HomeProduct[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<HomeProduct[]>([]);

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
          HOME_PRODUCT_TICKET_TYPES.map(async (ticketType) => {
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
          .filter((product) => product.imageUrl && typeof product.points === "number")
          .sort((first, second) => Number(second.points || 0) - Number(first.points || 0))
          .slice(0, 24);

        setFeaturedProducts(shuffleProducts(highValueProducts).slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      }
    };

    void fetchFeaturedProducts();
  }, []);

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
          @keyframes homeRail {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>

        <FigmaHome />
        <SharedHeader onCategoryClick={handleCategoryClick} />
        <BoxImageFallbackOverlays />
        <TreasureProductRail
          products={homeProducts}
          onOpenProduct={(productName, fallbackTicketType) =>
            navigate(buildTicketDetailPath(productName || "", fallbackTicketType))
          }
        />
        <FeaturedHighValueProducts
          products={featuredProducts}
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

      <SharedNavBar activePage="home" onNavigate={handleNavigate} />
    </>
  );
}
