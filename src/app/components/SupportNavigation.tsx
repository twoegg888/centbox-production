import { useNavigate } from "react-router";

type SupportLabel = "이용방법" | "이벤트" | "공지사항";
type FooterSupportLabel =
  | "자주 묻는 질문"
  | "서비스 소개"
  | "확률표"
  | "문의 게시판"
  | "이용약관"
  | "개인정보처리방침";

const SUPPORT_PATHS: Record<SupportLabel, string> = {
  이용방법: "/service-intro",
  이벤트: "/events",
  공지사항: "/notice",
};

const FOOTER_SUPPORT_PATHS: Record<FooterSupportLabel, string> = {
  "자주 묻는 질문": "/faq",
  "서비스 소개": "/service-intro",
  확률표: "/probability",
  "문의 게시판": "/inquiry",
  이용약관: "/terms",
  개인정보처리방침: "/privacy",
};

const HEADER_LINKS: Array<{ label: SupportLabel; className: string }> = [
  { label: "이용방법", className: "left-[30px] top-[112px] w-[96px]" },
  { label: "이벤트", className: "left-[142px] top-[112px] w-[90px]" },
  { label: "공지사항", className: "left-[248px] top-[112px] w-[110px]" },
];

export function getSupportPath(label: string) {
  return SUPPORT_PATHS[label as SupportLabel] || "/";
}

export function getFooterSupportPath(label: string) {
  return FOOTER_SUPPORT_PATHS[label as FooterSupportLabel] || "/";
}

export function SupportHeaderOverlays() {
  const navigate = useNavigate();

  return (
    <>
      {HEADER_LINKS.map((link) => (
        <button
          aria-label={`${link.label} 열기`}
          className={`absolute z-40 h-[50px] bg-transparent ${link.className}`}
          key={link.label}
          onClick={() => navigate(SUPPORT_PATHS[link.label])}
          type="button"
        />
      ))}
    </>
  );
}

export function SupportFooterOverlays({
  firstRowTop,
  secondRowTop,
}: {
  firstRowTop: number;
  secondRowTop: number;
}) {
  const navigate = useNavigate();

  const links: Array<{
    label: FooterSupportLabel;
    left: number;
    top: number;
  }> = [
    { label: "자주 묻는 질문", left: 30, top: firstRowTop },
    { label: "서비스 소개", left: 180, top: firstRowTop },
    { label: "확률표", left: 330, top: firstRowTop },
    { label: "문의 게시판", left: 30, top: secondRowTop },
    { label: "이용약관", left: 180, top: secondRowTop },
    { label: "개인정보처리방침", left: 330, top: secondRowTop },
  ];

  return (
    <>
      {links.map((link) => (
        <button
          aria-label={`${link.label} 열기`}
          className="absolute z-40 h-[34px] w-[120px] rounded-[4px] bg-transparent"
          key={link.label}
          onClick={() => navigate(FOOTER_SUPPORT_PATHS[link.label])}
          style={{ left: link.left, top: link.top }}
          type="button"
        />
      ))}
    </>
  );
}
