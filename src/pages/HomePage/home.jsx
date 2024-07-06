import React, { useEffect } from "react";
import "./home.css";
import userIcon from "../../assets/svg_icons/user_icon.svg";
import emailIcon from "../../assets/svg_icons/email_icon.svg";
import mobileIcon from "../../assets/svg_icons/mobile_icon.svg";
import FormInput from "../../components/common/FormInput/formInput";
import FormButton from "../../components/common/FormButton/formButton";
import fileUploadIcon from "../../assets/svg_icons/fileUpload_icon.svg";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state;
  });
  const [ambulanceBooked, setAmbulanceBooked] = useState(false);

  //Callback function which is sent to the child component
  const handleInputChange = (item) => {
    console.log(item);
  };

  const handleButtonClick = (item) => {
    event.preventDefault();
    console.log("I got clicked");
  };

  const bookAmbulanceInputsArray = [
    {
      lableName: "Email",
      inputImageLink: emailIcon,
      placeHolder: "Enter Your Email Id",
      inputType: "email",
      name: "email",
      onInputChange: handleInputChange,
    },
    {
      lableName: "User Name",
      inputImageLink: userIcon,
      placeHolder: "Enter Your User Name",
      inputType: "text",
      name: "userName",
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
    {
      lableName: "Upload Image",
      inputImageLink: fileUploadIcon,
      placeHolder: "Upload the Image",
      inputType: "file",
      name: "image",
      onInputChange: handleInputChange,
    },
  ];
  const chatWithDriverInputsArray = [
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
    <div className="homePage__main">
      {ambulanceBooked ? (
        <>
          <form className="homePage__form" action="">
            <h4 className="form_heading mb-5">Chat With Driver</h4>
            <div className="mb-2">
              {chatWithDriverInputsArray.map((inputData, index) => {
                return <FormInput key={index} data={inputData}></FormInput>;
              })}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <FormButton
                data={{ name: "Request OTP", handleButtonClick }}></FormButton>
              <span className="btn_styled_text">
                Not booked ?{" "}
                <a
                  className="primary_text_color"
                  href="#"
                  onClick={() => {
                    setAmbulanceBooked(false);
                  }}>
                  Click here
                </a>{" "}
                to Book an Ambulance
              </span>
            </div>
          </form>
        </>
      ) : (
        <>
          <form className="homePage__form" action="">
            <h4 className="form_heading mb-5">Book an Ambulance</h4>
            <div className="mb-2">
              {bookAmbulanceInputsArray.map((inputData, index) => {
                return <FormInput key={index} data={inputData}></FormInput>;
              })}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <FormButton
                data={{
                  name: "Book Ambulance",
                  handleButtonClick,
                }}></FormButton>
              <span className="btn_styled_text">
                Already booked ?{" "}
                <a
                  className="primary_text_color"
                  href="#"
                  onClick={() => {
                    setAmbulanceBooked(true);
                  }}>
                  Click here
                </a>{" "}
                to Chat with driver
              </span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
