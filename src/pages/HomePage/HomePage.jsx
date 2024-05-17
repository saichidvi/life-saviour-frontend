import React from "react";
import "./HomePage.css";
import mobileIamge from "../../assets/svg_icons/mobile_icon.svg"
import FormInput from "../../components/common/FormInput/FormInput";

export default function HomePage() {
  //Callback function which is sent to the child component
  const handleInputChange = (item) => {
    console.log(item);
  };

  //Inputs related to this page form
  const inputsArray = [
    {
      lableName: "Mobile Number",
      inputImageLink: mobileIamge,
      placeHolder: "Enter Your Mobile Number",
      inputType: "tel",
      name: "mobile",
      onInputChange: handleInputChange,
    },
  ];
  return (
    <div className="homePage__main">
      <form className="homePage__form" action="">
        {inputsArray.map((inputData, index) => {
          return <FormInput key={index} data={inputData}></FormInput>;
        })}
      </form>
    </div>
  );
}
