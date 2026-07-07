import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import WinningTickets from "./pages/WinningTickets";
import WinningTicketDetail from "./pages/WinningTicketDetail";
import Exchange from "./pages/Exchange";
import Points from "./pages/Points";
import LuckyDraw from "./pages/LuckyDraw";
import MyPage from "./pages/MyPage";
import TicketDetail from "./pages/TicketDetail";
import Login from "./pages/Login";
import LoginCallback from "./pages/LoginCallback";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFail from "./pages/PaymentFail";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import {
  EventsRoutePage,
  FaqRoutePage,
  InquiryRoutePage,
  NoticeRoutePage,
  PrivacyRoutePage,
  ProbabilityRoutePage,
  ServiceIntroRoutePage,
  TermsRoutePage,
} from "./pages/FooterRoutePages";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/login/callback",
    Component: LoginCallback,
  },
  {
    path: "/payment/success",
    Component: PaymentSuccess,
  },
  {
    path: "/cafe24",
    Component: PaymentSuccess,
  },
  {
    path: "/payment/fail",
    Component: PaymentFail,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: Admin,
  },
  {
    path: "/admin/*",
    Component: Admin,
  },
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/winning-tickets",
    Component: WinningTickets,
  },
  {
    path: "/winning-ticket/:id",
    Component: WinningTicketDetail,
  },
  {
    path: "/exchange",
    Component: Exchange,
  },
  {
    path: "/points",
    Component: Points,
  },
  {
    path: "/lucky-draw",
    Component: LuckyDraw,
  },
  {
    path: "/notice",
    Component: NoticeRoutePage,
  },
  {
    path: "/events",
    Component: EventsRoutePage,
  },
  {
    path: "/faq",
    Component: FaqRoutePage,
  },
  {
    path: "/service-intro",
    Component: ServiceIntroRoutePage,
  },
  {
    path: "/probability",
    Component: ProbabilityRoutePage,
  },
  {
    path: "/inquiry",
    Component: InquiryRoutePage,
  },
  {
    path: "/terms",
    Component: TermsRoutePage,
  },
  {
    path: "/privacy",
    Component: PrivacyRoutePage,
  },
  {
    path: "/my-page",
    Component: MyPage,
  },
  {
    path: "/ticket/:productNameOrType",
    Component: TicketDetail,
  },
  {
    path: "/tickets/:productNameOrType",
    Component: TicketDetail,
  },
]);
