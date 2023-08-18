import "./index.css";

import CarouselForLogin from "../LoginForm/CarouselForLogin";
import companyLogo from "../../Assets/Icons/CompanyLogo.svg";

const SetPassword = () => {
  return (
    <div className="set-password-container">
      <div className="set-password-left-container">
        <CarouselForLogin />
      </div>
      <div className="set-password-right-container">
        <img src={companyLogo} className="set-password-company-logo" />
        <h1 className="set-password-heading">
          Set a new password for your account
        </h1>
      </div>
    </div>
  );
};
export default SetPassword;
