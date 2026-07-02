import { useMemo, useState } from "react";
import { HEADER_HEIGHT } from "./SharedHeader";

type ExchangeStatus = "all" | "selling" | "sold";

interface ExchangeItem {
  id: string;
  productName: string;
  productBrand?: string;
  productImage?: string;
  ticketType?: string;
  points: number;
  price: number;
  sellerName?: string;
  listedAt?: string;
  status: string;
  sellerId?: string;
}

const FILTERS: Array<{ label: string; value: ExchangeStatus }> = [
  { label: "전체", value: "all" },
  { label: "교환 가능", value: "selling" },
  { label: "교환 완료", value: "sold" },
];

function ProductCard({
  item,
  onPurchase,
  isOwnTicket,
}: {
  item: ExchangeItem;
  onPurchase: (item: ExchangeItem) => void;
  isOwnTicket: boolean;
}) {
  const closed = item.status === "sold";

  return (
    <div className="flex gap-[14px] bg-white px-[20px] py-[18px]" style={{ borderBottom: "1px solid #f0f0f0" }}>
      <div className="h-[88px] w-[88px] flex-none overflow-hidden rounded-[12px]" style={{ background: "#e9e9ee" }}>
        {item.productImage && (
          <img alt={item.productName} className="h-full w-full object-cover" src={item.productImage} />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div className="flex flex-col gap-[3px]">
          <p className="text-[11px] text-[#9999bb]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            {(item.productBrand || item.ticketType || "센트박스")} 출신
          </p>
          <p className="truncate text-[15px] font-semibold leading-snug text-[#111130]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            {item.productName}
          </p>
          <p className="text-[12px] text-[#bbbbcc]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            상자가 {item.points.toLocaleString()}P
          </p>
        </div>

        <div className="mt-[10px] flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-[6px]">
            <span className="truncate text-[11px] text-[#ccccdd]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
              {(item.sellerName || "판매자")} · {item.listedAt ? new Date(item.listedAt).toLocaleDateString("ko-KR") : "방금"}
            </span>
            {!closed && (
              <span className="text-[11px] font-semibold" style={{ fontFamily: "'Pretendard', sans-serif", color: "#EAB352" }}>
                {item.price.toLocaleString()}P
              </span>
            )}
          </div>

          {closed ? (
            <span className="text-[11px] text-[#bbbbbb]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
              교환완료
            </span>
          ) : (
            <button
              className="rounded-[8px] px-[14px] py-[7px] text-[12px] font-semibold disabled:opacity-45"
              disabled={isOwnTicket}
              onClick={() => onPurchase(item)}
              style={{
                fontFamily: "'Pretendard', sans-serif",
                background: isOwnTicket ? "#e6e6ee" : "#000047",
                color: isOwnTicket ? "#9999aa" : "white",
              }}
              type="button"
            >
              {isOwnTicket ? "내 상품" : "거래 신청"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExchangePage({
  items,
  currentUserId,
  onPurchase,
}: {
  items: ExchangeItem[];
  currentUserId?: string;
  onPurchase: (item: ExchangeItem) => void;
}) {
  const [activeFilter, setActiveFilter] = useState<ExchangeStatus>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (activeFilter !== "all" && item.status !== activeFilter) return false;
      if (!query.trim()) return true;
      return item.productName.toLowerCase().includes(query.trim().toLowerCase());
    });
  }, [activeFilter, items, query]);

  return (
    <div className="w-full bg-white" style={{ paddingTop: HEADER_HEIGHT }}>
      <div className="flex items-center gap-[10px] px-[20px] py-[12px]" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="flex h-[38px] flex-1 items-center gap-[8px] rounded-[8px] px-[14px]" style={{ background: "#f3f3f7" }}>
          <svg fill="none" height="13" viewBox="0 0 24 24" width="13">
            <circle cx="11" cy="11" r="7" stroke="#aaaacc" strokeWidth="2" />
            <path d="M16.5 16.5L21 21" stroke="#aaaacc" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <input
            className="w-full bg-transparent text-[13px] text-[#33336c] outline-none placeholder:text-[#c0c0d0]"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="상품명 검색"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
            value={query}
          />
        </div>
        <button
          className="h-[38px] whitespace-nowrap rounded-[8px] px-[16px] text-[12px] font-semibold text-white"
          style={{ fontFamily: "'Pretendard', sans-serif", background: "#000047" }}
          type="button"
        >
          + 등록
        </button>
      </div>

      <div className="flex gap-[20px] px-[20px]" style={{ borderBottom: "1px solid #f0f0f0" }}>
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            className="py-[12px] text-[13px] font-semibold transition-colors"
            onClick={() => setActiveFilter(filter.value)}
            style={{
              fontFamily: "'Pretendard', sans-serif",
              color: activeFilter === filter.value ? "#000047" : "#ccccdd",
              borderBottom: activeFilter === filter.value ? "2px solid #000047" : "2px solid transparent",
            }}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="px-[20px] py-[10px]" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <span className="text-[12px] text-[#aaaacc]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
          총 {filtered.length}개
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-[10px] py-[80px]">
          <p className="text-[14px] text-[#ccccdd]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            등록된 상품이 없습니다
          </p>
        </div>
      ) : (
        filtered.map((item) => (
          <ProductCard
            key={item.id}
            isOwnTicket={Boolean(currentUserId && item.sellerId === currentUserId)}
            item={item}
            onPurchase={onPurchase}
          />
        ))
      )}

      <div className="h-[80px]" />
    </div>
  );
}
