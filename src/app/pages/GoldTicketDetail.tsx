import TicketDetailTemplate from "../components/TicketDetailTemplate";

const GOLD_DETAIL_IMAGE_URL = "https://dbase01.cafe24.com/Centbox/gold_detail1.png";

export default function GoldTicketDetail() {
  return <TicketDetailTemplate ticketName="미스터리 상자" mainImage={GOLD_DETAIL_IMAGE_URL} ticketType="mystery" />;
}
