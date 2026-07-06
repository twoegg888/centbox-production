import TicketDetailTemplate from "../components/TicketDetailTemplate";

const RUBY_DETAIL_IMAGE_URL = "https://dbase01.cafe24.com/Centbox/ruby_detail1.png";

export default function RubyTicketDetail() {
  return <TicketDetailTemplate ticketName="별빛 상자" mainImage={RUBY_DETAIL_IMAGE_URL} ticketType="starlight" />;
}
