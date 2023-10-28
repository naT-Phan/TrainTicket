import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import MainPage from "./pages/homePage/MainPage";
import PopularRoute from "./pages/homePage/PopularRoute";
import "./asset/css/components.css";
import TicketPage from "./pages/ticketPage/TicketPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import ScrollToTop from "./components/functionComponent/ScrollToTop";
import PaymentCompletePage from "./pages/completedPage/PaymentCompletePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CheckTicketPage from "./pages/navPage/CheckTicketPage";
import NewsPage from "./pages/navPage/NewsPage";
import GetInTouchPage from "./pages/navPage/GetInTouchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header></Header>}>
          <Route
            path="/"
            element={
              <>
                <MainPage />
                <PopularRoute />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/ticket" element={<TicketPage />}></Route>
          <Route path="/checkticket" element={<CheckTicketPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/getintouch" element={<GetInTouchPage />}></Route>
          <Route path="/booking/:id" element={<PaymentPage />}></Route>
          <Route
            path="/payment/completed"
            element={<PaymentCompletePage />}
          ></Route>
          <Route
            path="/profile/user"
            element={<ProfilePage index={0} />}
          ></Route>
          <Route
            path="/profile/myticket"
            element={<ProfilePage index={1} />}
          ></Route>
          <Route
            path="/profile/saveticket"
            element={<ProfilePage index={2} />}
          ></Route>
          <Route
            path="/profile/voucher"
            element={<ProfilePage index={3} />}
          ></Route>
          <Route
            path="/profile/mycomment"
            element={<ProfilePage index={4} />}
          ></Route>{" "}
          <Route
            path="/profile/password"
            element={<ProfilePage index={5} />}
          ></Route>
          <Route
            path="/profile/logout"
            element={<ProfilePage index={6} />}
          ></Route>
        </Route>
      </Routes>
      <ScrollToTop />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
