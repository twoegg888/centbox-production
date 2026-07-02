import { useState } from "react";
import { HEADER_HEIGHT } from "./SharedHeader";

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  isPinned?: boolean;
}

const DEFAULT_NOTICES: Notice[] = [
  {
    id: 1,
    title: "센트박스 서비스 오픈 안내",
    content: `안녕하세요, 센트박스입니다.\n\n센트박스가 정식 오픈하였습니다! 미스터리 박스, 럭키드로우, 거래소 등 다양한 서비스를 이용해 보세요.\n\n오픈 기념으로 신규 가입 시 포인트 혜택을 드리고 있으니 많은 이용 부탁드립니다.\n\n감사합니다.`,
    date: "2026.06.01",
    isPinned: true,
  },
  {
    id: 2,
    title: "[필독] 배송 정책 안내",
    content: `당첨 상품 배송 관련 안내드립니다.\n\n• 발급 완료 처리 후 영업일 기준 3~5일 내 발송됩니다.\n• 배송 조회는 마이페이지에서 확인하실 수 있습니다.\n• 도서산간 지역은 추가 배송일이 소요될 수 있습니다.\n• 주소 오기입으로 인한 미배송은 책임지지 않으니 정확한 주소를 입력해 주세요.`,
    date: "2026.06.10",
    isPinned: true,
  },
  {
    id: 3,
    title: "6월 럭키드로우 일정 안내",
    content: `6월 럭키드로우 일정을 안내드립니다.\n\n매일 자정 기준으로 새로운 상품이 업데이트되며, 당일 자정까지 응모하실 수 있습니다.\n\n미당첨 시 사용하신 포인트는 100% 환급됩니다.`,
    date: "2026.06.15",
  },
  {
    id: 4,
    title: "서비스 점검 안내 (6/20 02:00~04:00)",
    content: `서버 안정화를 위한 정기 점검이 진행됩니다.\n\n• 일시: 2026년 6월 20일 새벽 2시 ~ 4시\n• 내용: 서버 업그레이드 및 데이터베이스 최적화\n\n점검 시간 동안 서비스 이용이 불가합니다. 이용에 불편을 드려 죄송합니다.`,
    date: "2026.06.18",
  },
];

interface Props {
  onBack: () => void;
}

