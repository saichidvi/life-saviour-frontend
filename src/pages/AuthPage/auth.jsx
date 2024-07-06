import FormButton from "../../components/common/FormButton/formButton";
import FormInput from "../../components/common/FormInput/formInput";
import "./auth.css";

import emailIcon from "../../assets/svg_icons/email_icon.svg";
import eyeIcon from "../../assets/svg_icons/eye_icon.svg";
import userIcon from "../../assets/svg_icons/user_icon.svg";
import mobileIcon from "../../assets/svg_icons/mobile_icon.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//various API`s
import { loginUser } from "../../store/api";

const Auth = () => {
  const [authType, setAuthType] = useState("logIn");
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      email: "rameshreddybaddam7@gmail.com",
      password: "ramesh",
    };
    console.log("I am here");
    dispatch(loginUser(payload));
  }, []);

  //Callback function which is sent to the child component
  const handleInputChange = (item) => {
    console.log(item);
  };
  const handleButtonClick = (item) => {
    event.preventDefault();
    console.log("I got clicked");
  };

  const logInDriver = [
    {
      lableName: "Email",
      inputImageLink: emailIcon,
      placeHolder: "Enter Your Email Id",
      inputType: "email",
      name: "email",
      onInputChange: handleInputChange,
    },
    {
      lableName: "Password",
      inputImageLink: eyeIcon,
      placeHolder: "Enter Your Password",
      inputType: "password",
      name: "password",
      onInputChange: handleInputChange,
    },
  ];
  const signUpDriver = [
    {
      lableName: "User Name",
      inputImageLink: userIcon,
      placeHolder: "Enter Your User Name",
      inputType: "text",
      name: "userName",
      onInputChange: handleInputChange,
    },
    {
      lableName: "Password",
      inputImageLink: eyeIcon,
      placeHolder: "Enter Your Password",
      inputType: "password",
      name: "password",
      onInputChange: handleInputChange,
    },
    {
      lableName: "Re Enter Password",
      inputImageLink: eyeIcon,
      placeHolder: "Enter Your Password Again",
      inputType: "password",
      name: "password",
      onInputChange: handleInputChange,
    },
    {
      lableName: "Mobile Number",
      inputImageLink: mobileIcon,
      placeHolder: "Enter Your Mobile Number",
      inputType: "tel",
      name: "mobile",
      onInputChange: handleInputChange,
    },
  ];
  return (
    <div
      className="authPage_main"
      style={{
        margin: authType === "signUp" ? "6% auto" : "10% auto",
        padding: authType === "signUp" ? "2rem" : "0rem",
      }}>
      {authType === "logIn" ? (
        <form className="authPage__form" action="">
          <h4 className="form_heading mb-5">Login as Driver</h4>
          <div className="mb-2">
            {logInDriver.map((inputData, index) => {
              return <FormInput key={index} data={inputData}></FormInput>;
            })}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <FormButton
              data={{ name: "Log In", handleButtonClick }}></FormButton>
            <span className="btn_styled_text">
              Not Registered ?{" "}
              <a
                className="primary_text_color"
                href="#"
                onClick={() => {
                  setAuthType("signUp");
                }}>
                Click here
              </a>{" "}
              to Register as a Driver
            </span>
          </div>
        </form>
      ) : (
        <form className="authPage__form" action="">
          <h4 className="form_heading mb-5">Register as a Driver</h4>
          <div className="mb-2">
            {signUpDriver.map((inputData, index) => {
              return <FormInput key={index} data={inputData}></FormInput>;
            })}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <FormButton
              data={{ name: "Request OTP", handleButtonClick }}></FormButton>
            <span className="btn_styled_text">
              Already Registered ?{" "}
              <a
                className="primary_text_color"
                href="#"
                onClick={() => {
                  setAuthType("logIn");
                }}>
                Click here
              </a>{" "}
              to Login as a Driver
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
export default Auth;
