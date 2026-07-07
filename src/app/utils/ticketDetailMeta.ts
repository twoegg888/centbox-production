import { TicketType } from "../types";
import imgRuby from "figma:asset/02a9a581d7e7cf5847a4d891be812058ce8409af.png";
import imgGold from "figma:asset/fa1f6a548a94aeafe98cb1c1b77f91a89f5ff7ca.png";
import imgDiamond from "figma:asset/b7ac3182447c82f15ab3c7bf8b1397aedd985e1c.png";
import imgPlatinum from "figma:asset/915fa6551696b9d851e927eea54af0715e8833ce.png";
import imgBeauty from "figma:asset/203c864af61feab09e3ab1afba0475fee98d811d.png";
import imgMeat from "figma:asset/110157f20f9d259cf10ef370b6aa3b30ec937e1f.png";
import imgJewelry from "figma:asset/a9dbf0d55cefb05c4def32b65330fee4df00d4e6.png";
import {
  canonicalizeBoxTicketType,
  getBoxTicketDisplayName,
  isCanonicalBoxTicketType,
  isLegacyBoxTicketType,
} from "./ticketTypes";

export type TicketDetailMeta = {
  ticketName: string;
  mainImage: string;
  ticketType: TicketType;
};

export const TICKET_DETAIL_META: Record<TicketType, TicketDetailMeta> = {
  legendary: { ticketName: "전설의 상자", mainImage: imgDiamond, ticketType: "legendary" },
  mystery: { ticketName: "미스터리 상자", mainImage: imgGold, ticketType: "mystery" },
  lucky: { ticketName: "행운의 상자", mainImage: imgPlatinum, ticketType: "lucky" },
  starlight: { ticketName: "별빛 상자", mainImage: imgRuby, ticketType: "starlight" },
  purdal: { ticketName: "퍼달이의 주머니", mainImage: imgJewelry, ticketType: "purdal" },
  ruby: { ticketName: "별빛 상자", mainImage: imgRuby, ticketType: "starlight" },
  gold: { ticketName: "미스터리 상자", mainImage: imgGold, ticketType: "mystery" },
  diamond: { ticketName: "전설의 상자", mainImage: imgDiamond, ticketType: "legendary" },
  platinum: { ticketName: "행운의 상자", mainImage: imgPlatinum, ticketType: "lucky" },
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

  if (isCanonicalBoxTicketType(normalizedName) || isLegacyBoxTicketType(normalizedName)) {
    return canonicalizeBoxTicketType(normalizedName) as TicketType;
  }

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
  const fallbackValue = fallbackTicketType ? String(canonicalizeBoxTicketType(fallbackTicketType)) : "";
  const value = productName.trim() || fallbackValue;
  return value ? `/ticket/${encodeURIComponent(value)}` : "/";
}

export function getTicketDisplayName(ticketType: string) {
  if (isCanonicalBoxTicketType(ticketType) || isLegacyBoxTicketType(ticketType)) {
    return getBoxTicketDisplayName(ticketType);
  }

  return TICKET_DETAIL_META[ticketType as TicketType]?.ticketName || ticketType;
}

export function getTicketFallbackImage(ticketType: string) {
  const canonicalType = canonicalizeBoxTicketType(ticketType) as TicketType;
  return TICKET_DETAIL_META[canonicalType]?.mainImage || TICKET_DETAIL_META[ticketType as TicketType]?.mainImage || "";
}