export default function NoticePage({ onBack }: Props) {
  const [notices, setNotices]       = useState<Notice[]>(DEFAULT_NOTICES);
  const [selected, setSelected]     = useState<Notice | null>(null);
  const [isWriting, setIsWriting]   = useState(false);
  const [newTitle, setNewTitle]     = useState("");
  const [newContent, setNewContent] = useState("");

  const handleSubmit = () => {
    if (!newTitle.trim() || !newContent.trim()) return;
    const now = new Date();
    const date = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,"0")}.${String(now.getDate()).padStart(2,"0")}`;
    const notice: Notice = {
      id: Date.now(),
      title: newTitle.trim(),
      content: newContent.trim(),
      date,
    };
    setNotices(prev => [notice, ...prev]);
    setNewTitle("");
    setNewContent("");
    setIsWriting(false);
  };

  // ── 작성 화면 ──────────────────────────────────────────────
  if (isWriting) {
    return (
      <div className="w-full bg-white" style={{ paddingTop: HEADER_HEIGHT }}>
        <div className="flex items-center gap-[12px] px-[20px] h-[52px]" style={{ borderBottom: "1px solid #f0f0f0" }}>
          <button onClick={() => setIsWriting(false)} className="flex items-center justify-center w-[32px] h-[32px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#111130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-[16px] font-semibold text-[#111130]" style={{ fontFamily:"'Pretendard',sans-serif" }}>공지 작성</span>
          <button
            onClick={handleSubmit}
            className="ml-auto px-[16px] py-[7px] rounded-[8px] text-[13px] font-semibold text-white"
            style={{ fontFamily:"'Pretendard',sans-serif", background: newTitle && newContent ? "#000047" : "#ccc" }}
          >
            게시
          </button>
        </div>
        <div className="px-[20px] py-[20px] flex flex-col gap-[14px]">
          <input
            className="w-full px-[14px] py-[12px] rounded-[10px] text-[15px] outline-none"
            style={{ fontFamily:"'Pretendard',sans-serif", background:"#f5f5fb", border:"1px solid #eaeaea", color:"#111130" }}
            placeholder="제목을 입력하세요"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <textarea
            className="w-full px-[14px] py-[12px] rounded-[10px] text-[14px] outline-none resize-none"
            style={{ fontFamily:"'Pretendard',sans-serif", background:"#f5f5fb", border:"1px solid #eaeaea", color:"#444", minHeight: 260 }}
            placeholder="내용을 입력하세요"
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
          />
        </div>
      </div>
    );
  }

  // ── 상세 보기 ──────────────────────────────────────────────
  if (selected) {
    return (
      <div className="w-full bg-white" style={{ paddingTop: HEADER_HEIGHT }}>
        <div className="flex items-center gap-[12px] px-[20px] h-[52px]" style={{ borderBottom: "1px solid #f0f0f0" }}>
          <button onClick={() => setSelected(null)} className="flex items-center justify-center w-[32px] h-[32px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#111130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-[16px] font-semibold text-[#111130]" style={{ fontFamily:"'Pretendard',sans-serif" }}>공지사항</span>
        </div>
        <div className="px-[20px] pt-[24px] pb-[80px]">
          {selected.isPinned && (
            <span className="inline-block px-[8px] py-[3px] rounded-full text-[11px] font-semibold bg-[#f0f0f8] text-[#000047] mb-[10px]" style={{ fontFamily:"'Pretendard',sans-serif" }}>
              📌 필독
            </span>
          )}
          <h2 className="text-[18px] font-bold text-[#111130] leading-snug mb-[8px]" style={{ fontFamily:"'Pretendard',sans-serif" }}>
            {selected.title}
          </h2>
          <p className="text-[12px] text-[#bbb] mb-[24px]" style={{ fontFamily:"'Pretendard',sans-serif" }}>{selected.date}</p>
          <div style={{ height: 1, background:"#f0f0f0", marginBottom: 24 }} />
          <p className="text-[14px] text-[#444] leading-relaxed whitespace-pre-line" style={{ fontFamily:"'Pretendard',sans-serif" }}>
            {selected.content}
          </p>
        </div>
      </div>
    );
  }

  // ── 목록 ─────────────────────────────────────────────────
  return (
    <div className="w-full bg-white" style={{ paddingTop: HEADER_HEIGHT }}>
      {/* 헤더 */}
      <div className="flex items-center justify-between px-[20px] h-[52px]" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="flex items-center gap-[12px]">
          <button onClick={onBack} className="flex items-center justify-center w-[32px] h-[32px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#111130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-[16px] font-semibold text-[#111130]" style={{ fontFamily:"'Pretendard',sans-serif" }}>공지사항</span>
        </div>
        {/* 관리자 작성 버튼 */}
        <button
          onClick={() => setIsWriting(true)}
          className="flex items-center gap-[5px] px-[12px] py-[6px] rounded-[8px] text-[12px] font-semibold"
          style={{ fontFamily:"'Pretendard',sans-serif", background:"#f0f0f8", color:"#000047" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="#000047" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          공지 작성
        </button>
      </div>

      {/* 총 개수 */}
      <div className="px-[20px] py-[10px]" style={{ borderBottom:"1px solid #f5f5f5" }}>
        <span className="text-[12px] text-[#aaaacc]" style={{ fontFamily:"'Pretendard',sans-serif" }}>
          전체 {notices.length}건
        </span>
      </div>

      {/* 목록 */}
      <div className="flex flex-col pb-[80px]">
        {notices.map((n, i) => (
          <button
            key={n.id}
            onClick={() => setSelected(n)}
            className="flex items-start gap-[12px] px-[20px] py-[16px] text-left w-full"
            style={{ borderBottom: i < notices.length - 1 ? "1px solid #f5f5f5" : "none" }}
          >
            {/* 핀 뱃지 */}
            {n.isPinned ? (
              <span className="flex-none mt-[2px] text-[12px]">📌</span>
            ) : (
              <span className="flex-none mt-[3px] w-[6px] h-[6px] rounded-full bg-[#ddddf0]" />
            )}
            <div className="flex-1 min-w-0">
              <p
                className="text-[14px] font-semibold text-[#111130] leading-snug mb-[5px] truncate"
                style={{ fontFamily:"'Pretendard',sans-serif" }}
              >
                {n.title}
              </p>
              <p
                className="text-[12px] text-[#999] truncate"
                style={{ fontFamily:"'Pretendard',sans-serif" }}
              >
                {n.content.split("\n")[0]}
              </p>
            </div>
            <div className="flex-none flex flex-col items-end gap-[6px]">
              <span className="text-[11px] text-[#ccc]" style={{ fontFamily:"'Pretendard',sans-serif" }}>{n.date}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
