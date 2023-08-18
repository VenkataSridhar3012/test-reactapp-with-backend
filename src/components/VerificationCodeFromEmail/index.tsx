import CarouselForLogin from "../LoginForm/CarouselForLogin";
import companyLogo from "../../Assets/Icons/CompanyLogo.svg";
import "./index.css";
import ReactInputVerificationCode from "react-input-verification-code";

const VerificationCodeForEmail = () => {
  return (
    <div className="verification-form">
      <div className="verification-form-left-container">
        <CarouselForLogin />
      </div>
      <div className="verification-form-right-container">
        <img
          src={companyLogo}
          alt="Company logo"
          className="company-logo-in-verification-form"
        />
        <form>
          <h1 className="verification-form-heading">
            We have sent a verification code to your email
          </h1>
          <p className="verification-form-description">
            Enter verification code*
          </p>
          <div className="custom-styles">
            <ReactInputVerificationCode placeholder="" />
          </div>
          <p className="resend-code">Resend code</p>
          <button className="submit-button-for-verification">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};
export default VerificationCodeForEmail;
