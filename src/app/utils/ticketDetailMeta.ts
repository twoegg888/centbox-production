import { TicketType } from "../types";
import imgRuby from "figma:asset/02a9a581d7e7cf5847a4d891be812058ce8409af.png";
import imgGold from "figma:asset/fa1f6a548a94aeafe98cb1c1b77f91a89f5ff7ca.png";
import imgDiamond from "figma:asset/b7ac3182447c82f15ab3c7bf8b1397aedd985e1c.png";
import imgPlatinum from "figma:asset/915fa6551696b9d851e927eea54af0715e8833ce.png";
import imgBeauty from "figma:asset/203c864af61feab09e3ab1afba0475fee98d811d.png";
import imgMeat from "figma:asset/110157f20f9d259cf10ef370b6aa3b30ec937e1f.png";
import imgJewelry from "figma:asset/a9dbf0d55cefb05c4def32b65330fee4df00d4e6.png";

export type TicketDetailMeta = {
  ticketName: string;
  mainImage: string;
  ticketType: TicketType;
};

export const TICKET_DETAIL_META: Record<TicketType, TicketDetailMeta> = {
  ruby: { ticketName: "루비 박스", mainImage: imgRuby, ticketType: "ruby" },
  gold: { ticketName: "골드 박스", mainImage: imgGold, ticketType: "gold" },
  diamond: { ticketName: "다이아 박스", mainImage: imgDiamond, ticketType: "diamond" },
  platinum: { ticketName: "플래티넘 박스", mainImage: imgPlatinum, ticketType: "platinum" },
  beauty: { ticketName: "뷰티 티켓", mainImage: imgBeauty, ticketType: "beauty" },
  meat: { ticketName: "미트 티켓", mainImage: imgMeat, ticketType: "meat" },
  jewelry: { ticketName: "주얼리 티켓", mainImage: imgJewelry, ticketType: "jewelry" },
};

function normalizeProductName(value: string) {
  return decodeURIComponent(value)
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[-_/]/g, "");
}

export function resolveTicketTypeFromProductName(productName: string): TicketType | null {
  const normalizedName = normalizeProductName(productName);

  if (normalizedName in TICKET_DETAIL_META) {
    return normalizedName as TicketType;
  }

  return null;
}

export function resolveTicketDetailMeta(productNameOrType: string): TicketDetailMeta | null {
  const ticketType = resolveTicketTypeFromProductName(productNameOrType);
  return ticketType ? TICKET_DETAIL_META[ticketType] : null;
}

export function buildTicketDetailPath(productName: string, fallbackTicketType?: string) {
  const value = productName.trim() || fallbackTicketType || "";
  return value ? `/ticket/${encodeURIComponent(value)}` : "/";
}
