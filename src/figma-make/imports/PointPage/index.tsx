import svgPaths from "./svg-jqjg6a3r91";
import imgChatGptImage20266160143494 from "./72e815220b7894bd5647ce2ae0a81e7daab3ff29.png";

function RechargeButtonContainer() {
  return (
    <div className="absolute contents left-[378px] top-[244px]" data-name="Recharge button container">
      <div className="absolute bg-black h-[42px] left-[378px] rounded-[21px] top-[244px] w-[53px]" data-name="Recharge button" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[404.5px] text-[12px] text-center text-white top-[265px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">충전</p>
      </div>
    </div>
  );
}

function MyPointsContainer({ points }: { points: number }) {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[51px] text-[#020202] text-center top-[232px] whitespace-nowrap" data-name="My points container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center left-[105px] text-[16px] top-[243px] tracking-[-0.48px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">나의 보유 포인트</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center left-[159.5px] text-[31px] top-[279px] tracking-[-0.93px]" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">{points.toLocaleString()}P</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p11a5580} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[10px] whitespace-nowrap">
        <p className="leading-[13px]">홈</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Link">
      <Svg />
      <Margin />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[96px]" data-name="Container">
      <Link />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p25895e80} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[9.375px] whitespace-nowrap">
        <p className="leading-[13px]">당첨 티켓</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Link">
      <Svg1 />
      <Margin1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[96px]" data-name="Container">
      <Link1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p11d16a80} fill="var(--fill-0, #DDDDDD)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p27aa6df0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p19594e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[9.375px] whitespace-nowrap">
        <p className="leading-[13px]">거래소</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Link">
      <Svg2 />
      <Margin2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[96px]" data-name="Container">
      <Link2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} fill="var(--fill-0, #020202)" id="Vector" />
          <path d={svgPaths.p3b299900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020202] text-[9.375px] whitespace-nowrap">
        <p className="leading-[13px]">포인트 충전</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Link">
      <Svg3 />
      <Margin3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[96px]" data-name="Container">
      <Link3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1b936200} fill="var(--fill-0, #DDDDDD)" id="Vector" />
          <path d={svgPaths.p32c2ee80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[9.375px] whitespace-nowrap">
        <p className="leading-[13px]">럭키드로우</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Link">
      <Svg4 />
      <Margin4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[96px]" data-name="Container">
      <Link4 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex h-[64px] items-center justify-center left-0 right-0 top-[calc(50%+822.5px)]" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function CloseButton() {
  return (
    <div className="absolute left-[441px] size-[10px] top-[22px]" data-name="Close button">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Close button">
            <path d="M11 1L1 11" id="Vector 17" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d="M1 1L11 11" id="Vector 18" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeadBanner() {
  return (
    <div className="absolute contents left-0 top-0" data-name="head_banner">
      <div className="absolute bg-[rgba(0,0,71,0.8)] h-[52px] left-0 top-0 w-[480px]" data-name="Banner background" />
      <CloseButton />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[102px] text-[15px] text-white top-[26.5px] tracking-[-0.6px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[13px]">최*진님께서 “ [Airpods Max 3] ”를 획득했어요!</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute inset-[4.04%_76.04%_94.43%_5.42%]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.9999 26.1203">
        <g id="Logo">
          <path d={svgPaths.p2448600} fill="var(--fill-0, #EAB352)" id="Vector" />
          <path d={svgPaths.p37f12800} fill="var(--fill-0, #E8B04C)" id="Vector_2" />
          <path d={svgPaths.p2d7b5800} fill="var(--fill-0, #EAB352)" id="Vector_3" />
          <path d={svgPaths.p23359c80} fill="var(--fill-0, #EAB352)" id="Vector_4" />
          <path d={svgPaths.p5bdb80} fill="var(--fill-0, #E29D29)" id="Vector_5" />
          <path d={svgPaths.p5d31400} fill="var(--fill-0, #E6A83E)" id="Vector_6" />
          <path d={svgPaths.p11a4f600} fill="var(--fill-0, #E29D29)" id="Vector_7" />
          <path d={svgPaths.p16fd2d32} fill="var(--fill-0, #EAB352)" id="Vector_8" />
          <path d={svgPaths.p1a610b80} fill="var(--fill-0, #E29D29)" id="Vector_9" />
          <path d={svgPaths.pb5ef680} fill="var(--fill-0, #EAB352)" id="Vector_10" />
          <path d={svgPaths.p3462eaf0} fill="var(--fill-0, #E8B04C)" id="Vector_11" />
          <path d={svgPaths.p9e03400} fill="var(--fill-0, #E29D29)" id="Vector_12" />
          <path d={svgPaths.p36daac00} fill="var(--fill-0, #E6A83E)" id="Vector_13" />
          <path d={svgPaths.p203c80} fill="var(--fill-0, #1D274F)" id="Vector_14" />
          <path d={svgPaths.p1d3df700} fill="var(--fill-0, #E29D29)" id="Vector_15" />
          <path d={svgPaths.p2c743900} fill="var(--fill-0, #EAB352)" id="Vector_16" />
          <path d={svgPaths.p110fe600} fill="var(--fill-0, #E6A83E)" id="Vector_17" />
          <path d={svgPaths.p24b23b00} fill="var(--fill-0, #EAB352)" id="Vector_18" />
          <path d={svgPaths.p3c0b9000} fill="var(--fill-0, #E8B04C)" id="Vector_19" />
          <path d={svgPaths.pbbea6d0} fill="var(--fill-0, #EAB352)" id="Vector_20" />
          <path d={svgPaths.p914fa80} fill="var(--fill-0, #E6A83E)" id="Vector_21" />
          <path d={svgPaths.pbfbf230} fill="var(--fill-0, #E8B04C)" id="Vector_22" />
          <path d={svgPaths.p1abb5600} fill="var(--fill-0, #EAB352)" id="Vector_23" />
          <path d={svgPaths.p82fb280} fill="var(--fill-0, #EAB352)" id="Vector_24" />
          <path d={svgPaths.p847700} fill="var(--fill-0, #E6A83E)" id="Vector_25" />
          <path d={svgPaths.p1c93b680} fill="var(--fill-0, #E8B04C)" id="Vector_26" />
          <path d={svgPaths.p33c27e00} fill="var(--fill-0, #E6A83E)" id="Vector_27" />
          <path d={svgPaths.p1a3daf00} fill="var(--fill-0, #EAB352)" id="Vector_28" />
          <path d={svgPaths.p25b56880} fill="var(--fill-0, #1D274F)" id="Vector_29" />
          <path d={svgPaths.p3b8b9970} fill="var(--fill-0, #E6A83E)" id="Vector_30" />
          <path d={svgPaths.p27275a00} fill="var(--fill-0, #E6A83E)" id="Vector_31" />
          <path d={svgPaths.p21578400} fill="var(--fill-0, #E29D29)" id="Vector_32" />
          <path d={svgPaths.p16683880} fill="var(--fill-0, #E8B04C)" id="Vector_33" />
          <path d={svgPaths.p16b33e00} fill="var(--fill-0, #E8B04C)" id="Vector_34" />
          <path d={svgPaths.p3c638600} fill="var(--fill-0, #E6A83E)" id="Vector_35" />
          <path d={svgPaths.pb3d73f2} fill="var(--fill-0, #E8B04C)" id="Vector_36" />
          <path d={svgPaths.p10a27a80} fill="var(--fill-0, #E8B04C)" id="Vector_37" />
          <path d={svgPaths.p2b26a300} fill="var(--fill-0, #EAB352)" id="Vector_38" />
          <path d={svgPaths.p2a5e9780} fill="var(--fill-0, #E6A83E)" id="Vector_39" />
          <path d={svgPaths.p15186a80} fill="var(--fill-0, #E29D29)" id="Vector_40" />
          <path d={svgPaths.p1be2be40} fill="var(--fill-0, #E6A83E)" id="Vector_41" />
          <path d={svgPaths.p19635400} fill="var(--fill-0, #E6A83E)" id="Vector_42" />
          <path d={svgPaths.p36da4000} fill="var(--fill-0, #E29D29)" id="Vector_43" />
          <path d={svgPaths.p13b1a700} fill="var(--fill-0, #E29D29)" id="Vector_44" />
          <path d={svgPaths.p329ec800} fill="var(--fill-0, #E29D29)" id="Vector_45" />
          <path d={svgPaths.p1d074700} fill="var(--fill-0, #E29D29)" id="Vector_46" />
          <path d={svgPaths.p2a5db700} fill="var(--fill-0, #E29D29)" id="Vector_47" />
          <path d={svgPaths.p218a0e00} fill="var(--fill-0, #E6A83E)" id="Vector_48" />
          <path d={svgPaths.p22864d00} fill="var(--fill-0, #E29D29)" id="Vector_49" />
          <path d={svgPaths.p50ac7c0} fill="var(--fill-0, #E29D29)" id="Vector_50" />
          <path d={svgPaths.p25f9300} fill="var(--fill-0, #E6A83E)" id="Vector_51" />
          <path d={svgPaths.p2b25a800} fill="var(--fill-0, #E6A83E)" id="Vector_52" />
          <path d={svgPaths.p1cc01100} fill="var(--fill-0, #E6A83E)" id="Vector_53" />
          <path d={svgPaths.p384e2300} fill="var(--fill-0, #E6A83E)" id="Vector_54" />
          <path d={svgPaths.pad12e00} fill="var(--fill-0, #E6A83E)" id="Vector_55" />
          <path d={svgPaths.p2be5d4c0} fill="var(--fill-0, #E29D29)" id="Vector_56" />
          <path d={svgPaths.p313d7880} fill="var(--fill-0, #E6A83E)" id="Vector_57" />
          <path d={svgPaths.p1dd59c80} fill="var(--fill-0, #EAB352)" id="Vector_58" />
          <path d={svgPaths.p15848480} fill="var(--fill-0, #E6A83E)" id="Vector_59" />
          <path d={svgPaths.p3a371880} fill="var(--fill-0, #E29D29)" id="Vector_60" />
          <path d={svgPaths.p19e72400} fill="var(--fill-0, #E6A83E)" id="Vector_61" />
          <path d={svgPaths.p33c38500} fill="var(--fill-0, #E6A83E)" id="Vector_62" />
          <path d={svgPaths.p1170f800} fill="var(--fill-0, #E6A83E)" id="Vector_63" />
          <path d={svgPaths.p3dc02190} fill="var(--fill-0, #E6A83E)" id="Vector_64" />
          <path d={svgPaths.p3f64c180} fill="var(--fill-0, #1B2549)" id="Vector_65" />
          <path d={svgPaths.p3aab6290} fill="var(--fill-0, #1C264C)" id="Vector_66" />
          <path d={svgPaths.p8ba8d80} fill="var(--fill-0, #292A7D)" id="Vector_67" />
          <path d={svgPaths.p2f8ee00} fill="var(--fill-0, #232B70)" id="Vector_68" />
          <path d={svgPaths.p3959c200} fill="var(--fill-0, #1C264C)" id="Vector_69" />
          <path d={svgPaths.p25ae8a00} fill="var(--fill-0, #242C60)" id="Vector_70" />
          <path d={svgPaths.p25c20a00} fill="var(--fill-0, #1C264C)" id="Vector_71" />
          <path d={svgPaths.p18af3c70} fill="var(--fill-0, #1C264C)" id="Vector_72" />
          <path d={svgPaths.p39c69e00} fill="var(--fill-0, #232B70)" id="Vector_73" />
          <path d={svgPaths.p2d147980} fill="var(--fill-0, #1C264C)" id="Vector_74" />
          <path d={svgPaths.p18194b80} fill="var(--fill-0, #1B2549)" id="Vector_75" />
          <path d={svgPaths.p20053500} fill="var(--fill-0, #1B2549)" id="Vector_76" />
          <path d={svgPaths.p2e2c3a20} fill="var(--fill-0, #1B2549)" id="Vector_77" />
          <path d={svgPaths.p18377e80} fill="var(--fill-0, #1B2549)" id="Vector_78" />
          <path d={svgPaths.p212400} fill="var(--fill-0, #1B2549)" id="Vector_79" />
          <path d={svgPaths.p2c8ec000} fill="var(--fill-0, #1B2549)" id="Vector_80" />
          <path d={svgPaths.p18aed680} fill="var(--fill-0, #1B2549)" id="Vector_81" />
          <path d={svgPaths.p11e1d480} fill="var(--fill-0, #1B2549)" id="Vector_82" />
          <path d={svgPaths.p22f6ac00} fill="var(--fill-0, #1B2549)" id="Vector_83" />
          <path d={svgPaths.p1d1454f0} fill="var(--fill-0, #1B2549)" id="Vector_84" />
          <path d={svgPaths.p167e8500} fill="var(--fill-0, #292A7D)" id="Vector_85" />
          <path d={svgPaths.p3ece58f0} fill="var(--fill-0, #232B70)" id="Vector_86" />
          <path d={svgPaths.p28fd2300} fill="var(--fill-0, #242C60)" id="Vector_87" />
          <path d={svgPaths.p3340d9c0} fill="var(--fill-0, #242C60)" id="Vector_88" />
          <path d={svgPaths.p3636c500} fill="var(--fill-0, #1B2549)" id="Vector_89" />
          <path d={svgPaths.p5014900} fill="var(--fill-0, #71718A)" id="Vector_90" />
          <path d={svgPaths.p20d62400} fill="var(--fill-0, #1D274F)" id="Vector_91" />
          <path d={svgPaths.p1612f900} fill="var(--fill-0, #1D274F)" id="Vector_92" />
          <path d={svgPaths.p31de67f0} fill="var(--fill-0, #EAB352)" id="Vector_93" />
          <path d={svgPaths.p3bc560f0} fill="var(--fill-0, #1B2549)" id="Vector_94" />
          <path d={svgPaths.p1222b400} fill="var(--fill-0, #1B2549)" id="Vector_95" />
          <path d={svgPaths.p1e86c100} fill="var(--fill-0, #1C264C)" id="Vector_96" />
          <path d={svgPaths.p22cb1b40} fill="var(--fill-0, #242C60)" id="Vector_97" />
          <path d={svgPaths.p1fc72080} fill="var(--fill-0, #242C60)" id="Vector_98" />
          <path d={svgPaths.p335a9eb0} fill="var(--fill-0, #1C264C)" id="Vector_99" />
          <path d={svgPaths.p1f3e400} fill="var(--fill-0, #1C264C)" id="Vector_100" />
          <path d={svgPaths.p3206b700} fill="var(--fill-0, #1C264C)" id="Vector_101" />
          <path d={svgPaths.p5f70d00} fill="var(--fill-0, #1C264C)" id="Vector_102" />
          <path d={svgPaths.p13e42400} fill="var(--fill-0, #1C264C)" id="Vector_103" />
          <path d={svgPaths.p1232a600} fill="var(--fill-0, #1C264C)" id="Vector_104" />
          <path d={svgPaths.p35d52200} fill="var(--fill-0, #1C264C)" id="Vector_105" />
          <path d={svgPaths.p17eaac00} fill="var(--fill-0, #1C264C)" id="Vector_106" />
          <path d={svgPaths.p28f1c100} fill="var(--fill-0, #1C264C)" id="Vector_107" />
          <path d={svgPaths.p143b2980} fill="var(--fill-0, #232B70)" id="Vector_108" />
          <path d={svgPaths.p6de1000} fill="var(--fill-0, #242C60)" id="Vector_109" />
          <path d={svgPaths.p3cf9a300} fill="var(--fill-0, #1C264C)" id="Vector_110" />
          <path d={svgPaths.p28521680} fill="var(--fill-0, #1C264C)" id="Vector_111" />
          <path d={svgPaths.p25b29f00} fill="var(--fill-0, #1C264C)" id="Vector_112" />
          <path d={svgPaths.p781ee00} fill="var(--fill-0, #242C60)" id="Vector_113" />
          <path d={svgPaths.p5a26600} fill="var(--fill-0, #E6A83E)" id="Vector_114" />
          <path d={svgPaths.p336e3d80} fill="var(--fill-0, #E6A83E)" id="Vector_115" />
          <path d={svgPaths.p1b6ce300} fill="var(--fill-0, #E8B04C)" id="Vector_116" />
          <path d={svgPaths.p3f442300} fill="var(--fill-0, #242C60)" id="Vector_117" />
          <path d={svgPaths.pb0fee00} fill="var(--fill-0, #1B2549)" id="Vector_118" />
          <path d={svgPaths.p37861900} fill="var(--fill-0, #242C60)" id="Vector_119" />
          <path d={svgPaths.p32ff8100} fill="var(--fill-0, #1B2549)" id="Vector_120" />
          <path d={svgPaths.p88a6e00} fill="var(--fill-0, #1B2549)" id="Vector_121" />
          <path d={svgPaths.p262bdbf0} fill="var(--fill-0, #1B2549)" id="Vector_122" />
          <path d={svgPaths.p1d495780} fill="var(--fill-0, #1B2549)" id="Vector_123" />
          <path d={svgPaths.p22782e00} fill="var(--fill-0, #1B2549)" id="Vector_124" />
          <path d={svgPaths.p1ed89700} fill="var(--fill-0, #1B2549)" id="Vector_125" />
          <path d={svgPaths.p32e6e400} fill="var(--fill-0, #1B2549)" id="Vector_126" />
          <path d={svgPaths.ped2e300} fill="var(--fill-0, #1B2549)" id="Vector_127" />
          <path d={svgPaths.p2ac6b2b0} fill="var(--fill-0, #1B2549)" id="Vector_128" />
          <path d={svgPaths.p39d23f80} fill="var(--fill-0, #1B2549)" id="Vector_129" />
          <path d={svgPaths.p500f180} fill="var(--fill-0, #1B2549)" id="Vector_130" />
          <path d={svgPaths.p15a75080} fill="var(--fill-0, #1B2549)" id="Vector_131" />
          <path d={svgPaths.p307a6800} fill="var(--fill-0, #292A7D)" id="Vector_132" />
          <path d={svgPaths.p24686a00} fill="var(--fill-0, #1C264C)" id="Vector_133" />
          <path d={svgPaths.p13a73100} fill="var(--fill-0, #EAB352)" id="Vector_134" />
          <path d={svgPaths.p2b6b9ef0} fill="var(--fill-0, #242C60)" id="Vector_135" />
          <path d={svgPaths.p36f56070} fill="var(--fill-0, #1C264C)" id="Vector_136" />
          <path d={svgPaths.pf18f00} fill="var(--fill-0, #1C264C)" id="Vector_137" />
          <path d={svgPaths.p117cf100} fill="var(--fill-0, #1C264C)" id="Vector_138" />
          <path d={svgPaths.pd68ab00} fill="var(--fill-0, #E6A83E)" id="Vector_139" />
          <path d={svgPaths.p11450400} fill="var(--fill-0, #1D274F)" id="Vector_140" />
          <path d={svgPaths.p3643880} fill="var(--fill-0, #1B2549)" id="Vector_141" />
          <path d={svgPaths.p37b1d780} fill="var(--fill-0, #E6A83E)" id="Vector_142" />
          <path d={svgPaths.p34b54000} fill="var(--fill-0, #E6A83E)" id="Vector_143" />
          <path d={svgPaths.p3583b400} fill="var(--fill-0, #E6A83E)" id="Vector_144" />
          <path d={svgPaths.p2f195f00} fill="var(--fill-0, #1D274F)" id="Vector_145" />
          <path d={svgPaths.p24241b80} fill="var(--fill-0, #1B2549)" id="Vector_146" />
          <path d={svgPaths.p336f0d00} fill="var(--fill-0, #1B2549)" id="Vector_147" />
          <path d={svgPaths.p3b148700} fill="var(--fill-0, #1C264C)" id="Vector_148" />
          <path d={svgPaths.p17d58e80} fill="var(--fill-0, #1B2549)" id="Vector_149" />
          <path d={svgPaths.p376f900} fill="var(--fill-0, #1B2549)" id="Vector_150" />
          <path d={svgPaths.pe87c0f0} fill="var(--fill-0, #1B2549)" id="Vector_151" />
          <path d={svgPaths.p9a31200} fill="var(--fill-0, #1B2549)" id="Vector_152" />
          <path d={svgPaths.p3c280100} fill="var(--fill-0, #1B2549)" id="Vector_153" />
          <path d={svgPaths.p6a4c300} fill="var(--fill-0, #1B2549)" id="Vector_154" />
          <path d={svgPaths.p374e46c0} fill="var(--fill-0, #1B2549)" id="Vector_155" />
          <path d={svgPaths.p9f8e980} fill="var(--fill-0, #1D274F)" id="Vector_156" />
          <path d={svgPaths.p28b1a700} fill="var(--fill-0, #1B2549)" id="Vector_157" />
          <path d={svgPaths.p2ec39470} fill="var(--fill-0, #EAB352)" id="Vector_158" />
          <path d={svgPaths.p2327ed80} fill="var(--fill-0, #1D274F)" id="Vector_159" />
          <path d={svgPaths.p240ac080} fill="var(--fill-0, #1D274F)" id="Vector_160" />
          <path d={svgPaths.pc323200} fill="var(--fill-0, #1C264C)" id="Vector_161" />
          <path d={svgPaths.p1c2a0380} fill="var(--fill-0, #1C264C)" id="Vector_162" />
          <path d={svgPaths.p15f80f80} fill="var(--fill-0, #1D274F)" id="Vector_163" />
          <path d={svgPaths.p14818fb0} fill="var(--fill-0, #1B2549)" id="Vector_164" />
          <path d={svgPaths.p11c50180} fill="var(--fill-0, #232B70)" id="Vector_165" />
          <path d={svgPaths.p129d0680} fill="var(--fill-0, #242C60)" id="Vector_166" />
          <path d={svgPaths.p355a9700} fill="var(--fill-0, #232B70)" id="Vector_167" />
          <path d={svgPaths.p21c01500} fill="var(--fill-0, #292A7D)" id="Vector_168" />
          <path d={svgPaths.p3313cd00} fill="var(--fill-0, #1D274F)" id="Vector_169" />
          <path d={svgPaths.p19ed3e00} fill="var(--fill-0, #232B70)" id="Vector_170" />
          <path d={svgPaths.pa129d00} fill="var(--fill-0, #1D274F)" id="Vector_171" />
          <path d={svgPaths.p3daa6500} fill="var(--fill-0, #1D274F)" id="Vector_172" />
          <path d={svgPaths.p235f00} fill="var(--fill-0, #232B70)" id="Vector_173" />
          <path d={svgPaths.p14cb04f0} fill="var(--fill-0, #1D274F)" id="Vector_174" />
          <path d={svgPaths.p129b9380} fill="var(--fill-0, #EAB352)" id="Vector_175" />
          <path d={svgPaths.p23f1d080} fill="var(--fill-0, #1B2549)" id="Vector_176" />
          <path d={svgPaths.p3c97e500} fill="var(--fill-0, #EAB352)" id="Vector_177" />
          <path d={svgPaths.pd556200} fill="var(--fill-0, #232B70)" id="Vector_178" />
          <path d={svgPaths.p15bd3a80} fill="var(--fill-0, #EAB352)" id="Vector_179" />
          <path d={svgPaths.p70b3404} fill="var(--fill-0, #EAB352)" id="Vector_180" />
          <path d={svgPaths.p1316c380} fill="var(--fill-0, #EAB352)" id="Vector_181" />
          <path d={svgPaths.p2b14280} fill="var(--fill-0, #FCFCFC)" id="Vector_182" />
          <path d={svgPaths.p3ab4c200} fill="var(--fill-0, #FCFCFC)" id="Vector_183" />
          <path d={svgPaths.p2f9a200} fill="var(--fill-0, #FCFCFC)" id="Vector_184" />
          <path d={svgPaths.p163c2800} fill="var(--fill-0, #1D274F)" id="Vector_185" />
          <path d={svgPaths.p1d17ce30} fill="var(--fill-0, #182143)" id="Vector_186" />
          <path d={svgPaths.p3b575a00} fill="var(--fill-0, #182143)" id="Vector_187" />
          <path d={svgPaths.p486ee00} fill="var(--fill-0, #1B2549)" id="Vector_188" />
          <path d={svgPaths.p1d910380} fill="var(--fill-0, #292A7D)" id="Vector_189" />
          <path d={svgPaths.p2dcc8f0} fill="var(--fill-0, #1C264C)" id="Vector_190" />
          <path d={svgPaths.p265f8e00} fill="var(--fill-0, #FCFCFC)" id="Vector_191" />
          <path d={svgPaths.pceb79f0} fill="var(--fill-0, #FCFCFC)" id="Vector_192" />
          <path d={svgPaths.p396abe00} fill="var(--fill-0, #FCFCFC)" id="Vector_193" />
          <path d={svgPaths.p9a4d200} fill="var(--fill-0, #F5EFF3)" id="Vector_194" />
          <path d={svgPaths.p61db780} fill="var(--fill-0, #182143)" id="Vector_195" />
          <path d={svgPaths.p8a7380} fill="var(--fill-0, #1D274F)" id="Vector_196" />
          <path d={svgPaths.p124b2380} fill="var(--fill-0, #182143)" id="Vector_197" />
          <path d={svgPaths.p22309800} fill="var(--fill-0, #182143)" id="Vector_198" />
          <path d={svgPaths.p3c6b080} fill="var(--fill-0, #292A7D)" id="Vector_199" />
          <path d={svgPaths.p3025fd80} fill="var(--fill-0, #182143)" id="Vector_200" />
          <path d={svgPaths.pacdac80} fill="var(--fill-0, #292A7D)" id="Vector_201" />
          <path d={svgPaths.p22d0d000} fill="var(--fill-0, #161E3C)" id="Vector_202" />
          <path d={svgPaths.p151ee700} fill="var(--fill-0, #1C264C)" id="Vector_203" />
          <path d={svgPaths.p2897c6e0} fill="var(--fill-0, #232B70)" id="Vector_204" />
          <path d={svgPaths.p41a7df0} fill="var(--fill-0, #1C264C)" id="Vector_205" />
          <path d={svgPaths.p6098f00} fill="var(--fill-0, #1C264C)" id="Vector_206" />
          <path d={svgPaths.p11e8e100} fill="var(--fill-0, #1C264C)" id="Vector_207" />
          <path d={svgPaths.p27ac7e00} fill="var(--fill-0, #1C264C)" id="Vector_208" />
          <path d={svgPaths.pf19d400} fill="var(--fill-0, #1C264C)" id="Vector_209" />
          <path d={svgPaths.p3ec22680} fill="var(--fill-0, #1C264C)" id="Vector_210" />
          <path d={svgPaths.p3495df00} fill="var(--fill-0, #1C264C)" id="Vector_211" />
          <path d={svgPaths.p10eb5f00} fill="var(--fill-0, #1C264C)" id="Vector_212" />
          <path d={svgPaths.p1a4ea600} fill="var(--fill-0, #1C264C)" id="Vector_213" />
          <path d={svgPaths.p1ea3eb00} fill="var(--fill-0, #1C264C)" id="Vector_214" />
          <path d={svgPaths.p229c4c00} fill="var(--fill-0, #FCFCFC)" id="Vector_215" />
          <path d={svgPaths.p22edae80} fill="var(--fill-0, #182143)" id="Vector_216" />
          <path d={svgPaths.p181ca400} fill="var(--fill-0, #161E3C)" id="Vector_217" />
          <path d={svgPaths.p353c4a80} fill="var(--fill-0, #1B2549)" id="Vector_218" />
          <path d={svgPaths.p19cf2300} fill="var(--fill-0, #182143)" id="Vector_219" />
          <path d={svgPaths.p12622800} fill="var(--fill-0, #292A7D)" id="Vector_220" />
          <path d={svgPaths.p361d5600} fill="var(--fill-0, #182143)" id="Vector_221" />
          <path d={svgPaths.p323bcb00} fill="var(--fill-0, #292A7D)" id="Vector_222" />
          <path d={svgPaths.p2d33b4f2} fill="var(--fill-0, #161E3C)" id="Vector_223" />
          <path d={svgPaths.p21ef100} fill="var(--fill-0, #161E3C)" id="Vector_224" />
          <path d={svgPaths.p371ef100} fill="var(--fill-0, #71718A)" id="Vector_225" />
          <path d={svgPaths.pb919c00} fill="var(--fill-0, #161E3C)" id="Vector_226" />
          <path d={svgPaths.p7ed3380} fill="var(--fill-0, #161E3C)" id="Vector_227" />
          <path d={svgPaths.p2c3d6a80} fill="var(--fill-0, #161E3C)" id="Vector_228" />
          <path d={svgPaths.p12224800} fill="var(--fill-0, #242C60)" id="Vector_229" />
          <path d={svgPaths.p32d72400} fill="var(--fill-0, #182143)" id="Vector_230" />
          <path d={svgPaths.p3f9fbc80} fill="var(--fill-0, #232B70)" id="Vector_231" />
          <path d={svgPaths.p2e22df80} fill="var(--fill-0, #292A7D)" id="Vector_232" />
          <path d={svgPaths.p310080d0} fill="var(--fill-0, #232B70)" id="Vector_233" />
          <path d={svgPaths.p33f59100} fill="var(--fill-0, #161E3C)" id="Vector_234" />
          <path d={svgPaths.p2efff00} fill="var(--fill-0, #1D274F)" id="Vector_235" />
          <path d={svgPaths.p4de2500} fill="var(--fill-0, #182143)" id="Vector_236" />
          <path d={svgPaths.p2434a000} fill="var(--fill-0, #1D274F)" id="Vector_237" />
          <path d={svgPaths.p2ab0f8b0} fill="var(--fill-0, #1D274F)" id="Vector_238" />
          <path d={svgPaths.p5e95900} fill="var(--fill-0, #1D274F)" id="Vector_239" />
          <path d={svgPaths.p17de0580} fill="var(--fill-0, #182143)" id="Vector_240" />
          <path d={svgPaths.p284bd80} fill="var(--fill-0, #1D274F)" id="Vector_241" />
          <path d={svgPaths.p74ac0f2} fill="var(--fill-0, #1C264C)" id="Vector_242" />
          <path d={svgPaths.p3383ac80} fill="var(--fill-0, #182143)" id="Vector_243" />
          <path d={svgPaths.p2aba9870} fill="var(--fill-0, #242C60)" id="Vector_244" />
          <path d={svgPaths.p2880ac0} fill="var(--fill-0, #1D274F)" id="Vector_245" />
          <path d={svgPaths.p12cdef00} fill="var(--fill-0, #1B2549)" id="Vector_246" />
          <path d={svgPaths.p16245f00} fill="var(--fill-0, #1C264C)" id="Vector_247" />
          <path d={svgPaths.p35684a00} fill="var(--fill-0, #1C264C)" id="Vector_248" />
          <path d={svgPaths.p3553a300} fill="var(--fill-0, #1C264C)" id="Vector_249" />
          <path d={svgPaths.p2be80000} fill="var(--fill-0, #292A7D)" id="Vector_250" />
          <path d={svgPaths.p3d069980} fill="var(--fill-0, #242C60)" id="Vector_251" />
          <path d={svgPaths.p1707c0c0} fill="var(--fill-0, #71718A)" id="Vector_252" />
          <path d={svgPaths.p13a52e00} fill="var(--fill-0, #232B70)" id="Vector_253" />
          <path d={svgPaths.p3e2a7500} fill="var(--fill-0, #F5EFF3)" id="Vector_254" />
          <path d={svgPaths.p32449280} fill="var(--fill-0, #F5EFF3)" id="Vector_255" />
          <path d={svgPaths.p1bfe6200} fill="var(--fill-0, #182143)" id="Vector_256" />
          <path d={svgPaths.pad7db80} fill="var(--fill-0, #182143)" id="Vector_257" />
          <path d={svgPaths.p37e25780} fill="var(--fill-0, #1C264C)" id="Vector_258" />
          <path d={svgPaths.p3ce54e80} fill="var(--fill-0, #182143)" id="Vector_259" />
          <path d={svgPaths.p10c9eb00} fill="var(--fill-0, #F5EFF3)" id="Vector_260" />
          <path d={svgPaths.p38abca00} fill="var(--fill-0, #1C264C)" id="Vector_261" />
          <path d={svgPaths.p9c8ea00} fill="var(--fill-0, #1C264C)" id="Vector_262" />
          <path d={svgPaths.p28434500} fill="var(--fill-0, #1C264C)" id="Vector_263" />
          <path d={svgPaths.p22f7d080} fill="var(--fill-0, #F5EFF3)" id="Vector_264" />
          <path d={svgPaths.p1d06df00} fill="var(--fill-0, #161E3C)" id="Vector_265" />
          <path d={svgPaths.p2424c880} fill="var(--fill-0, #71718A)" id="Vector_266" />
          <path d={svgPaths.p3fd67ff0} fill="var(--fill-0, #242C60)" id="Vector_267" />
          <path d={svgPaths.p19a1d6f0} fill="var(--fill-0, #1C264C)" id="Vector_268" />
          <path d={svgPaths.p3d91a900} fill="var(--fill-0, #1C264C)" id="Vector_269" />
          <path d={svgPaths.p23e4a500} fill="var(--fill-0, #1C264C)" id="Vector_270" />
          <path d={svgPaths.p181c0900} fill="var(--fill-0, #182143)" id="Vector_271" />
          <path d={svgPaths.p1c8a3a80} fill="var(--fill-0, #161E3C)" id="Vector_272" />
          <path d={svgPaths.p72d9c00} fill="var(--fill-0, #161E3C)" id="Vector_273" />
          <path d={svgPaths.p10570080} fill="var(--fill-0, #182143)" id="Vector_274" />
          <path d={svgPaths.pf1f9e00} fill="var(--fill-0, #161E3C)" id="Vector_275" />
          <path d={svgPaths.p21ba7100} fill="var(--fill-0, #F5EFF3)" id="Vector_276" />
          <path d={svgPaths.p17f63100} fill="var(--fill-0, #F5EFF3)" id="Vector_277" />
          <path d={svgPaths.p3e818c80} fill="var(--fill-0, #1B2549)" id="Vector_278" />
          <path d={svgPaths.p34e81180} fill="var(--fill-0, #1B2549)" id="Vector_279" />
          <path d={svgPaths.p35903a00} fill="var(--fill-0, #1B2549)" id="Vector_280" />
          <path d={svgPaths.p275d9d00} fill="var(--fill-0, #F5EFF3)" id="Vector_281" />
          <path d={svgPaths.p1f6ae900} fill="var(--fill-0, #EAB352)" id="Vector_282" />
          <path d={svgPaths.p33916500} fill="var(--fill-0, #E8B04C)" id="Vector_283" />
          <path d={svgPaths.p25395f00} fill="var(--fill-0, #E6A83E)" id="Vector_284" />
          <path d={svgPaths.p36399280} fill="var(--fill-0, #1B2549)" id="Vector_285" />
          <path d={svgPaths.p5f89df2} fill="var(--fill-0, #E6A83E)" id="Vector_286" />
          <path d={svgPaths.p58d3f00} fill="var(--fill-0, #FCFCFC)" id="Vector_287" />
          <path d={svgPaths.p2f12e400} fill="var(--fill-0, #F5EFF3)" id="Vector_288" />
          <path d={svgPaths.peeae500} fill="var(--fill-0, #F5EFF3)" id="Vector_289" />
          <path d={svgPaths.p1a10edf0} fill="var(--fill-0, #F5EFF3)" id="Vector_290" />
          <path d={svgPaths.pa18c100} fill="var(--fill-0, #1D274F)" id="Vector_291" />
          <path d={svgPaths.p3264cf60} fill="var(--fill-0, #F5EFF3)" id="Vector_292" />
          <path d={svgPaths.pd725300} fill="var(--fill-0, #1C264C)" id="Vector_293" />
          <path d={svgPaths.p2b478c80} fill="var(--fill-0, #182143)" id="Vector_294" />
          <path d={svgPaths.p38dd5900} fill="var(--fill-0, #1C264C)" id="Vector_295" />
          <path d={svgPaths.p2a603b00} fill="var(--fill-0, #1C264C)" id="Vector_296" />
          <path d={svgPaths.p36cd44c0} fill="var(--fill-0, #182143)" id="Vector_297" />
          <path d={svgPaths.pde2f880} fill="var(--fill-0, #182143)" id="Vector_298" />
          <path d={svgPaths.p35ca9880} fill="var(--fill-0, #E29D29)" id="Vector_299" />
          <path d={svgPaths.p1063ba00} fill="var(--fill-0, #E8B04C)" id="Vector_300" />
          <path d={svgPaths.pdc64a80} fill="var(--fill-0, #E29D29)" id="Vector_301" />
          <path d={svgPaths.p25ccf100} fill="var(--fill-0, #182143)" id="Vector_302" />
          <path d={svgPaths.p1fd86100} fill="var(--fill-0, #E8B04C)" id="Vector_303" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-0 top-[52px]" data-name="header">
      <div className="absolute bg-white h-[60px] left-0 top-[52px] w-[480px]" data-name="Header" />
      <div className="absolute inset-[4.1%_4.79%_94.44%_90%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <path d={svgPaths.p31c31000} id="Vector" stroke="var(--stroke-0, #33336C)" />
        </svg>
      </div>
      <div className="absolute bg-[#333] h-[18px] left-[419px] rounded-[9px] top-[62px] w-[25px]" data-name="Search bar" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[427px] not-italic text-[15px] text-white top-[71.5px] tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[13px]">0</p>
      </div>
      <Logo />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute contents left-0 top-[1135px]" data-name="Container">
      <div className="absolute flex h-[64.289px] items-center justify-center left-0 top-[1397.71px] w-[480px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white h-[64.289px] relative shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.25)] w-[480px]" data-name="Sub-background" />
        </div>
      </div>
      <div className="absolute bg-white h-[327px] left-0 shadow-[0px_-4px_4px_-4px_rgba(0,0,0,0.25)] top-[1135px] w-[480px]" data-name="Background" />
    </div>
  );
}

function InfoLinksContainer() {
  return (
    <div className="absolute contents left-[30px] top-[1352px]" data-name="Info links container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[219px] text-[#737373] text-[12px] top-[1413px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">이용약관</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[62px] text-[#737373] text-[12px] top-[1413px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">문의 게시판</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[54px] text-[#737373] text-[12px] top-[1369px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">자주 묻는 질문</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[212px] text-[#737373] text-[12px] top-[1369px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">서비스 소개</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[374px] text-[#737373] text-[12px] top-[1369px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">확률표</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[348px] text-[#737373] text-[12px] top-[1413px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">개인정보처리방침</p>
      </div>
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[30px] top-[1352px] w-[120px]" data-name="FAQ button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[180px] top-[1352px] w-[120px]" data-name="Service introduction button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[330px] top-[1352px] w-[120px]" data-name="Odds table button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[30px] top-[1396px] w-[120px]" data-name="Inquiries button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[180px] top-[1396px] w-[120px]" data-name="Terms of service button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[330px] top-[1396px] w-[120px]" data-name="Privacy policy button" />
    </div>
  );
}

export default function PointPage({ points = 0 }: { points?: number }) {
  return (
    <div className="bg-white relative size-full" data-name="/point_page">
      <div className="absolute bg-[#f5f5f5] h-[126px] left-[22px] rounded-[12px] top-[202px] w-[435px]" data-name="Points container" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[411px] text-[#020202] text-[13px] text-center top-[368px] tracking-[-0.52px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">사용 내역</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[239.5px] text-[#ddd] text-[13px] text-center top-[684px] tracking-[0.26px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">내역이 없습니다.</p>
      </div>
      <div className="absolute h-[4.5px] left-[444.5px] top-[366px] w-[9px]">
        <div className="absolute inset-[-7.86%_-3.93%_-15.71%_-3.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.70711 5.56066">
            <path d={svgPaths.p6cd6900} id="Vector 1" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <RechargeButtonContainer />
      <MyPointsContainer points={points} />
      <BackgroundHorizontalBorder />
      <HeadBanner />
      <div className="-translate-x-1/2 absolute bg-[#ececec] h-px left-1/2 top-[111px] w-[480px]" data-name="Border" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">이용방법</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[220px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">리뷰</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[143px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">랭킹</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[297px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">이벤트</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[387px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">공지사항</p>
      </div>
      <Header />
      <div className="absolute border border-[#eaeaea] border-solid h-[50px] left-0 top-[112px] w-[480px]" data-name="Banner background" />
      <Container5 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[1214px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">고객센터 : centbox_cs@gmail.com</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[1237px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">운영시간 : 13:00 ~ 17:00 / 공휴일 휴무</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[1260px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">{`계좌번호 : `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[1283px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">반송주소 : 경상남도 김해시 대청로104번길 27-31 1층</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[29px] text-[#3e3e3e] text-[12px] top-[1334px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">고객지원</p>
      </div>
      <InfoLinksContainer />
      <div className="absolute h-[34px] left-[29px] top-[1161px] w-[113px]" data-name="ChatGPT Image 2026년 6월 16일 오후 01_43_49 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.47%] left-[-2.67%] max-w-none top-[-8.86%] w-[104.81%]" src={imgChatGptImage20266160143494} />
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1497px] whitespace-nowrap">
        <p className="leading-[normal]">주식회사 투베이스 ㅣ 센트박스</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1519px] whitespace-nowrap">
        <p className="leading-[normal]">대표자 : 최승연</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1540px] whitespace-nowrap">
        <p className="leading-[normal]">사업자등록번호 : 288-88-03513</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1562px] whitespace-nowrap">
        <p className="leading-[normal]">{`통신판매업 : 2026-김해장유-0206 `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1583px] tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[normal]">사업장소재지 : 경상남도 김해시 대청로104번길 27-31 1층</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1604px] tracking-[-0.12px] w-[275px]">
        <p className="leading-[normal]">COPYRIGHT : 2026 투베이스</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[200px] not-italic text-[#959595] text-[12px] top-[1540px] whitespace-nowrap">
        <p className="leading-[normal]">사업자정보확인</p>
      </div>
    </div>
  );
}
