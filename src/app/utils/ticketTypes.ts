export const CANONICAL_BOX_TICKET_TYPES = ["legendary", "mystery", "lucky", "starlight"] as const;
export const LEGACY_BOX_TICKET_TYPES = ["diamond", "gold", "platinum", "ruby"] as const;

export type CanonicalBoxTicketType = (typeof CANONICAL_BOX_TICKET_TYPES)[number];
export type LegacyBoxTicketType = (typeof LEGACY_BOX_TICKET_TYPES)[number];
export type BoxTicketType = CanonicalBoxTicketType | LegacyBoxTicketType;

export const LEGACY_BOX_TICKET_BY_CANONICAL: Record<CanonicalBoxTicketType, LegacyBoxTicketType> = {
  legendary: "diamond",
  mystery: "gold",
  lucky: "platinum",
  starlight: "ruby",
};

export const CANONICAL_BOX_TICKET_BY_LEGACY: Record<LegacyBoxTicketType, CanonicalBoxTicketType> = {
  diamond: "legendary",
  gold: "mystery",
  platinum: "lucky",
  ruby: "starlight",
};

export const BOX_TICKET_DISPLAY_NAMES: Record<CanonicalBoxTicketType, string> = {
  legendary: "전설의 상자",
  mystery: "미스터리 상자",
  lucky: "행운의 상자",
  starlight: "별빛 상자",
};

export function isLegacyBoxTicketType(value: unknown): value is LegacyBoxTicketType {
  return LEGACY_BOX_TICKET_TYPES.includes(String(value) as LegacyBoxTicketType);
}

export function isCanonicalBoxTicketType(value: unknown): value is CanonicalBoxTicketType {
  return CANONICAL_BOX_TICKET_TYPES.includes(String(value) as CanonicalBoxTicketType);
}

export function canonicalizeBoxTicketType<T extends string>(ticketType: T): CanonicalBoxTicketType | T {
  if (isCanonicalBoxTicketType(ticketType)) return ticketType;
  if (isLegacyBoxTicketType(ticketType)) return CANONICAL_BOX_TICKET_BY_LEGACY[ticketType];
  return ticketType;
}

export function toLegacyBoxTicketType<T extends string>(ticketType: T): LegacyBoxTicketType | T {
  if (isLegacyBoxTicketType(ticketType)) return ticketType;
  if (isCanonicalBoxTicketType(ticketType)) return LEGACY_BOX_TICKET_BY_CANONICAL[ticketType];
  return ticketType;
}

export function getBoxTicketDisplayName(ticketType: string) {
  const canonicalType = canonicalizeBoxTicketType(ticketType);
  return isCanonicalBoxTicketType(canonicalType) ? BOX_TICKET_DISPLAY_NAMES[canonicalType] : ticketType;
}
