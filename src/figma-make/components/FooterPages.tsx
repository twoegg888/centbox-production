import { HEADER_HEIGHT } from "./SharedHeader";

interface PageLayoutProps {
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}

function PageLayout({ title, onBack, children }: PageLayoutProps) {
  return (
    <div className="w-full bg-white" style={{ paddingTop: HEADER_HEIGHT }}>
      {/* 페이지 헤더 */}
      <div
        className="flex items-center gap-[12px] px-[20px] h-[52px]"
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        <button onClick={onBack} className="flex items-center justify-center w-[32px] h-[32px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#111130" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span
          className="text-[16px] font-semibold text-[#111130]"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          {title}
        </span>
      </div>

      {/* 콘텐츠 */}
      <div className="px-[20px] py-[24px] pb-[80px]">
        {children}
      </div>
    </div>
  );
}

// ── 공통 스타일 헬퍼 ─────────────────────────────────────────
const S = {
  section: "mb-[28px]",
  h2: { fontFamily: "'Pretendard', sans-serif", fontSize: 15, fontWeight: 700, color: "#111130", marginBottom: 10 } as React.CSSProperties,
  p:  { fontFamily: "'Pretendard', sans-serif", fontSize: 13, color: "#666", lineHeight: 1.8 } as React.CSSProperties,
  divider: { height: 1, background: "#f0f0f0", margin: "20px 0" } as React.CSSProperties,
  badge: "inline-block px-[8px] py-[3px] rounded-full text-[11px] font-semibold bg-[#f0f0f6] text-[#33336C]",
};

// ── 자주 묻는 질문 ────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: "센트박스는 어떤 서비스인가요?", a: "센트박스는 미스터리 박스를 구매하여 다양한 상품을 받을 수 있는 서비스입니다. 구매한 박스 안에 어떤 상품이 들어있는지는 개봉 전까지 알 수 없습니다." },
  { q: "포인트는 어떻게 충전하나요?", a: "하단 네비게이션의 '포인트 충전' 탭에서 원하는 금액을 선택하여 충전하실 수 있습니다. 계좌이체, 카드 결제 등 다양한 방법을 지원합니다." },
  { q: "배송은 얼마나 걸리나요?", a: "상품 당첨 후 발급 완료 처리 시 영업일 기준 3~5일 내 배송됩니다. 도서산간 지역의 경우 추가 시일이 소요될 수 있습니다." },
  { q: "미당첨 시 포인트 환급은 어떻게 되나요?", a: "럭키드로우의 경우 미당첨 시 응모에 사용한 포인트가 100% 환급됩니다. 환급은 추첨 종료 후 24시간 이내에 자동으로 처리됩니다." },
  { q: "거래소에서 교환은 어떻게 이루어지나요?", a: "거래소에서 마음에 드는 상품에 '거래 신청'을 누르면 상품 등록자에게 알림이 전송됩니다. 등록자가 수락하면 서로의 상품 정보를 공유하여 교환을 진행합니다." },
  { q: "환불 정책은 어떻게 되나요?", a: "박스 개봉 전에는 전액 환불이 가능합니다. 개봉 후에는 상품에 하자가 있을 경우에만 환불 처리됩니다. 자세한 사항은 문의 게시판을 이용해 주세요." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div style={{ borderBottom: "1px solid #f5f5f5", paddingBottom: 16, marginBottom: 16 }}>
      <p style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 14, fontWeight: 600, color: "#111130", marginBottom: 8 }}>
        Q. {q}
      </p>
      <p style={S.p}>A. {a}</p>
    </div>
  );
}

export function FaqPage({ onBack }: { onBack: () => void }) {
  return (
    <PageLayout title="자주 묻는 질문" onBack={onBack}>
      {FAQ_ITEMS.map((item, i) => <FAQItem key={i} {...item} />)}
    </PageLayout>
  );
}

