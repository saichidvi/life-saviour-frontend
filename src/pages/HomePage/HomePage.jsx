import React from "react";
import "./HomePage.css";
import mobileIcon from "../../assets/svg_icons/mobile_icon.svg";
import fileUploadIcon from "../../assets/svg_icons/fileUpload_icon.svg";
import FormInput from "../../components/common/FormInput/FormInput";
import FormButton from "../../components/common/FormButton/FormButton";

export default function HomePage() {
  //Callback function which is sent to the child component
  const handleInputChange = (item) => {
    console.log(item);
  };

  const handleButtonClick = (item) => {
    event.preventDefault();
    console.log("I got clicked");
  }

  //Inputs related to this page form
  const inputsArray = [
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
  return (
    <div className="homePage__main">
      <form className="homePage__form" action="">
        <h4 className="form_heading mb-5">Book an Ambulance</h4>
        <div className="mb-2">
          {inputsArray.map((inputData, index) => {
            return <FormInput key={index} data={inputData}></FormInput>;
          })}
        </div>
        <div style={{marginTop : '2.5rem'}}>
          <FormButton data={{ name: "Request OTP" , handleButtonClick}}></FormButton>
        </div>
      </form>
    </div>
  );
}
