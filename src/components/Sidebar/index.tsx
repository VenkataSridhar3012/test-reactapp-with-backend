import { RiShutDownLine } from "react-icons/ri";

import SidebarItem from "../SidebarItem";

import "./index.css";
import companyLogo from "../../Assets/Icons/CompanyLogo.svg";
import homeIcon from "../../Assets/Icons/homeIcon.svg";
import businessIcon from "../../Assets/Icons/businessIcon.svg";
import bonusCreditsIcon from "../../Assets/Icons/bonusCreditsIcon.svg";
import partnersIcon from "../../Assets/Icons/partnersIcon.svg";
import milestonesIcon from "../../Assets/Icons/milestonesIcon.svg";
import insightsIcon from "../../Assets/Icons/insightsIcon.svg";
import ticketsIcon from "../../Assets/Icons/ticketsIcon.svg";
import fireIcon from "../../Assets/Icons/fireIcon.svg";
import settingsIcon from "../../Assets/Icons/settingsIcon.svg";
import { useNavigate } from "react-router-dom";

const sideBarOptionsList = [
  { id: "HOME", displayText: "Home", icon: homeIcon, path: "/" },
  {
    id: "BUSINESS",
    displayText: "Business",
    icon: businessIcon,
    path: "/business",
    subOptions: [
      { id: "ONLINE", displayText: "Online", path: "/business/online" },
      { id: "OFFLINE", displayText: "Offline", path: "/business/offline" },
    ],
  },
  {
    id: "BONUSCREDITS",
    displayText: "Bonus credtis",
    icon: bonusCreditsIcon,
    path: "/bonus-credits",
  },
  {
    id: "PARTNERS",
    displayText: "Partners",
    icon: partnersIcon,
    path: "/partners",
  },
  {
    id: "GOALS",
    displayText: "Goals",
    icon: milestonesIcon,
    path: "/goals",
  },
  {
    id: "INSIGHTS",
    displayText: "Insights",
    icon: insightsIcon,
    path: "/insights",
  },
  {
    id: "TICKETS",
    displayText: "Tickets",
    icon: ticketsIcon,
    path: "/tickets",
  },
  { id: "MCOFFER", displayText: "MC Offer", icon: fireIcon, path: "/mc-offer" },
  { id: "PRICING", displayText: "Pricing", icon: fireIcon, path: "/pricing" },
  { id: "PAYOUTS", displayText: "Payouts", icon: fireIcon, path: "/payouts" },
];

type SidebarProps = {
  activeId: string;
};

const Sidebar = (props: SidebarProps) => {
  const navigate = useNavigate();
  const { activeId } = props;

  const onclickLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <aside className="sidebar-container">
      <img src={companyLogo} alt="company logo" className="company-icon" />
      <ul className="sidebar-items-list">
        {sideBarOptionsList.map((eachItem) => (
          <SidebarItem
            key={eachItem.id}
            eachItem={eachItem}
            isActive={activeId === eachItem.id}
          />
        ))}
      </ul>
      <div className="logout-container">
        <button className="btn">
          <img src={settingsIcon} alt="settings" className="settings-icon" />
        </button>
        <div className="hr"></div>
        <button className="btn" onClick={onclickLogout}>
          <RiShutDownLine size={25} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
