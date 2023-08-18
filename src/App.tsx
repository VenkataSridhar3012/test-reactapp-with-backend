import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Business from "./components/MagicShakeBusiness/Business";
import BonusCredits from "./components/MagicShakeBonusCredits/BonusTable&Drawer";
import Partners from "./components/Partners";
import Goals from "./components/Goals";
import Insights from "./components/Insights";
import Tickets from "./components/Tickets";
import McOffer from "./components/McOffer";
import Pricing from "./components/MagicShakePricing/Pricing";
import Payouts from "./components/Payouts";
import SeparateTicketTable from "./components/Tickets/SeparateTicketTable";

import "./App.css";
import PricingDetail from "./components/MagicShakePricing/PricingDetails";
import LoginForm from "./components/LoginForm";
import BasicTabs from "./components/RestuarantDetails/BusinessDetailTabs";
import BonusCreditsTabs from "./components/MagicShakeBonusCredits/BonusCreditDetails";

export const baseUrl="https://go.magicshake.app/"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/bonus-credits" element={<BonusCredits />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/mc-offer" element={<McOffer />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/pricing/details" element={<PricingDetail />} />
          <Route path="/business/details/:id/:name" element={<BasicTabs />} />
          <Route
            path="/Tickets/details/:id/:userName/:_id"
            element={<SeparateTicketTable />}
          />
          <Route
            path="/bonuscredit-details/:title"
            element={<BonusCreditsTabs />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