// ── 서비스 소개 ───────────────────────────────────────────────
export function ServiceIntroPage({ onBack }: { onBack: () => void }) {
  return (
    <PageLayout title="서비스 소개" onBack={onBack}>
      <div className={S.section}>
        <p style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 22, fontWeight: 700, color: "#000047", marginBottom: 8 }}>
          센트박스
        </p>
        <p style={S.p}>
          센트박스는 당신의 일상에 특별한 설렘을 더하는 미스터리 박스 플랫폼입니다.
          매일 새로운 상품을 담은 박스가 업데이트되며, 운에 따라 다양한 브랜드의 상품을 획득할 수 있습니다.
        </p>
      </div>
      <div style={S.divider} />
      <div className={S.section}>
        <p style={S.h2}>주요 서비스</p>
        {[
          { icon: "📦", title: "미스터리 박스", desc: "포인트로 박스를 구매하고 랜덤 상품을 획득하세요." },
          { icon: "🎰", title: "럭키드로우",   desc: "매일 진행되는 특별 추첨에 응모하고 고가의 상품을 노려보세요." },
          { icon: "🔄", title: "거래소",        desc: "획득한 상품을 다른 사용자와 자유롭게 교환하세요." },
          { icon: "🏆", title: "당첨 내역",     desc: "나의 당첨 상품을 확인하고 발급 신청하세요." },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="flex gap-[14px] mb-[16px]">
            <div
              className="flex-none w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-[20px]"
              style={{ background: "#f0f0f8" }}
            >
              {icon}
            </div>
            <div>
              <p style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 14, fontWeight: 600, color: "#111130", marginBottom: 4 }}>{title}</p>
              <p style={S.p}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={S.divider} />
      <div className={S.section}>
        <p style={S.h2}>회사 정보</p>
        {[
          ["상호", "주식회사 투베이스"],
          ["대표", "최승연"],
          ["사업자등록번호", "288-88-03513"],
          ["통신판매업", "2026-김해장유-0206"],
          ["주소", "경상남도 김해시 대청로104번길 27-31 1층"],
          ["고객센터", "centbox_cs@gmail.com"],
          ["운영시간", "13:00 ~ 17:00 / 공휴일 휴무"],
        ].map(([label, value]) => (
          <div key={label} className="flex gap-[12px] mb-[10px]">
            <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 13, color: "#aaa", minWidth: 90 }}>{label}</span>
            <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 13, color: "#444" }}>{value}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ── 확률표 ────────────────────────────────────────────────────
const PROB_DATA = [
  { box: "전설의 상자",      price: "99,000P", items: [{ grade: "LEGENDARY", prob: "1%",  color: "#d4920a" }, { grade: "EPIC",      prob: "9%",  color: "#7c3aed" }, { grade: "RARE",      prob: "30%", color: "#2563eb" }, { grade: "COMMON",    prob: "60%", color: "#6b7280" }] },
  { box: "미스터리 상자",    price: "49,900P", items: [{ grade: "EPIC",      prob: "5%",  color: "#7c3aed" }, { grade: "RARE",      prob: "25%", color: "#2563eb" }, { grade: "COMMON",    prob: "70%", color: "#6b7280" }] },
  { box: "행운의 상자",      price: "29,900P", items: [{ grade: "RARE",      prob: "15%", color: "#2563eb" }, { grade: "COMMON",    prob: "85%", color: "#6b7280" }] },
  { box: "별빛 상자",        price: "19,900P", items: [{ grade: "RARE",      prob: "10%", color: "#2563eb" }, { grade: "COMMON",    prob: "90%", color: "#6b7280" }] },
  { box: "퍼달이의 주머니",  price: "9,900P",  items: [{ grade: "COMMON",    prob: "100%",color: "#6b7280" }] },
];

export function ProbabilityPage({ onBack }: { onBack: () => void }) {
  return (
    <PageLayout title="확률표" onBack={onBack}>
      <p style={{ ...S.p, marginBottom: 20 }}>
        각 박스별 등급 확률은 아래와 같습니다. 모든 확률은 동일한 조건에서 독립적으로 적용됩니다.
      </p>
      {PROB_DATA.map(({ box, price, items }) => (
        <div key={box} style={{ marginBottom: 20, border: "1px solid #eeeeee", borderRadius: 14, overflow: "hidden" }}>
          <div className="flex justify-between items-center px-[16px] py-[12px]" style={{ background: "#f8f8fc" }}>
            <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 14, fontWeight: 700, color: "#111130" }}>{box}</span>
            <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 12, color: "#000047", fontWeight: 600 }}>{price}</span>
          </div>
          {items.map(({ grade, prob, color }) => (
            <div key={grade} className="flex justify-between items-center px-[16px] py-[10px]" style={{ borderTop: "1px solid #f0f0f0" }}>
              <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 13, fontWeight: 700, color }}>{grade}</span>
              <div className="flex items-center gap-[10px]">
                <div className="h-[6px] rounded-full" style={{ width: `${parseFloat(prob) * 1.2}px`, background: color, opacity: 0.3 }} />
                <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 13, fontWeight: 600, color }}>{prob}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
      <p style={{ ...S.p, fontSize: 11, color: "#bbb" }}>
        * 확률은 사전 고지 없이 변경될 수 있습니다. 변경 시 공지사항을 통해 안내드립니다.
      </p>
    </PageLayout>
  );
}

