import svgPaths from "../imports/Home-1/svg-1j78ghmiqp";

// 공통 헤더 높이: 배너(52) + 헤더바(60) + 카테고리바(50) = 162px
export const HEADER_HEIGHT = 162;

interface Props {
  onCategoryClick?: (label: string) => void;
}

export default function SharedHeader({ onCategoryClick }: Props) {
  return (
    <div
      className="absolute top-0 left-0 w-full bg-white z-20"
      style={{ height: HEADER_HEIGHT }}
    >
      {/* ── 1. Head Banner (52px) ──────────────────────────── */}
      <div className="absolute top-0 left-0 w-full h-[52px] bg-[rgba(0,0,71,0.8)]">
        {/* 닫기 버튼 */}
        <div className="absolute left-[441px] size-[10px] top-[22px]">
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d="M11 1L1 11" stroke="white" strokeLinecap="round" strokeWidth="2" />
              <path d="M1 1L11 11" stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        {/* 배너 텍스트 */}
        <div
          className="[word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[102px] text-[15px] text-white tracking-[-0.6px] whitespace-nowrap"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Noto Sans KR', 'Noto Sans', sans-serif",
            fontVariationSettings: '"CTGR" 100, "wdth" 100',
          }}
        >
          <p className="leading-[13px]">최*진님께서 " [Airpods Max 3] "를 획득했어요!</p>
        </div>
      </div>

      {/* ── 2. Header Bar (60px, top=52) ───────────────────── */}
      <div className="absolute top-[52px] left-0 w-full h-[60px] bg-white">
        {/* 로고: top=69px 기준(헤더 영역 내 픽셀) */}
        <div className="absolute" style={{ top: 17, left: 26, width: 89, height: 26 }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 26.1203">
            <g id="Logo">
              <path d={svgPaths.p3a480600} fill="#EAB352" />
              <path d={svgPaths.p3d88b200} fill="#E8B04C" />
              <path d={svgPaths.pfead150}  fill="#EAB352" />
              <path d={svgPaths.p1a444200} fill="#EAB352" />
              <path d={svgPaths.p5bdb80}   fill="#E29D29" />
              <path d={svgPaths.p5d31400}  fill="#E6A83E" />
              <path d={svgPaths.p11a4f600} fill="#E29D29" />
              <path d={svgPaths.p16fd2d32} fill="#EAB352" />
              <path d={svgPaths.p20a88300} fill="#E29D29" />
              <path d={svgPaths.p1d66e000} fill="#EAB352" />
              <path d={svgPaths.pa30d700}  fill="#E8B04C" />
              <path d={svgPaths.p7100700}  fill="#E29D29" />
              <path d={svgPaths.p2e42b400} fill="#E6A83E" />
              <path d={svgPaths.p22524280} fill="#1D274F" />
              <path d={svgPaths.p1dc66f00} fill="#E29D29" />
              <path d={svgPaths.p712580}   fill="#EAB352" />
              <path d={svgPaths.p110fe600} fill="#E6A83E" />
              <path d={svgPaths.p24b23b00} fill="#EAB352" />
              <path d={svgPaths.p1df2ba00} fill="#E8B04C" />
              <path d={svgPaths.p2d32df40} fill="#EAB352" />
              <path d={svgPaths.pb671700}  fill="#E6A83E" />
              <path d={svgPaths.pbfbf230}  fill="#E8B04C" />
              <path d={svgPaths.p1abb5600} fill="#EAB352" />
              <path d={svgPaths.p82fb280}  fill="#EAB352" />
              <path d={svgPaths.p377b5800} fill="#E6A83E" />
              <path d={svgPaths.p4231700}  fill="#E8B04C" />
              <path d={svgPaths.p2da14600} fill="#E6A83E" />
              <path d={svgPaths.p1a3daf00} fill="#EAB352" />
              <path d={svgPaths.pba168f0}  fill="#1D274F" />
              <path d={svgPaths.p3b8b9970} fill="#E6A83E" />
              <path d={svgPaths.p2acc86a0} fill="#E6A83E" />
              <path d={svgPaths.p1055d70}  fill="#E29D29" />
              <path d={svgPaths.p3022680}  fill="#E8B04C" />
              <path d={svgPaths.p16b33e00} fill="#E8B04C" />
              <path d={svgPaths.p3c638600} fill="#E6A83E" />
              <path d={svgPaths.pb3d73f2}  fill="#E8B04C" />
              <path d={svgPaths.p310a3e70} fill="#E8B04C" />
              <path d={svgPaths.p2e053200} fill="#EAB352" />
              <path d={svgPaths.p151b7c00} fill="#E6A83E" />
              <path d={svgPaths.p20f23b00} fill="#E29D29" />
              <path d={svgPaths.p1be2be40} fill="#E6A83E" />
              <path d={svgPaths.p19635400} fill="#E6A83E" />
              <path d={svgPaths.p25939e00} fill="#E29D29" />
              <path d={svgPaths.p13b1a700} fill="#E29D29" />
              <path d={svgPaths.p6965100}  fill="#E29D29" />
              <path d={svgPaths.p1aaa1700} fill="#E29D29" />
              <path d={svgPaths.p1f4a9940} fill="#E29D29" />
              <path d={svgPaths.p218a0e00} fill="#E6A83E" />
              <path d={svgPaths.p22864d00} fill="#E29D29" />
              <path d={svgPaths.p651f880}  fill="#E29D29" />
              <path d={svgPaths.p25f9300}  fill="#E6A83E" />
              <path d={svgPaths.p21591180} fill="#E6A83E" />
              <path d={svgPaths.p1cc01100} fill="#E6A83E" />
              <path d={svgPaths.p1e3f8880} fill="#E6A83E" />
              <path d={svgPaths.peb44f40}  fill="#E6A83E" />
              <path d={svgPaths.p2be5d4c0} fill="#E29D29" />
              <path d={svgPaths.p26f2e00}  fill="#E6A83E" />
              <path d={svgPaths.p1dd59c80} fill="#EAB352" />
              <path d={svgPaths.p2d578000} fill="#E6A83E" />
              <path d={svgPaths.p3a371880} fill="#E29D29" />
              <path d={svgPaths.p173d2df0} fill="#E6A83E" />
              <path d={svgPaths.pd0b4780}  fill="#E6A83E" />
              <path d={svgPaths.p1170f800} fill="#E6A83E" />
              <path d={svgPaths.p3dc02190} fill="#E6A83E" />
              <path d={svgPaths.p3f64c180} fill="#1B2549" />
              <path d={svgPaths.p7560e00}  fill="#1C264C" />
              <path d={svgPaths.p8ba8d80}  fill="#292A7D" />
              <path d={svgPaths.p3819a480} fill="#232B70" />
              <path d={svgPaths.p17666e30} fill="#1C264C" />
              <path d={svgPaths.p25ae8a00} fill="#242C60" />
              <path d={svgPaths.p25c20a00} fill="#1C264C" />
              <path d={svgPaths.p18af3c70} fill="#1C264C" />
              <path d={svgPaths.p26d1db80} fill="#232B70" />
              <path d={svgPaths.p2d147980} fill="#1C264C" />
              <path d={svgPaths.p18194b80} fill="#1B2549" />
              <path d={svgPaths.p885c000}  fill="#1B2549" />
              <path d={svgPaths.p2e2c3a20} fill="#1B2549" />
              <path d={svgPaths.pe87ed00}  fill="#1B2549" />
              <path d={svgPaths.pc7c3200}  fill="#1B2549" />
              <path d={svgPaths.p2c8ec000} fill="#1B2549" />
              <path d={svgPaths.p18aed680} fill="#1B2549" />
              <path d={svgPaths.p14feb700} fill="#1B2549" />
              <path d={svgPaths.p26ebe200} fill="#1B2549" />
              <path d={svgPaths.pcf80c00}  fill="#1B2549" />
              <path d={svgPaths.p21b1c180} fill="#292A7D" />
              <path d={svgPaths.p10cc7c00} fill="#232B70" />
              <path d={svgPaths.p28fd2300} fill="#242C60" />
              <path d={svgPaths.p1095180}  fill="#242C60" />
              <path d={svgPaths.p21b2c9e0} fill="#1B2549" />
              <path d={svgPaths.p5014900}  fill="#71718A" />
              <path d={svgPaths.p20d62400} fill="#1D274F" />
              <path d={svgPaths.p1612f900} fill="#1D274F" />
              <path d={svgPaths.p10935b00} fill="#EAB352" />
              <path d={svgPaths.p3bc560f0} fill="#1B2549" />
              <path d={svgPaths.p1222b400} fill="#1B2549" />
              <path d={svgPaths.p23f9df00} fill="#1C264C" />
              <path d={svgPaths.p22cb1b40} fill="#242C60" />
              <path d={svgPaths.p18b42170} fill="#242C60" />
              <path d={svgPaths.p19a19b00} fill="#1C264C" />
              <path d={svgPaths.p1f3e400}  fill="#1C264C" />
              <path d={svgPaths.p1c6baa70} fill="#1C264C" />
              <path d={svgPaths.p1671c900} fill="#1C264C" />
              <path d={svgPaths.p13553a00} fill="#1C264C" />
              <path d={svgPaths.p1232a600} fill="#1C264C" />
              <path d={svgPaths.p35d52200} fill="#1C264C" />
              <path d={svgPaths.p11f3a480} fill="#1C264C" />
              <path d={svgPaths.p2fb0a700} fill="#1C264C" />
              <path d={svgPaths.p265fbb00} fill="#232B70" />
              <path d={svgPaths.p6de1000}  fill="#242C60" />
              <path d={svgPaths.p3cf9a300} fill="#1C264C" />
              <path d={svgPaths.p28521680} fill="#1C264C" />
              <path d={svgPaths.p3ffdfe70} fill="#1C264C" />
              <path d={svgPaths.p781ee00}  fill="#242C60" />
              <path d={svgPaths.p1df08b00} fill="#E6A83E" />
              <path d={svgPaths.p3146d000} fill="#E6A83E" />
              <path d={svgPaths.p1c016b80} fill="#E8B04C" />
              <path d={svgPaths.p2ef27480} fill="#242C60" />
              <path d={svgPaths.p2cd0cf00} fill="#1B2549" />
              <path d={svgPaths.p37861900} fill="#242C60" />
              <path d={svgPaths.p1b8b46f0} fill="#1B2549" />
              <path d={svgPaths.p88a6e00}  fill="#1B2549" />
              <path d={svgPaths.p2314ae80} fill="#1B2549" />
              <path d={svgPaths.p1d495780} fill="#1B2549" />
              <path d={svgPaths.p22782e00} fill="#1B2549" />
              <path d={svgPaths.p3331dc00} fill="#1B2549" />
              <path d={svgPaths.p32e6e400} fill="#1B2549" />
              <path d={svgPaths.ped2e300}  fill="#1B2549" />
              <path d={svgPaths.p1f163880} fill="#1B2549" />
              <path d={svgPaths.p39d23f80} fill="#1B2549" />
              <path d={svgPaths.p500f180}  fill="#1B2549" />
              <path d={svgPaths.p3374cb00} fill="#1B2549" />
              <path d={svgPaths.pbd09980}  fill="#292A7D" />
              <path d={svgPaths.pb345900}  fill="#1C264C" />
              <path d={svgPaths.p13a73100} fill="#EAB352" />
              <path d={svgPaths.p2b6b9ef0} fill="#242C60" />
              <path d={svgPaths.p36f56070} fill="#1C264C" />
              <path d={svgPaths.pf18f00}   fill="#1C264C" />
              <path d={svgPaths.p1214bf00} fill="#1C264C" />
              <path d={svgPaths.pd68ab00}  fill="#E6A83E" />
              <path d={svgPaths.p11450400} fill="#1D274F" />
              <path d={svgPaths.p3643880}  fill="#1B2549" />
              <path d={svgPaths.p33e6c100} fill="#E6A83E" />
              <path d={svgPaths.p34b54000} fill="#E6A83E" />
              <path d={svgPaths.p3418cb00} fill="#E6A83E" />
              <path d={svgPaths.p2f195f00} fill="#1D274F" />
              <path d={svgPaths.p24241b80} fill="#1B2549" />
              <path d={svgPaths.p21570180} fill="#1B2549" />
              <path d={svgPaths.p3b148700} fill="#1C264C" />
              <path d={svgPaths.p17d58e80} fill="#1B2549" />
              <path d={svgPaths.pedfda00}  fill="#1B2549" />
              <path d={svgPaths.paf3500}   fill="#1B2549" />
              <path d={svgPaths.p35c79700} fill="#1B2549" />
              <path d={svgPaths.p27986c00} fill="#1B2549" />
              <path d={svgPaths.p1e8daa80} fill="#1B2549" />
              <path d={svgPaths.p374e46c0} fill="#1B2549" />
              <path d={svgPaths.p9f8e980}  fill="#1D274F" />
              <path d={svgPaths.p28b1a700} fill="#1B2549" />
              <path d={svgPaths.p2ec39470} fill="#EAB352" />
              <path d={svgPaths.p145b5d00} fill="#1D274F" />
              <path d={svgPaths.p2d95ae80} fill="#1D274F" />
              <path d={svgPaths.pffad600}  fill="#1C264C" />
              <path d={svgPaths.p1c2a0380} fill="#1C264C" />
              <path d={svgPaths.p3cd83cf2} fill="#1D274F" />
              <path d={svgPaths.p14818fb0} fill="#1B2549" />
              <path d={svgPaths.p20787870} fill="#232B70" />
              <path d={svgPaths.pdd4f780}  fill="#242C60" />
              <path d={svgPaths.p355a9700} fill="#232B70" />
              <path d={svgPaths.p21c01500} fill="#292A7D" />
              <path d={svgPaths.p12292b80} fill="#1D274F" />
              <path d={svgPaths.p19ed3e00} fill="#232B70" />
              <path d={svgPaths.pa129d00}  fill="#1D274F" />
              <path d={svgPaths.p3daa6500} fill="#1D274F" />
              <path d={svgPaths.p235f00}   fill="#232B70" />
              <path d={svgPaths.p14cb04f0} fill="#1D274F" />
              <path d={svgPaths.p210b2c00} fill="#EAB352" />
              <path d={svgPaths.p23f1d080} fill="#1B2549" />
              <path d={svgPaths.p30c57800} fill="#EAB352" />
              <path d={svgPaths.pd556200}  fill="#232B70" />
              <path d={svgPaths.p15bd3a80} fill="#EAB352" />
              <path d={svgPaths.p70b3404}  fill="#EAB352" />
              <path d={svgPaths.p3f0bc900} fill="#EAB352" />
              <path d={svgPaths.p2b14280}  fill="#FCFCFC" />
              <path d={svgPaths.p3ab4c200} fill="#FCFCFC" />
              <path d={svgPaths.p2f9a200}  fill="#FCFCFC" />
              <path d={svgPaths.p163c2800} fill="#1D274F" />
              <path d={svgPaths.p2c4f5380} fill="#182143" />
              <path d={svgPaths.p29967300} fill="#182143" />
              <path d={svgPaths.p2b6b8df0} fill="#1B2549" />
              <path d={svgPaths.p23db7c80} fill="#292A7D" />
              <path d={svgPaths.p1f80b300} fill="#1C264C" />
              <path d={svgPaths.p265f8e00} fill="#FCFCFC" />
              <path d={svgPaths.pceb79f0}  fill="#FCFCFC" />
              <path d={svgPaths.p1b6f94f0} fill="#FCFCFC" />
              <path d={svgPaths.p9a4d200}  fill="#F5EFF3" />
              <path d={svgPaths.p3cca3480} fill="#182143" />
              <path d={svgPaths.p8a7380}   fill="#1D274F" />
              <path d={svgPaths.p1ae9cd00} fill="#182143" />
              <path d={svgPaths.p55e380}   fill="#182143" />
              <path d={svgPaths.p3c6b080}  fill="#292A7D" />
              <path d={svgPaths.p9cada00}  fill="#182143" />
              <path d={svgPaths.pacdac80}  fill="#292A7D" />
              <path d={svgPaths.p2c70ee80} fill="#161E3C" />
              <path d={svgPaths.p31d15900} fill="#1C264C" />
              <path d={svgPaths.p134d7400} fill="#232B70" />
              <path d={svgPaths.p41a7df0}  fill="#1C264C" />
              <path d={svgPaths.p6098f00}  fill="#1C264C" />
              <path d={svgPaths.pcb60600}  fill="#1C264C" />
              <path d={svgPaths.p39d116c0} fill="#1C264C" />
              <path d={svgPaths.pf19d400}  fill="#1C264C" />
              <path d={svgPaths.p3ec22680} fill="#1C264C" />
              <path d={svgPaths.p1de68c00} fill="#1C264C" />
              <path d={svgPaths.p3c925d00} fill="#1C264C" />
              <path d={svgPaths.p1a4ea600} fill="#1C264C" />
              <path d={svgPaths.p33dc8980} fill="#1C264C" />
              <path d={svgPaths.p2bfb0880} fill="#FCFCFC" />
              <path d={svgPaths.p33d8e7c0} fill="#182143" />
              <path d={svgPaths.p2975f100} fill="#161E3C" />
              <path d={svgPaths.p225f0680} fill="#1B2549" />
              <path d={svgPaths.p1d0ff000} fill="#182143" />
              <path d={svgPaths.p355e6570} fill="#292A7D" />
              <path d={svgPaths.p17f48780} fill="#182143" />
              <path d={svgPaths.p323bcb00} fill="#292A7D" />
              <path d={svgPaths.p9f49d00}  fill="#161E3C" />
              <path d={svgPaths.p21ef100}  fill="#161E3C" />
              <path d={svgPaths.p2fc0c100} fill="#71718A" />
              <path d={svgPaths.p8f24700}  fill="#161E3C" />
              <path d={svgPaths.p7ed3380}  fill="#161E3C" />
              <path d={svgPaths.p5974d00}  fill="#161E3C" />
              <path d={svgPaths.p12224800} fill="#242C60" />
              <path d={svgPaths.p32d72400} fill="#182143" />
              <path d={svgPaths.p20351080} fill="#232B70" />
              <path d={svgPaths.p2e22df80} fill="#292A7D" />
              <path d={svgPaths.p310080d0} fill="#232B70" />
              <path d={svgPaths.p1d545a00} fill="#161E3C" />
              <path d={svgPaths.p2efff00}  fill="#1D274F" />
              <path d={svgPaths.p4de2500}  fill="#182143" />
              <path d={svgPaths.p2434a000} fill="#1D274F" />
              <path d={svgPaths.p2ab0f8b0} fill="#1D274F" />
              <path d={svgPaths.p5e95900}  fill="#1D274F" />
              <path d={svgPaths.p17de0580} fill="#182143" />
              <path d={svgPaths.p284bd80}  fill="#1D274F" />
              <path d={svgPaths.p74ac0f2}  fill="#1C264C" />
              <path d={svgPaths.p3383ac80} fill="#182143" />
              <path d={svgPaths.p286e2700} fill="#242C60" />
              <path d={svgPaths.p2880ac0}  fill="#1D274F" />
              <path d={svgPaths.p30d4fa00} fill="#1B2549" />
              <path d={svgPaths.p16245f00} fill="#1C264C" />
              <path d={svgPaths.p35684a00} fill="#1C264C" />
              <path d={svgPaths.p3553a300} fill="#1C264C" />
              <path d={svgPaths.p2be80000} fill="#292A7D" />
              <path d={svgPaths.p3d069980} fill="#242C60" />
              <path d={svgPaths.p1707c0c0} fill="#71718A" />
              <path d={svgPaths.p1fbad020} fill="#232B70" />
              <path d={svgPaths.p3e2a7500} fill="#F5EFF3" />
              <path d={svgPaths.pa9c4580}  fill="#F5EFF3" />
              <path d={svgPaths.p1bfe6200} fill="#182143" />
              <path d={svgPaths.p1f79ce00} fill="#182143" />
              <path d={svgPaths.p37e25780} fill="#1C264C" />
              <path d={svgPaths.p3ce54e80} fill="#182143" />
              <path d={svgPaths.p148c1800} fill="#F5EFF3" />
              <path d={svgPaths.p10148580} fill="#1C264C" />
              <path d={svgPaths.p9c8ea00}  fill="#1C264C" />
              <path d={svgPaths.p120b300}  fill="#1C264C" />
              <path d={svgPaths.p2fe62e00} fill="#F5EFF3" />
              <path d={svgPaths.p1d06df00} fill="#161E3C" />
              <path d={svgPaths.p2424c880} fill="#71718A" />
              <path d={svgPaths.p3fd67ff0} fill="#242C60" />
              <path d={svgPaths.p38dce080} fill="#1C264C" />
              <path d={svgPaths.p3715bb80} fill="#1C264C" />
              <path d={svgPaths.p847c840}  fill="#1C264C" />
              <path d={svgPaths.p181c0900} fill="#182143" />
              <path d={svgPaths.p1c8a3a80} fill="#161E3C" />
              <path d={svgPaths.pd5b19f0}  fill="#161E3C" />
              <path d={svgPaths.pfcc8b80}  fill="#182143" />
              <path d={svgPaths.p2b274e00} fill="#161E3C" />
              <path d={svgPaths.p317f7dc0} fill="#F5EFF3" />
              <path d={svgPaths.p17f63100} fill="#F5EFF3" />
              <path d={svgPaths.p3e818c80} fill="#1B2549" />
              <path d={svgPaths.p34e81180} fill="#1B2549" />
              <path d={svgPaths.p35903a00} fill="#1B2549" />
              <path d={svgPaths.p275d9d00} fill="#F5EFF3" />
              <path d={svgPaths.p5782d00}  fill="#EAB352" />
              <path d={svgPaths.pce14c0}   fill="#E8B04C" />
              <path d={svgPaths.p275c0000} fill="#E6A83E" />
              <path d={svgPaths.p36399280} fill="#1B2549" />
              <path d={svgPaths.p9625270}  fill="#E6A83E" />
              <path d={svgPaths.p58d3f00}  fill="#FCFCFC" />
              <path d={svgPaths.p2f12e400} fill="#F5EFF3" />
              <path d={svgPaths.p38eda780} fill="#F5EFF3" />
              <path d={svgPaths.p1a10edf0} fill="#F5EFF3" />
              <path d={svgPaths.p31b76600} fill="#1D274F" />
              <path d={svgPaths.p3264cf60} fill="#F5EFF3" />
              <path d={svgPaths.p1fcc7600} fill="#1C264C" />
              <path d={svgPaths.p54c1b00}  fill="#182143" />
              <path d={svgPaths.p2b802200} fill="#1C264C" />
              <path d={svgPaths.p2a603b00} fill="#1C264C" />
              <path d={svgPaths.p1dd0c580} fill="#182143" />
              <path d={svgPaths.pde2f880}  fill="#182143" />
              <path d={svgPaths.p35ca9880} fill="#E29D29" />
              <path d={svgPaths.p1a010a80} fill="#E8B04C" />
              <path d={svgPaths.p3a7c8000} fill="#E29D29" />
              <path d={svgPaths.p25ccf100} fill="#182143" />
              <path d={svgPaths.p3ae95400} fill="#E8B04C" />
            </g>
          </svg>
        </div>

        {/* 벨(알림) 아이콘 */}
        <div className="absolute" style={{ top: 18, left: 432, width: 25, height: 25 }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path d={svgPaths.p31c31000} stroke="#33336C" />
          </svg>
        </div>

        {/* 검색바 pill + 숫자 */}
        <div className="absolute bg-[#333] h-[18px] rounded-[9px] left-[419px] top-[10px] w-[25px]" />
        <div
          className="absolute text-white text-[15px] left-[427px]"
          style={{
            top: "19.5px",
            transform: "translateY(-50%)",
            fontFamily: "'Pretendard', sans-serif",
            lineHeight: 0,
          }}
        >
          <p style={{ lineHeight: "13px" }}>0</p>
        </div>
      </div>

      {/* ── 3. 구분선 ──────────────────────────────────────── */}
      <div className="absolute bg-[#ececec] h-px left-0 right-0" style={{ top: 111 }} />

      {/* ── 4. 카테고리 바 (50px, top=112) ─────────────────── */}
      <div className="absolute left-0 right-0 h-[50px] bg-white border border-[#eaeaea] border-solid" style={{ top: 112 }}>
        {[
          { label: "이용방법", left: 40 },
          { label: "이벤트",   left: 158 },
          { label: "공지사항", left: 263 },
        ].map(({ label, left }) => (
          <button
            key={label}
            onClick={() => onCategoryClick?.(label)}
            className="absolute text-[#020202] text-[15px] tracking-[-0.75px] whitespace-nowrap cursor-pointer"
            style={{
              top: "50%",
              left,
              transform: "translateY(-50%)",
              fontFamily: "'Noto Sans KR', 'Noto Sans', sans-serif",
              fontVariationSettings: '"CTGR" 0, "wdth" 100',
              lineHeight: 0,
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <p style={{ lineHeight: "13px" }}>{label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
