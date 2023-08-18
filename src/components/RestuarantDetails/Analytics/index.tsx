import "./index.css";
import campaignsIcon from "../../../Assets/Icons/winsicon.svg";
import claimsicon from "../../../Assets/Icons/claimsicon.svg";
import bookmarkicon from "../../../Assets/Icons/bookmarkicon.svg";
import activecampaignicon from "../../../Assets/Icons/activecampaignicon.svg";
import spinicon from "../../../Assets/Icons/spinicon.svg";
import { useLocation } from "react-router-dom";

type analyticalDataProps = {
  icon: string;
  title: string;
  value: string;
  alt: string;
  line?: string;
};
const AnalyticData = (props: analyticalDataProps) => {
  const { icon, title, value, alt, line } = props;
  return (
    <div className="analytical-data-container">
      <div className="icon-title-container">
        <img src={icon} className="campaigns-icon" alt={alt} />
        <div className="shake-detail-container">
          <span className="analytical-title">{title}</span>
          <span className="analytical-value">{value}</span>
        </div>
      </div>
      <hr className={line} />
    </div>
  );
};

const Analytics = () => {
  const location = useLocation();
  const data: any = location.state;
  const spinwheelData = data.spinWheel;
  const shakeOfferData = data.shakeOffer;

  console.log("shakedata", shakeOfferData);

  return (
    <>
      <div className="analytical-container">
        <h1 className="shake-offer-heading">Shake Offer Insights</h1>
        <div className="analytical-data-list">
          <AnalyticData
            icon={campaignsIcon}
            title="Campaigns"
            value={` ${shakeOfferData.campaigns}`}
            alt="campaigns"
            line="separating-line"
          />
          <AnalyticData
            icon={claimsicon}
            title="Claims"
            value={shakeOfferData.claims}
            alt="claims"
            line="separating-line"
          />
          <AnalyticData
            icon={bookmarkicon}
            title="Bookmarks"
            value={shakeOfferData.bookmarks}
            alt="bookmark"
            line="separating-line"
          />
          <AnalyticData
            icon={activecampaignicon}
            title="Active campaigns"
            value={shakeOfferData.activeCampaigns}
            alt="active"
            line="separating-line"
          />
          <AnalyticData
            icon={campaignsIcon}
            title="Amount spent"
            value={shakeOfferData.amountSpent}
            alt=" amount spent"
          />
        </div>
      </div>

      <div className="analytical-container">
        <h1 className="shake-offer-heading">Spinwheel Offer Insights</h1>
        <div className="analytical-data-list">
          <AnalyticData
            icon={campaignsIcon}
            title="Campaigns"
            value={` ${spinwheelData.campaigns}`}
            alt="Campaigns"
            line="separating-line"
          />
          <AnalyticData
            icon={claimsicon}
            title="Claims"
            value={spinwheelData.claims}
            alt="claims"
            line="separating-line"
          />
          <AnalyticData
            icon={spinicon}
            title="Spins"
            value={spinwheelData.wins}
            alt="bookmark"
            line="separating-line"
          />
          <AnalyticData
            icon={activecampaignicon}
            title="Active campaigns"
            value={spinwheelData.activeCampaigns}
            alt="active"
            line="separating-line"
          />
          <AnalyticData
            icon={campaignsIcon}
            title="Amount spent"
            value={spinwheelData.amountSpent}
            alt=" amount spent"
          />
        </div>
      </div>
    </>
  );
};

export default Analytics;