// ── 문의 게시판 ───────────────────────────────────────────────
export function InquiryPage({ onBack }: { onBack: () => void }) {
  return (
    <PageLayout title="문의 게시판" onBack={onBack}>
      <div
        className="rounded-[14px] p-[20px] mb-[24px]"
        style={{ background: "#f5f5fb" }}
      >
        <p style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 14, fontWeight: 600, color: "#000047", marginBottom: 6 }}>
          고객센터 운영 안내
        </p>
        <p style={S.p}>이메일 : centbox_cs@gmail.com</p>
        <p style={S.p}>운영시간 : 13:00 ~ 17:00 (공휴일 휴무)</p>
        <p style={{ ...S.p, marginTop: 6, color: "#aaa" }}>문의 접수 후 영업일 기준 1~2일 내 답변 드립니다.</p>
      </div>

      <div className="flex flex-col gap-[10px] mb-[28px]">
        {["배송 문의", "상품 문의", "결제/환불 문의", "계정 문의", "기타 문의"].map(cat => (
          <button
            key={cat}
            className="flex items-center justify-between w-full px-[16px] py-[14px] rounded-[12px] bg-white"
            style={{ border: "1px solid #eeeeee" }}
          >
            <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 14, color: "#111130" }}>{cat}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#ccccdd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ))}
      </div>

      <div style={S.divider} />
      <p style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 14, fontWeight: 600, color: "#111130", marginBottom: 12 }}>
        자주 묻는 문의
      </p>
      {["배송은 얼마나 걸리나요?", "포인트 환불은 어떻게 하나요?", "당첨 상품을 받지 못했어요"].map(q => (
        <div key={q} className="flex items-center justify-between py-[12px]" style={{ borderBottom: "1px solid #f5f5f5" }}>
          <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 13, color: "#444" }}>{q}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#ccccdd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      ))}
    </PageLayout>
  );
}

// ── 이용약관 ─────────────────────────────────────────────────
export function TermsPage({ onBack }: { onBack: () => void }) {
  const sections = [
    { title: "제1조 (목적)", content: "이 약관은 주식회사 투베이스(이하 '회사')가 운영하는 센트박스 서비스(이하 '서비스')의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다." },
    { title: "제2조 (정의)", content: "'서비스'란 회사가 제공하는 미스터리 박스 구매, 럭키드로우 응모, 거래소 등 일체의 서비스를 의미합니다. '이용자'란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원을 말합니다." },
    { title: "제3조 (약관의 효력 및 변경)", content: "이 약관은 서비스를 이용하려는 모든 이용자에게 적용됩니다. 회사는 합리적인 사유가 있는 경우 약관을 변경할 수 있으며, 변경 시 공지사항을 통해 사전 공지합니다." },
    { title: "제4조 (서비스 이용)", content: "이용자는 포인트를 충전하여 박스를 구매하거나 럭키드로우에 응모할 수 있습니다. 서비스 이용 중 발생한 포인트는 현금으로 환전되지 않으며, 타인에게 양도할 수 없습니다." },
    { title: "제5조 (이용자의 의무)", content: "이용자는 서비스 이용 시 관계 법령 및 이 약관의 규정, 회사의 이용 정책 등을 준수해야 합니다. 불법적인 방법으로 서비스를 이용하거나 타인의 이용을 방해하는 행위를 금지합니다." },
    { title: "제6조 (면책조항)", content: "회사는 천재지변, 불가항력적 사유로 인한 서비스 장애에 대해 책임을 지지 않습니다. 이용자의 귀책사유로 인한 서비스 이용 장애에 대해서도 책임을 지지 않습니다." },
  ];

  return (
    <PageLayout title="이용약관" onBack={onBack}>
      <p style={{ ...S.p, marginBottom: 20, color: "#aaa" }}>시행일자 : 2026년 01월 01일</p>
      {sections.map(({ title, content }) => (
        <div key={title} className={S.section}>
          <p style={S.h2}>{title}</p>
          <p style={S.p}>{content}</p>
        </div>
      ))}
    </PageLayout>
  );
}

// ── 개인정보처리방침 ──────────────────────────────────────────
export function PrivacyPage({ onBack }: { onBack: () => void }) {
  const sections = [
    { title: "1. 수집하는 개인정보 항목", content: "회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.\n• 필수: 이름, 이메일 주소, 휴대폰 번호\n• 배송 시: 수령인 이름, 배송 주소, 연락처\n• 자동 수집: 서비스 이용 기록, 접속 IP, 쿠키" },
    { title: "2. 개인정보 수집 및 이용 목적", content: "수집된 개인정보는 서비스 제공 및 운영, 본인 확인, 상품 배송, 고객 상담 및 분쟁 처리, 서비스 개선 및 개발에 활용됩니다." },
    { title: "3. 개인정보 보유 및 이용 기간", content: "원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 즉시 파기합니다. 단, 관련 법령에 의해 보존할 필요가 있는 경우 법령에서 정한 기간 동안 보관합니다." },
    { title: "4. 개인정보의 제3자 제공", content: "회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령의 규정에 의한 경우에는 예외로 합니다." },
    { title: "5. 개인정보 보호 책임자", content: "이름: 최승연\n이메일: centbox_cs@gmail.com\n개인정보 관련 문의사항은 위 연락처로 문의해 주시기 바랍니다." },
  ];

  return (
    <PageLayout title="개인정보처리방침" onBack={onBack}>
      <p style={{ ...S.p, marginBottom: 20, color: "#aaa" }}>시행일자 : 2026년 01월 01일</p>
      {sections.map(({ title, content }) => (
        <div key={title} className={S.section}>
          <p style={S.h2}>{title}</p>
          <p style={{ ...S.p, whiteSpace: "pre-line" }}>{content}</p>
        </div>
      ))}
    </PageLayout>
  );
}
