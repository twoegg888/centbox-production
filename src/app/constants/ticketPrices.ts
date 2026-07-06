// 티켓 카테고리별 가격 (포인트)
export const TICKET_PRICES = {
  legendary: 49000,
  mystery: 14900,
  lucky: 99000,
  starlight: 9900,
  ruby: 9900,
  jewelry: 19900,
  meat: 39900,
  beauty: 24900,
  platinum: 99000,
  diamond: 49000,
  gold: 14900,
} as const;

export type TicketType = keyof typeof TICKET_PRICES;
