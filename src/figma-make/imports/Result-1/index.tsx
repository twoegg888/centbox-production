import svgPaths from "./svg-st22cnlbjt";
import imgChatGptImage20266160143493 from "./72e815220b7894bd5647ce2ae0a81e7daab3ff29.png";

function ViewAllContainer() {
  return (
    <div className="absolute contents left-[415px] top-[241px]" data-name="View all container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[427.5px] not-italic text-[#020202] text-[13px] text-center top-[249px] tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[normal]">전체</p>
      </div>
      <div className="absolute h-[4.5px] left-[446.5px] top-[247px] w-[9px]">
        <div className="absolute inset-[-7.86%_-3.93%_-15.71%_-3.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.70711 5.56066">
            <path d={svgPaths.p6cd6900} id="Vector 1" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StockContainer() {
  return (
    <div className="absolute contents left-[24px] top-[241px]" data-name="Stock container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[41px] not-italic text-[#020202] text-[13px] text-center top-[249px] tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[normal]">총 1개</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[20.8px]">발급 완료</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[15px] pt-[14px] px-[2px] relative shrink-0" data-name="Button">
      <Container />
      <div className="absolute bg-black bottom-px h-[2px] left-0 right-0" data-name="Horizontal Divider" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[15.125px] text-center whitespace-nowrap">
        <p className="leading-[20.8px]">거래소 등록</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[15px] pt-[14px] px-[2px] relative shrink-0" data-name="Button">
      <Container1 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white h-[48.02px] left-0 right-0 top-[162px]" data-name="Nav">
      <div className="content-stretch flex gap-[16px] items-center overflow-x-auto overflow-y-clip px-[24px] relative rounded-[inherit] size-full">
        <Button />
        <Button1 />
      </div>
      <div aria-hidden className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none" />
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

function Container2() {
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
          <path d={svgPaths.p25895e80} fill="var(--fill-0, #020202)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020202] text-[9.375px] whitespace-nowrap">
        <p className="leading-[13px]">당첨 내역</p>
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

function Container3() {
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

function Container4() {
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
          <path d={svgPaths.pace200} fill="var(--fill-0, #DDDDDD)" id="Vector" />
          <path d={svgPaths.p3b299900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[9.375px] whitespace-nowrap">
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

function Container5() {
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

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[96px]" data-name="Container">
      <Link4 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex h-[64px] items-center justify-center left-0 right-0 top-[calc(50%+685.5px)]" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
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
    <div className="absolute inset-[4.81%_76.04%_93.37%_5.42%]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 26.1203">
        <g id="Logo">
          <path d={svgPaths.p3a480600} fill="var(--fill-0, #EAB352)" id="Vector" />
          <path d={svgPaths.p3d88b200} fill="var(--fill-0, #E8B04C)" id="Vector_2" />
          <path d={svgPaths.pfead150} fill="var(--fill-0, #EAB352)" id="Vector_3" />
          <path d={svgPaths.p1a444200} fill="var(--fill-0, #EAB352)" id="Vector_4" />
          <path d={svgPaths.p5bdb80} fill="var(--fill-0, #E29D29)" id="Vector_5" />
          <path d={svgPaths.p5d31400} fill="var(--fill-0, #E6A83E)" id="Vector_6" />
          <path d={svgPaths.p11a4f600} fill="var(--fill-0, #E29D29)" id="Vector_7" />
          <path d={svgPaths.p16fd2d32} fill="var(--fill-0, #EAB352)" id="Vector_8" />
          <path d={svgPaths.p20a88300} fill="var(--fill-0, #E29D29)" id="Vector_9" />
          <path d={svgPaths.p1d66e000} fill="var(--fill-0, #EAB352)" id="Vector_10" />
          <path d={svgPaths.pa30d700} fill="var(--fill-0, #E8B04C)" id="Vector_11" />
          <path d={svgPaths.p7100700} fill="var(--fill-0, #E29D29)" id="Vector_12" />
          <path d={svgPaths.p2e42b400} fill="var(--fill-0, #E6A83E)" id="Vector_13" />
          <path d={svgPaths.p22524280} fill="var(--fill-0, #1D274F)" id="Vector_14" />
          <path d={svgPaths.p1dc66f00} fill="var(--fill-0, #E29D29)" id="Vector_15" />
          <path d={svgPaths.p712580} fill="var(--fill-0, #EAB352)" id="Vector_16" />
          <path d={svgPaths.p110fe600} fill="var(--fill-0, #E6A83E)" id="Vector_17" />
          <path d={svgPaths.p24b23b00} fill="var(--fill-0, #EAB352)" id="Vector_18" />
          <path d={svgPaths.p1df2ba00} fill="var(--fill-0, #E8B04C)" id="Vector_19" />
          <path d={svgPaths.p2d32df40} fill="var(--fill-0, #EAB352)" id="Vector_20" />
          <path d={svgPaths.pb671700} fill="var(--fill-0, #E6A83E)" id="Vector_21" />
          <path d={svgPaths.pbfbf230} fill="var(--fill-0, #E8B04C)" id="Vector_22" />
          <path d={svgPaths.p1abb5600} fill="var(--fill-0, #EAB352)" id="Vector_23" />
          <path d={svgPaths.p82fb280} fill="var(--fill-0, #EAB352)" id="Vector_24" />
          <path d={svgPaths.p377b5800} fill="var(--fill-0, #E6A83E)" id="Vector_25" />
          <path d={svgPaths.p4231700} fill="var(--fill-0, #E8B04C)" id="Vector_26" />
          <path d={svgPaths.p2da14600} fill="var(--fill-0, #E6A83E)" id="Vector_27" />
          <path d={svgPaths.p1a3daf00} fill="var(--fill-0, #EAB352)" id="Vector_28" />
          <path d={svgPaths.pba168f0} fill="var(--fill-0, #1D274F)" id="Vector_29" />
          <path d={svgPaths.p3b8b9970} fill="var(--fill-0, #E6A83E)" id="Vector_30" />
          <path d={svgPaths.p2acc86a0} fill="var(--fill-0, #E6A83E)" id="Vector_31" />
          <path d={svgPaths.p1055d70} fill="var(--fill-0, #E29D29)" id="Vector_32" />
          <path d={svgPaths.p3022680} fill="var(--fill-0, #E8B04C)" id="Vector_33" />
          <path d={svgPaths.p16b33e00} fill="var(--fill-0, #E8B04C)" id="Vector_34" />
          <path d={svgPaths.p3c638600} fill="var(--fill-0, #E6A83E)" id="Vector_35" />
          <path d={svgPaths.pb3d73f2} fill="var(--fill-0, #E8B04C)" id="Vector_36" />
          <path d={svgPaths.p310a3e70} fill="var(--fill-0, #E8B04C)" id="Vector_37" />
          <path d={svgPaths.p2e053200} fill="var(--fill-0, #EAB352)" id="Vector_38" />
          <path d={svgPaths.p151b7c00} fill="var(--fill-0, #E6A83E)" id="Vector_39" />
          <path d={svgPaths.p20f23b00} fill="var(--fill-0, #E29D29)" id="Vector_40" />
          <path d={svgPaths.p1be2be40} fill="var(--fill-0, #E6A83E)" id="Vector_41" />
          <path d={svgPaths.p19635400} fill="var(--fill-0, #E6A83E)" id="Vector_42" />
          <path d={svgPaths.p25939e00} fill="var(--fill-0, #E29D29)" id="Vector_43" />
          <path d={svgPaths.p13b1a700} fill="var(--fill-0, #E29D29)" id="Vector_44" />
          <path d={svgPaths.p6965100} fill="var(--fill-0, #E29D29)" id="Vector_45" />
          <path d={svgPaths.p1aaa1700} fill="var(--fill-0, #E29D29)" id="Vector_46" />
          <path d={svgPaths.p1f4a9940} fill="var(--fill-0, #E29D29)" id="Vector_47" />
          <path d={svgPaths.p218a0e00} fill="var(--fill-0, #E6A83E)" id="Vector_48" />
          <path d={svgPaths.p22864d00} fill="var(--fill-0, #E29D29)" id="Vector_49" />
          <path d={svgPaths.p651f880} fill="var(--fill-0, #E29D29)" id="Vector_50" />
          <path d={svgPaths.p25f9300} fill="var(--fill-0, #E6A83E)" id="Vector_51" />
          <path d={svgPaths.p21591180} fill="var(--fill-0, #E6A83E)" id="Vector_52" />
          <path d={svgPaths.p1cc01100} fill="var(--fill-0, #E6A83E)" id="Vector_53" />
          <path d={svgPaths.p1e3f8880} fill="var(--fill-0, #E6A83E)" id="Vector_54" />
          <path d={svgPaths.peb44f40} fill="var(--fill-0, #E6A83E)" id="Vector_55" />
          <path d={svgPaths.p2be5d4c0} fill="var(--fill-0, #E29D29)" id="Vector_56" />
          <path d={svgPaths.p26f2e00} fill="var(--fill-0, #E6A83E)" id="Vector_57" />
          <path d={svgPaths.p1dd59c80} fill="var(--fill-0, #EAB352)" id="Vector_58" />
          <path d={svgPaths.p2d578000} fill="var(--fill-0, #E6A83E)" id="Vector_59" />
          <path d={svgPaths.p3a371880} fill="var(--fill-0, #E29D29)" id="Vector_60" />
          <path d={svgPaths.p173d2df0} fill="var(--fill-0, #E6A83E)" id="Vector_61" />
          <path d={svgPaths.pd0b4780} fill="var(--fill-0, #E6A83E)" id="Vector_62" />
          <path d={svgPaths.p1170f800} fill="var(--fill-0, #E6A83E)" id="Vector_63" />
          <path d={svgPaths.p3dc02190} fill="var(--fill-0, #E6A83E)" id="Vector_64" />
          <path d={svgPaths.p3f64c180} fill="var(--fill-0, #1B2549)" id="Vector_65" />
          <path d={svgPaths.p7560e00} fill="var(--fill-0, #1C264C)" id="Vector_66" />
          <path d={svgPaths.p8ba8d80} fill="var(--fill-0, #292A7D)" id="Vector_67" />
          <path d={svgPaths.p3819a480} fill="var(--fill-0, #232B70)" id="Vector_68" />
          <path d={svgPaths.p17666e30} fill="var(--fill-0, #1C264C)" id="Vector_69" />
          <path d={svgPaths.p25ae8a00} fill="var(--fill-0, #242C60)" id="Vector_70" />
          <path d={svgPaths.p25c20a00} fill="var(--fill-0, #1C264C)" id="Vector_71" />
          <path d={svgPaths.p18af3c70} fill="var(--fill-0, #1C264C)" id="Vector_72" />
          <path d={svgPaths.p26d1db80} fill="var(--fill-0, #232B70)" id="Vector_73" />
          <path d={svgPaths.p2d147980} fill="var(--fill-0, #1C264C)" id="Vector_74" />
          <path d={svgPaths.p18194b80} fill="var(--fill-0, #1B2549)" id="Vector_75" />
          <path d={svgPaths.p885c000} fill="var(--fill-0, #1B2549)" id="Vector_76" />
          <path d={svgPaths.p2e2c3a20} fill="var(--fill-0, #1B2549)" id="Vector_77" />
          <path d={svgPaths.pe87ed00} fill="var(--fill-0, #1B2549)" id="Vector_78" />
          <path d={svgPaths.pc7c3200} fill="var(--fill-0, #1B2549)" id="Vector_79" />
          <path d={svgPaths.p2c8ec000} fill="var(--fill-0, #1B2549)" id="Vector_80" />
          <path d={svgPaths.p18aed680} fill="var(--fill-0, #1B2549)" id="Vector_81" />
          <path d={svgPaths.p14feb700} fill="var(--fill-0, #1B2549)" id="Vector_82" />
          <path d={svgPaths.p26ebe200} fill="var(--fill-0, #1B2549)" id="Vector_83" />
          <path d={svgPaths.pcf80c00} fill="var(--fill-0, #1B2549)" id="Vector_84" />
          <path d={svgPaths.p21b1c180} fill="var(--fill-0, #292A7D)" id="Vector_85" />
          <path d={svgPaths.p10cc7c00} fill="var(--fill-0, #232B70)" id="Vector_86" />
          <path d={svgPaths.p28fd2300} fill="var(--fill-0, #242C60)" id="Vector_87" />
          <path d={svgPaths.p1095180} fill="var(--fill-0, #242C60)" id="Vector_88" />
          <path d={svgPaths.p21b2c9e0} fill="var(--fill-0, #1B2549)" id="Vector_89" />
          <path d={svgPaths.p5014900} fill="var(--fill-0, #71718A)" id="Vector_90" />
          <path d={svgPaths.p20d62400} fill="var(--fill-0, #1D274F)" id="Vector_91" />
          <path d={svgPaths.p1612f900} fill="var(--fill-0, #1D274F)" id="Vector_92" />
          <path d={svgPaths.p10935b00} fill="var(--fill-0, #EAB352)" id="Vector_93" />
          <path d={svgPaths.p3bc560f0} fill="var(--fill-0, #1B2549)" id="Vector_94" />
          <path d={svgPaths.p1222b400} fill="var(--fill-0, #1B2549)" id="Vector_95" />
          <path d={svgPaths.p23f9df00} fill="var(--fill-0, #1C264C)" id="Vector_96" />
          <path d={svgPaths.p22cb1b40} fill="var(--fill-0, #242C60)" id="Vector_97" />
          <path d={svgPaths.p18b42170} fill="var(--fill-0, #242C60)" id="Vector_98" />
          <path d={svgPaths.p19a19b00} fill="var(--fill-0, #1C264C)" id="Vector_99" />
          <path d={svgPaths.p1f3e400} fill="var(--fill-0, #1C264C)" id="Vector_100" />
          <path d={svgPaths.p1c6baa70} fill="var(--fill-0, #1C264C)" id="Vector_101" />
          <path d={svgPaths.p1671c900} fill="var(--fill-0, #1C264C)" id="Vector_102" />
          <path d={svgPaths.p13553a00} fill="var(--fill-0, #1C264C)" id="Vector_103" />
          <path d={svgPaths.p1232a600} fill="var(--fill-0, #1C264C)" id="Vector_104" />
          <path d={svgPaths.p35d52200} fill="var(--fill-0, #1C264C)" id="Vector_105" />
          <path d={svgPaths.p11f3a480} fill="var(--fill-0, #1C264C)" id="Vector_106" />
          <path d={svgPaths.p2fb0a700} fill="var(--fill-0, #1C264C)" id="Vector_107" />
          <path d={svgPaths.p265fbb00} fill="var(--fill-0, #232B70)" id="Vector_108" />
          <path d={svgPaths.p6de1000} fill="var(--fill-0, #242C60)" id="Vector_109" />
          <path d={svgPaths.p3cf9a300} fill="var(--fill-0, #1C264C)" id="Vector_110" />
          <path d={svgPaths.p28521680} fill="var(--fill-0, #1C264C)" id="Vector_111" />
          <path d={svgPaths.p3ffdfe70} fill="var(--fill-0, #1C264C)" id="Vector_112" />
          <path d={svgPaths.p781ee00} fill="var(--fill-0, #242C60)" id="Vector_113" />
          <path d={svgPaths.p1df08b00} fill="var(--fill-0, #E6A83E)" id="Vector_114" />
          <path d={svgPaths.p3146d000} fill="var(--fill-0, #E6A83E)" id="Vector_115" />
          <path d={svgPaths.p1c016b80} fill="var(--fill-0, #E8B04C)" id="Vector_116" />
          <path d={svgPaths.p2ef27480} fill="var(--fill-0, #242C60)" id="Vector_117" />
          <path d={svgPaths.p2cd0cf00} fill="var(--fill-0, #1B2549)" id="Vector_118" />
          <path d={svgPaths.p37861900} fill="var(--fill-0, #242C60)" id="Vector_119" />
          <path d={svgPaths.p1b8b46f0} fill="var(--fill-0, #1B2549)" id="Vector_120" />
          <path d={svgPaths.p88a6e00} fill="var(--fill-0, #1B2549)" id="Vector_121" />
          <path d={svgPaths.p2314ae80} fill="var(--fill-0, #1B2549)" id="Vector_122" />
          <path d={svgPaths.p1d495780} fill="var(--fill-0, #1B2549)" id="Vector_123" />
          <path d={svgPaths.p22782e00} fill="var(--fill-0, #1B2549)" id="Vector_124" />
          <path d={svgPaths.p3331dc00} fill="var(--fill-0, #1B2549)" id="Vector_125" />
          <path d={svgPaths.p32e6e400} fill="var(--fill-0, #1B2549)" id="Vector_126" />
          <path d={svgPaths.ped2e300} fill="var(--fill-0, #1B2549)" id="Vector_127" />
          <path d={svgPaths.p1f163880} fill="var(--fill-0, #1B2549)" id="Vector_128" />
          <path d={svgPaths.p39d23f80} fill="var(--fill-0, #1B2549)" id="Vector_129" />
          <path d={svgPaths.p500f180} fill="var(--fill-0, #1B2549)" id="Vector_130" />
          <path d={svgPaths.p3374cb00} fill="var(--fill-0, #1B2549)" id="Vector_131" />
          <path d={svgPaths.pbd09980} fill="var(--fill-0, #292A7D)" id="Vector_132" />
          <path d={svgPaths.pb345900} fill="var(--fill-0, #1C264C)" id="Vector_133" />
          <path d={svgPaths.p13a73100} fill="var(--fill-0, #EAB352)" id="Vector_134" />
          <path d={svgPaths.p2b6b9ef0} fill="var(--fill-0, #242C60)" id="Vector_135" />
          <path d={svgPaths.p36f56070} fill="var(--fill-0, #1C264C)" id="Vector_136" />
          <path d={svgPaths.pf18f00} fill="var(--fill-0, #1C264C)" id="Vector_137" />
          <path d={svgPaths.p1214bf00} fill="var(--fill-0, #1C264C)" id="Vector_138" />
          <path d={svgPaths.pd68ab00} fill="var(--fill-0, #E6A83E)" id="Vector_139" />
          <path d={svgPaths.p11450400} fill="var(--fill-0, #1D274F)" id="Vector_140" />
          <path d={svgPaths.p3643880} fill="var(--fill-0, #1B2549)" id="Vector_141" />
          <path d={svgPaths.p33e6c100} fill="var(--fill-0, #E6A83E)" id="Vector_142" />
          <path d={svgPaths.p34b54000} fill="var(--fill-0, #E6A83E)" id="Vector_143" />
          <path d={svgPaths.p3418cb00} fill="var(--fill-0, #E6A83E)" id="Vector_144" />
          <path d={svgPaths.p2f195f00} fill="var(--fill-0, #1D274F)" id="Vector_145" />
          <path d={svgPaths.p24241b80} fill="var(--fill-0, #1B2549)" id="Vector_146" />
          <path d={svgPaths.p21570180} fill="var(--fill-0, #1B2549)" id="Vector_147" />
          <path d={svgPaths.p3b148700} fill="var(--fill-0, #1C264C)" id="Vector_148" />
          <path d={svgPaths.p17d58e80} fill="var(--fill-0, #1B2549)" id="Vector_149" />
          <path d={svgPaths.pedfda00} fill="var(--fill-0, #1B2549)" id="Vector_150" />
          <path d={svgPaths.paf3500} fill="var(--fill-0, #1B2549)" id="Vector_151" />
          <path d={svgPaths.p35c79700} fill="var(--fill-0, #1B2549)" id="Vector_152" />
          <path d={svgPaths.p27986c00} fill="var(--fill-0, #1B2549)" id="Vector_153" />
          <path d={svgPaths.p1e8daa80} fill="var(--fill-0, #1B2549)" id="Vector_154" />
          <path d={svgPaths.p374e46c0} fill="var(--fill-0, #1B2549)" id="Vector_155" />
          <path d={svgPaths.p9f8e980} fill="var(--fill-0, #1D274F)" id="Vector_156" />
          <path d={svgPaths.p28b1a700} fill="var(--fill-0, #1B2549)" id="Vector_157" />
          <path d={svgPaths.p2ec39470} fill="var(--fill-0, #EAB352)" id="Vector_158" />
          <path d={svgPaths.p145b5d00} fill="var(--fill-0, #1D274F)" id="Vector_159" />
          <path d={svgPaths.p2d95ae80} fill="var(--fill-0, #1D274F)" id="Vector_160" />
          <path d={svgPaths.pffad600} fill="var(--fill-0, #1C264C)" id="Vector_161" />
          <path d={svgPaths.p1c2a0380} fill="var(--fill-0, #1C264C)" id="Vector_162" />
          <path d={svgPaths.p3cd83cf2} fill="var(--fill-0, #1D274F)" id="Vector_163" />
          <path d={svgPaths.p14818fb0} fill="var(--fill-0, #1B2549)" id="Vector_164" />
          <path d={svgPaths.p20787870} fill="var(--fill-0, #232B70)" id="Vector_165" />
          <path d={svgPaths.pdd4f780} fill="var(--fill-0, #242C60)" id="Vector_166" />
          <path d={svgPaths.p355a9700} fill="var(--fill-0, #232B70)" id="Vector_167" />
          <path d={svgPaths.p21c01500} fill="var(--fill-0, #292A7D)" id="Vector_168" />
          <path d={svgPaths.p12292b80} fill="var(--fill-0, #1D274F)" id="Vector_169" />
          <path d={svgPaths.p19ed3e00} fill="var(--fill-0, #232B70)" id="Vector_170" />
          <path d={svgPaths.pa129d00} fill="var(--fill-0, #1D274F)" id="Vector_171" />
          <path d={svgPaths.p3daa6500} fill="var(--fill-0, #1D274F)" id="Vector_172" />
          <path d={svgPaths.p235f00} fill="var(--fill-0, #232B70)" id="Vector_173" />
          <path d={svgPaths.p14cb04f0} fill="var(--fill-0, #1D274F)" id="Vector_174" />
          <path d={svgPaths.p210b2c00} fill="var(--fill-0, #EAB352)" id="Vector_175" />
          <path d={svgPaths.p23f1d080} fill="var(--fill-0, #1B2549)" id="Vector_176" />
          <path d={svgPaths.p30c57800} fill="var(--fill-0, #EAB352)" id="Vector_177" />
          <path d={svgPaths.pd556200} fill="var(--fill-0, #232B70)" id="Vector_178" />
          <path d={svgPaths.p15bd3a80} fill="var(--fill-0, #EAB352)" id="Vector_179" />
          <path d={svgPaths.p70b3404} fill="var(--fill-0, #EAB352)" id="Vector_180" />
          <path d={svgPaths.p3f0bc900} fill="var(--fill-0, #EAB352)" id="Vector_181" />
          <path d={svgPaths.p2b14280} fill="var(--fill-0, #FCFCFC)" id="Vector_182" />
          <path d={svgPaths.p3ab4c200} fill="var(--fill-0, #FCFCFC)" id="Vector_183" />
          <path d={svgPaths.p2f9a200} fill="var(--fill-0, #FCFCFC)" id="Vector_184" />
          <path d={svgPaths.p163c2800} fill="var(--fill-0, #1D274F)" id="Vector_185" />
          <path d={svgPaths.p2c4f5380} fill="var(--fill-0, #182143)" id="Vector_186" />
          <path d={svgPaths.p29967300} fill="var(--fill-0, #182143)" id="Vector_187" />
          <path d={svgPaths.p2b6b8df0} fill="var(--fill-0, #1B2549)" id="Vector_188" />
          <path d={svgPaths.p23db7c80} fill="var(--fill-0, #292A7D)" id="Vector_189" />
          <path d={svgPaths.p1f80b300} fill="var(--fill-0, #1C264C)" id="Vector_190" />
          <path d={svgPaths.p265f8e00} fill="var(--fill-0, #FCFCFC)" id="Vector_191" />
          <path d={svgPaths.pceb79f0} fill="var(--fill-0, #FCFCFC)" id="Vector_192" />
          <path d={svgPaths.p1b6f94f0} fill="var(--fill-0, #FCFCFC)" id="Vector_193" />
          <path d={svgPaths.p9a4d200} fill="var(--fill-0, #F5EFF3)" id="Vector_194" />
          <path d={svgPaths.p3cca3480} fill="var(--fill-0, #182143)" id="Vector_195" />
          <path d={svgPaths.p8a7380} fill="var(--fill-0, #1D274F)" id="Vector_196" />
          <path d={svgPaths.p1ae9cd00} fill="var(--fill-0, #182143)" id="Vector_197" />
          <path d={svgPaths.p55e380} fill="var(--fill-0, #182143)" id="Vector_198" />
          <path d={svgPaths.p3c6b080} fill="var(--fill-0, #292A7D)" id="Vector_199" />
          <path d={svgPaths.p9cada00} fill="var(--fill-0, #182143)" id="Vector_200" />
          <path d={svgPaths.pacdac80} fill="var(--fill-0, #292A7D)" id="Vector_201" />
          <path d={svgPaths.p2c70ee80} fill="var(--fill-0, #161E3C)" id="Vector_202" />
          <path d={svgPaths.p31d15900} fill="var(--fill-0, #1C264C)" id="Vector_203" />
          <path d={svgPaths.p134d7400} fill="var(--fill-0, #232B70)" id="Vector_204" />
          <path d={svgPaths.p41a7df0} fill="var(--fill-0, #1C264C)" id="Vector_205" />
          <path d={svgPaths.p6098f00} fill="var(--fill-0, #1C264C)" id="Vector_206" />
          <path d={svgPaths.pcb60600} fill="var(--fill-0, #1C264C)" id="Vector_207" />
          <path d={svgPaths.p39d116c0} fill="var(--fill-0, #1C264C)" id="Vector_208" />
          <path d={svgPaths.pf19d400} fill="var(--fill-0, #1C264C)" id="Vector_209" />
          <path d={svgPaths.p3ec22680} fill="var(--fill-0, #1C264C)" id="Vector_210" />
          <path d={svgPaths.p1de68c00} fill="var(--fill-0, #1C264C)" id="Vector_211" />
          <path d={svgPaths.p3c925d00} fill="var(--fill-0, #1C264C)" id="Vector_212" />
          <path d={svgPaths.p1a4ea600} fill="var(--fill-0, #1C264C)" id="Vector_213" />
          <path d={svgPaths.p33dc8980} fill="var(--fill-0, #1C264C)" id="Vector_214" />
          <path d={svgPaths.p2bfb0880} fill="var(--fill-0, #FCFCFC)" id="Vector_215" />
          <path d={svgPaths.p33d8e7c0} fill="var(--fill-0, #182143)" id="Vector_216" />
          <path d={svgPaths.p2975f100} fill="var(--fill-0, #161E3C)" id="Vector_217" />
          <path d={svgPaths.p225f0680} fill="var(--fill-0, #1B2549)" id="Vector_218" />
          <path d={svgPaths.p1d0ff000} fill="var(--fill-0, #182143)" id="Vector_219" />
          <path d={svgPaths.p355e6570} fill="var(--fill-0, #292A7D)" id="Vector_220" />
          <path d={svgPaths.p17f48780} fill="var(--fill-0, #182143)" id="Vector_221" />
          <path d={svgPaths.p323bcb00} fill="var(--fill-0, #292A7D)" id="Vector_222" />
          <path d={svgPaths.p9f49d00} fill="var(--fill-0, #161E3C)" id="Vector_223" />
          <path d={svgPaths.p21ef100} fill="var(--fill-0, #161E3C)" id="Vector_224" />
          <path d={svgPaths.p2fc0c100} fill="var(--fill-0, #71718A)" id="Vector_225" />
          <path d={svgPaths.p8f24700} fill="var(--fill-0, #161E3C)" id="Vector_226" />
          <path d={svgPaths.p7ed3380} fill="var(--fill-0, #161E3C)" id="Vector_227" />
          <path d={svgPaths.p5974d00} fill="var(--fill-0, #161E3C)" id="Vector_228" />
          <path d={svgPaths.p12224800} fill="var(--fill-0, #242C60)" id="Vector_229" />
          <path d={svgPaths.p32d72400} fill="var(--fill-0, #182143)" id="Vector_230" />
          <path d={svgPaths.p20351080} fill="var(--fill-0, #232B70)" id="Vector_231" />
          <path d={svgPaths.p2e22df80} fill="var(--fill-0, #292A7D)" id="Vector_232" />
          <path d={svgPaths.p310080d0} fill="var(--fill-0, #232B70)" id="Vector_233" />
          <path d={svgPaths.p1d545a00} fill="var(--fill-0, #161E3C)" id="Vector_234" />
          <path d={svgPaths.p2efff00} fill="var(--fill-0, #1D274F)" id="Vector_235" />
          <path d={svgPaths.p4de2500} fill="var(--fill-0, #182143)" id="Vector_236" />
          <path d={svgPaths.p2434a000} fill="var(--fill-0, #1D274F)" id="Vector_237" />
          <path d={svgPaths.p2ab0f8b0} fill="var(--fill-0, #1D274F)" id="Vector_238" />
          <path d={svgPaths.p5e95900} fill="var(--fill-0, #1D274F)" id="Vector_239" />
          <path d={svgPaths.p17de0580} fill="var(--fill-0, #182143)" id="Vector_240" />
          <path d={svgPaths.p284bd80} fill="var(--fill-0, #1D274F)" id="Vector_241" />
          <path d={svgPaths.p74ac0f2} fill="var(--fill-0, #1C264C)" id="Vector_242" />
          <path d={svgPaths.p3383ac80} fill="var(--fill-0, #182143)" id="Vector_243" />
          <path d={svgPaths.p286e2700} fill="var(--fill-0, #242C60)" id="Vector_244" />
          <path d={svgPaths.p2880ac0} fill="var(--fill-0, #1D274F)" id="Vector_245" />
          <path d={svgPaths.p30d4fa00} fill="var(--fill-0, #1B2549)" id="Vector_246" />
          <path d={svgPaths.p16245f00} fill="var(--fill-0, #1C264C)" id="Vector_247" />
          <path d={svgPaths.p35684a00} fill="var(--fill-0, #1C264C)" id="Vector_248" />
          <path d={svgPaths.p3553a300} fill="var(--fill-0, #1C264C)" id="Vector_249" />
          <path d={svgPaths.p2be80000} fill="var(--fill-0, #292A7D)" id="Vector_250" />
          <path d={svgPaths.p3d069980} fill="var(--fill-0, #242C60)" id="Vector_251" />
          <path d={svgPaths.p1707c0c0} fill="var(--fill-0, #71718A)" id="Vector_252" />
          <path d={svgPaths.p1fbad020} fill="var(--fill-0, #232B70)" id="Vector_253" />
          <path d={svgPaths.p3e2a7500} fill="var(--fill-0, #F5EFF3)" id="Vector_254" />
          <path d={svgPaths.pa9c4580} fill="var(--fill-0, #F5EFF3)" id="Vector_255" />
          <path d={svgPaths.p1bfe6200} fill="var(--fill-0, #182143)" id="Vector_256" />
          <path d={svgPaths.p1f79ce00} fill="var(--fill-0, #182143)" id="Vector_257" />
          <path d={svgPaths.p37e25780} fill="var(--fill-0, #1C264C)" id="Vector_258" />
          <path d={svgPaths.p3ce54e80} fill="var(--fill-0, #182143)" id="Vector_259" />
          <path d={svgPaths.p148c1800} fill="var(--fill-0, #F5EFF3)" id="Vector_260" />
          <path d={svgPaths.p10148580} fill="var(--fill-0, #1C264C)" id="Vector_261" />
          <path d={svgPaths.p9c8ea00} fill="var(--fill-0, #1C264C)" id="Vector_262" />
          <path d={svgPaths.p120b300} fill="var(--fill-0, #1C264C)" id="Vector_263" />
          <path d={svgPaths.p2fe62e00} fill="var(--fill-0, #F5EFF3)" id="Vector_264" />
          <path d={svgPaths.p1d06df00} fill="var(--fill-0, #161E3C)" id="Vector_265" />
          <path d={svgPaths.p2424c880} fill="var(--fill-0, #71718A)" id="Vector_266" />
          <path d={svgPaths.p3fd67ff0} fill="var(--fill-0, #242C60)" id="Vector_267" />
          <path d={svgPaths.p38dce080} fill="var(--fill-0, #1C264C)" id="Vector_268" />
          <path d={svgPaths.p3715bb80} fill="var(--fill-0, #1C264C)" id="Vector_269" />
          <path d={svgPaths.p847c840} fill="var(--fill-0, #1C264C)" id="Vector_270" />
          <path d={svgPaths.p181c0900} fill="var(--fill-0, #182143)" id="Vector_271" />
          <path d={svgPaths.p1c8a3a80} fill="var(--fill-0, #161E3C)" id="Vector_272" />
          <path d={svgPaths.pd5b19f0} fill="var(--fill-0, #161E3C)" id="Vector_273" />
          <path d={svgPaths.pfcc8b80} fill="var(--fill-0, #182143)" id="Vector_274" />
          <path d={svgPaths.p2b274e00} fill="var(--fill-0, #161E3C)" id="Vector_275" />
          <path d={svgPaths.p317f7dc0} fill="var(--fill-0, #F5EFF3)" id="Vector_276" />
          <path d={svgPaths.p17f63100} fill="var(--fill-0, #F5EFF3)" id="Vector_277" />
          <path d={svgPaths.p3e818c80} fill="var(--fill-0, #1B2549)" id="Vector_278" />
          <path d={svgPaths.p34e81180} fill="var(--fill-0, #1B2549)" id="Vector_279" />
          <path d={svgPaths.p35903a00} fill="var(--fill-0, #1B2549)" id="Vector_280" />
          <path d={svgPaths.p275d9d00} fill="var(--fill-0, #F5EFF3)" id="Vector_281" />
          <path d={svgPaths.p5782d00} fill="var(--fill-0, #EAB352)" id="Vector_282" />
          <path d={svgPaths.pce14c0} fill="var(--fill-0, #E8B04C)" id="Vector_283" />
          <path d={svgPaths.p275c0000} fill="var(--fill-0, #E6A83E)" id="Vector_284" />
          <path d={svgPaths.p36399280} fill="var(--fill-0, #1B2549)" id="Vector_285" />
          <path d={svgPaths.p9625270} fill="var(--fill-0, #E6A83E)" id="Vector_286" />
          <path d={svgPaths.p58d3f00} fill="var(--fill-0, #FCFCFC)" id="Vector_287" />
          <path d={svgPaths.p2f12e400} fill="var(--fill-0, #F5EFF3)" id="Vector_288" />
          <path d={svgPaths.p38eda780} fill="var(--fill-0, #F5EFF3)" id="Vector_289" />
          <path d={svgPaths.p1a10edf0} fill="var(--fill-0, #F5EFF3)" id="Vector_290" />
          <path d={svgPaths.p31b76600} fill="var(--fill-0, #1D274F)" id="Vector_291" />
          <path d={svgPaths.p3264cf60} fill="var(--fill-0, #F5EFF3)" id="Vector_292" />
          <path d={svgPaths.p1fcc7600} fill="var(--fill-0, #1C264C)" id="Vector_293" />
          <path d={svgPaths.p54c1b00} fill="var(--fill-0, #182143)" id="Vector_294" />
          <path d={svgPaths.p2b802200} fill="var(--fill-0, #1C264C)" id="Vector_295" />
          <path d={svgPaths.p2a603b00} fill="var(--fill-0, #1C264C)" id="Vector_296" />
          <path d={svgPaths.p1dd0c580} fill="var(--fill-0, #182143)" id="Vector_297" />
          <path d={svgPaths.pde2f880} fill="var(--fill-0, #182143)" id="Vector_298" />
          <path d={svgPaths.p35ca9880} fill="var(--fill-0, #E29D29)" id="Vector_299" />
          <path d={svgPaths.p1a010a80} fill="var(--fill-0, #E8B04C)" id="Vector_300" />
          <path d={svgPaths.p3a7c8000} fill="var(--fill-0, #E29D29)" id="Vector_301" />
          <path d={svgPaths.p25ccf100} fill="var(--fill-0, #182143)" id="Vector_302" />
          <path d={svgPaths.p3ae95400} fill="var(--fill-0, #E8B04C)" id="Vector_303" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-0 top-[52px]" data-name="header">
      <div className="absolute bg-white h-[60px] left-0 top-[52px] w-[480px]" data-name="Header" />
      <div className="absolute inset-[4.88%_4.79%_93.38%_90%]" data-name="Vector">
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

function Container7() {
  return (
    <div className="absolute contents left-0 top-[872px]" data-name="Container">
      <div className="absolute flex h-[64.289px] items-center justify-center left-0 top-[1134.71px] w-[480px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white h-[64.289px] relative shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.25)] w-[480px]" data-name="Container" />
        </div>
      </div>
      <div className="absolute bg-white h-[327px] left-0 shadow-[0px_-4px_4px_-4px_rgba(0,0,0,0.25)] top-[872px] w-[480px]" data-name="Container" />
    </div>
  );
}

function ContactSection() {
  return (
    <div className="absolute contents left-[30px] top-[1089px]" data-name="Contact section">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[219px] text-[#737373] text-[12px] top-[1150px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">이용약관</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[62px] text-[#737373] text-[12px] top-[1150px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">문의 게시판</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[54px] text-[#737373] text-[12px] top-[1106px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">자주 묻는 질문</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[212px] text-[#737373] text-[12px] top-[1106px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">서비스 소개</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[374px] text-[#737373] text-[12px] top-[1106px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">확률표</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[348px] text-[#737373] text-[12px] top-[1150px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">개인정보처리방침</p>
      </div>
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[30px] top-[1089px] w-[120px]" data-name="FAQ button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[180px] top-[1089px] w-[120px]" data-name="Service introduction button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[330px] top-[1089px] w-[120px]" data-name="Privacy policy button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[30px] top-[1133px] w-[120px]" data-name="Service introduction button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[180px] top-[1133px] w-[120px]" data-name="Probability table button" />
      <div className="absolute border border-[#ebebeb] border-solid h-[34px] left-[330px] top-[1133px] w-[120px]" data-name="Privacy policy button" />
    </div>
  );
}

export default function Result() {
  return (
    <div className="bg-white relative size-full" data-name="/result">
      <div className="absolute bg-[#fafbfc] border border-[#eaeaea] border-solid h-[112px] left-[24px] rounded-[14px] top-[280px] w-[432px]" data-name="Product details container" />
      <div className="absolute bg-[#d9d9d9] h-[79px] left-[41px] rounded-[9px] top-[296px] w-[80px]" data-name="Product image container" />
      <div className="absolute bg-[#e5f4ff] h-[22px] left-[134px] rounded-[11px] top-[304px] w-[69px]" data-name="Convert points button" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[169px] not-italic text-[#0090ff] text-[11px] text-center top-[314.5px] tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 전환</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[180px] not-italic text-[#020202] text-[13px] text-center top-[339px] whitespace-nowrap">
        <p className="leading-[normal]">Product_Name</p>
      </div>
      <ViewAllContainer />
      <StockContainer />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[177.5px] not-italic text-[#020202] text-[13px] text-center top-[360px] whitespace-nowrap">
        <p className="leading-[normal]">Product_Price</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[287.5px] not-italic text-[#b6b7b8] text-[12px] text-center top-[360.5px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[normal]">26. 02. 04. 21:10 당첨</p>
      </div>
      <Nav />
      <BackgroundHorizontalBorder />
      <HeadBanner />
      <div className="-translate-x-1/2 absolute bg-[#ececec] h-px left-1/2 top-[111px] w-[480px]" data-name="Border" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">이용방법</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[158px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">이벤트</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[263px] text-[#020202] text-[15px] top-[136.5px] tracking-[-0.75px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[13px]">공지사항</p>
      </div>
      <Header />
      <div className="absolute border border-[#eaeaea] border-solid h-[50px] left-0 top-[112px] w-[480px]" data-name="Banner background" />
      <Container7 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[951px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">고객센터 : centbox_cs@gmail.com</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[974px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">운영시간 : 13:00 ~ 17:00 / 공휴일 휴무</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[997px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">{`계좌번호 : `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[29px] text-[#9e9e9e] text-[12px] top-[1020px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[normal]">반송주소 : 경상남도 김해시 대청로104번길 27-31 1층</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[29px] text-[#3e3e3e] text-[12px] top-[1071px] tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[normal]">고객지원</p>
      </div>
      <ContactSection />
      <div className="absolute h-[34px] left-[29px] top-[898px] w-[113px]" data-name="ChatGPT Image 2026년 6월 16일 오후 01_43_49 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.47%] left-[-2.67%] max-w-none top-[-8.86%] w-[104.81%]" src={imgChatGptImage20266160143493} />
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1234px] whitespace-nowrap">
        <p className="leading-[normal]">주식회사 투베이스 ㅣ 센트박스</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1256px] whitespace-nowrap">
        <p className="leading-[normal]">대표자 : 최승연</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1277px] whitespace-nowrap">
        <p className="leading-[normal]">사업자등록번호 : 288-88-03513</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1299px] whitespace-nowrap">
        <p className="leading-[normal]">{`통신판매업 : 2026-김해장유-0206 `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1320px] tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[normal]">사업장소재지 : 경상남도 김해시 대청로104번길 27-31 1층</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[29px] not-italic text-[#959595] text-[12px] top-[1341px] tracking-[-0.12px] w-[275px]">
        <p className="leading-[normal]">COPYRIGHT : 2026 투베이스</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[200px] not-italic text-[#959595] text-[12px] top-[1277px] whitespace-nowrap">
        <p className="leading-[normal]">사업자정보확인</p>
      </div>
    </div>
  );
}
