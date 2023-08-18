import "./index.css";
import CarouselForLogin from "../LoginForm/CarouselForLogin";
import companyLogo from "../../Assets/Icons/CompanyLogo.svg";
import EmailInputForForgotPassword from "../ForgotPasswordForm/EmailInputForForgotPassword";

const ForgotPasswordForm = () => {
  return (
    <div className="forgot-password-form-main-container">
      <div className="forgot-password-form-left-container">
        <CarouselForLogin />
      </div>
      <div className="forgot-password-form-right-container">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="company-logo-size-in-forgotform"
        />
        <form>
          <h1 className="forgot-password-heading">Forgot Password?</h1>
          <p className="forgot-password-description">
            Resetting password is easy. Just tell us the email you and we will
            send you a verification code
          </p>
          <EmailInputForForgotPassword />
          <p className="valid-email-description">
            Please provide your work email only
          </p>
          <button className="send-email-button">SEND EMAIL</button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
