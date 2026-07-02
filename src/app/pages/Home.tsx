import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FigmaHome from "../../figma-make/imports/Home-1";
import SharedHeader from "../../figma-make/components/SharedHeader";
import SharedNavBar from "../../figma-make/components/SharedNavBar";
import { getSupportPath, SupportFooterOverlays } from "../components/SupportNavigation";
import { getApiBase, publicAnonKey } from "../../../utils/supabase/info";
import { buildTicketDetailPath } from "../utils/ticketDetailMeta";
import { TicketType } from "../types";

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

const BOX_NAME_BY_TYPE: Record<TicketTypePath, string> = {
  ruby: "루비 박스",
  gold: "골드 박스",
  diamond: "다이아 박스",
  platinum: "플래티넘 박스",
  beauty: "뷰티 박스",
  meat: "미트 박스",
  jewelry: "주얼리 박스",
};

const HOME_TICKET_LINKS: Array<{
  ariaLabel: string;
  ticketType: TicketTypePath;
  className: string;
}> = [
  {
    ariaLabel: "루비 박스 상세 열기",
    ticketType: "ruby",
    className: "left-[2px] top-[660px] h-[247px] w-[164px]",
  },
  {
    ariaLabel: "골드 박스 상세 열기",
    ticketType: "gold",
    className: "left-[182px] top-[660px] h-[247px] w-[164px]",
  },
  {
    ariaLabel: "다이아 박스 상세 열기",
    ticketType: "diamond",
    className: "left-[362px] top-[660px] h-[247px] w-[118px]",
  },
  {
    ariaLabel: "루비 박스 상세 열기",
    ticketType: "ruby",
    className: "left-[29px] top-[1051px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "플래티넘 박스 상세 열기",
    ticketType: "platinum",
    className: "left-[244px] top-[1051px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "골드 박스 상세 열기",
    ticketType: "gold",
    className: "left-[29px] top-[1393px] h-[275px] w-[206px]",
  },
  {
    ariaLabel: "다이아 박스 상세 열기",
    ticketType: "diamond",
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
        {product.imageUrl ? (
          <img
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            src={product.imageUrl}
          />
        ) : null}
      </div>
      <div className={compact ? "pt-[14px]" : "pt-[14px]"}>
        <p className="truncate font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-[15px] text-[#2c2c2c]">
          {product.name}
        </p>
        <p className="mt-[4px] truncate font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-[#606060]">
          {product.brand || BOX_NAME_BY_TYPE[product.ticketType]}
        </p>
        <p className="mt-[8px] truncate font-['Noto_Sans:SemiBold','Noto_Sans_KR:SemiBold',sans-serif] text-[18px] text-[#606060]">
          {typeof product.points === "number" ? `${product.points.toLocaleString()}P` : BOX_NAME_BY_TYPE[product.ticketType]}
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
      {products.length === 0 ? (
        <div className="mx-[29px] flex h-[165px] items-center justify-center rounded-[16px] border border-dashed border-[#d8d8d8] bg-[#fafafa] px-[20px] text-center">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] leading-[20px] text-[#777]">
            관리자 페이지에서 홈 메인 상품을 등록하면 여기에 자동으로 표시됩니다.
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}

function PopularExchangeProducts({
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
      {products.length === 0 ? (
        <div className="absolute left-[29px] top-[2258px] z-20 flex h-[206px] w-[421px] items-center justify-center border border-dashed border-[#d8d8d8] bg-[#fafafa] px-[24px] text-center">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] text-[13px] leading-[20px] text-[#777]">
            거래소에서 교환이 완료된 상품이 쌓이면 이 구좌에 자동으로 노출됩니다.
          </p>
        </div>
      ) : (
        products.slice(0, slots.length).map((product, index) => (
          <DynamicProductCard
            key={`${product.ticketType}-${product.id}-${index}`}
            product={product}
            compact
            className={`absolute z-20 w-[206px] ${slots[index]}`}
            onClick={() => onOpenProduct(product.name, product.ticketType)}
          />
        ))
      )}
    </>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [homeProducts, setHomeProducts] = useState<HomeProduct[]>([]);
  const [popularProducts, setPopularProducts] = useState<HomeProduct[]>([]);

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
        setHomeProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch home products:", error);
      }
    };

    void fetchHomeProducts();
  }, []);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await fetch(`${getApiBase()}/exchange/popular-products`, {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) return;

        const data = await response.json();
        setPopularProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch popular exchange products:", error);
      }
    };

    void fetchPopularProducts();
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
        <TreasureProductRail
          products={homeProducts}
          onOpenProduct={(productName, fallbackTicketType) =>
            navigate(buildTicketDetailPath(productName || "", fallbackTicketType))
          }
        />
        <PopularExchangeProducts
          products={popularProducts}
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
