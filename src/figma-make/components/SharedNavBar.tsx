import svgPaths from "../imports/Home-1/svg-1j78ghmiqp";

type Page = "home" | "result" | "exchange" | "point" | "lucky";

interface NavPath {
  d: string;
  isWhite?: boolean; // white 컷아웃 패스는 항상 white 유지
}

interface NavItem {
  page: Page | null;
  label: string;
  paths: NavPath[];
}

const NAV_ITEMS: NavItem[] = [
  {
    page: "home",
    label: "홈",
    paths: [{ d: svgPaths.p11a5580 }],
  },
  {
    page: "result",
    label: "당첨 내역",
    paths: [{ d: svgPaths.p25895e80 }],
  },
  {
    page: "exchange",
    label: "거래소",
    paths: [
      { d: svgPaths.p11d16a80 },
      { d: svgPaths.p27aa6df0, isWhite: true },
      { d: svgPaths.p19594e00, isWhite: true },
    ],
  },
  {
    page: "point",
    label: "포인트 충전",
    paths: [
      { d: svgPaths.pace200 },
      { d: svgPaths.p3b299900, isWhite: true },
    ],
  },
  {
    page: "lucky",
    label: "럭키드로우",
    paths: [
      { d: svgPaths.p1b936200 },
      { d: svgPaths.p32c2ee80, isWhite: true },
    ],
  },
];

interface Props {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function SharedNavBar({ activePage, onNavigate }: Props) {
  return (
    <div
      className="fixed bottom-0 z-[60] bg-white flex items-center"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        width: 480,
        height: 64,
        borderTop: "1px solid #eaeaea",
      }}
    >
      {NAV_ITEMS.map((item, i) => {
        const isActive = item.page !== null && item.page === activePage;
        const mainColor = isActive ? "#020202" : "#DDDDDD";
        const labelColor = isActive ? "#020202" : "#DDDDDD";

        return (
          <button
            key={i}
            className="flex flex-col items-center justify-center flex-1 h-full gap-[2px]"
            onClick={() => item.page && onNavigate(item.page)}
            style={{ cursor: item.page ? "pointer" : "default" }}
          >
            <div className="size-[24px] relative">
              <svg
                className="absolute inset-0 size-full"
                fill="none"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
              >
                {item.paths.map((p, pi) => (
                  <path
                    key={pi}
                    d={p.d}
                    fill={p.isWhite ? "white" : mainColor}
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                ))}
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
                fontSize: 9.5,
                lineHeight: 1,
                color: labelColor,
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
