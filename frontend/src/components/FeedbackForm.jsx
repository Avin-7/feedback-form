import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function FeedbackForm() {
  const [frequency, setFrequency] = useState("");
  const [qualityValue, setQualityValue] = useState(2);
  const [serviceValue, setServiceValue] = useState(2);
  const [expValue, setExpValue] = useState(2);
  const [recommended, setRecommended] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [recieveFollowUp, setRecieeveFollowup] = useState(false);

  const sendData = async () => {
    const data = {
      frequency: frequency,
      foodQuality: qualityValue,
      serviceQuality: serviceValue,
      overallExperience: expValue,
      recommended: recommended,
      suggestions: suggestion,
      personalFollowUp: recieveFollowUp,
    };

    const response = await fetch("http://localhost:8000/create-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <div className="pt-[16px] px-[8px]">
        <h1 className=" font-poppins font-bold text-[20px] uppercase  text-center ">
          Hello, Thanks for Visiting
        </h1>
        <p className=" font-poppins font-normal text-[14px] text-center">
          Please help us improve our cafe services by filling in our feedback
          form. Thank you!
        </p>
      </div>
      <div className="pt-[16px] px-[16px]">
        <h2 className=" font-poppins font-bold text-[14px] uppercase mb-2 text-center ">
          How often do you visit here
        </h2>
        <div className=" flex justify-center items-center rounded-[8px] border h-[45px]">
          <select
            className=" w-[95%] border-none outline-0 font-poppins"
            name="frequency"
            onClick={(e) => setFrequency(e.target.value)}
          >
            <option className=" font-poppins w-[95%]" value="Regularly">
              Regularly
            </option>
            <option className=" font-poppins w-[95%]" value="Regularly">
              Occasionally
            </option>
          </select>
        </div>
      </div>
      <div className="pt-[16px] px-[16px]">
        <h2 className=" font-poppins font-bold text-[14px] uppercase mb-2 text-center ">
          Quality of the food
        </h2>
        <div className="w-[400px] flex justify-center items-center">
          <Rating
            size={"large"}
            name="quality"
            value={qualityValue}
            onChange={(event, newValue) => {
              setQualityValue(newValue);
            }}
          />
        </div>
      </div>
      <div className="pt-[16px] px-[16px]">
        <h2 className=" font-poppins font-bold text-[14px] uppercase mb-2 text-center ">
          Service Quality
        </h2>
        <div className="w-[400px] flex justify-center items-center">
          <Rating
            size={"large"}
            name="service"
            value={serviceValue}
            onChange={(event, newValue) => {
              setServiceValue(newValue);
            }}
          />
        </div>
      </div>
      <div className="pt-[16px] px-[16px]">
        <h2 className=" font-poppins font-bold text-[14px] uppercase mb-2 text-center ">
          Overall Experience
        </h2>
        <div className="w-[400px] flex justify-center items-center">
          <Rating
            size={"large"}
            name="experience"
            value={expValue}
            onChange={(event, newValue) => {
              setExpValue(newValue);
            }}
          />
        </div>
      </div>
      <div className="pt-[16px] px-[16px]">
        <h2 className=" font-poppins font-bold text-[14px] uppercase mb-2 text-center ">
          Would you recommend our restaurant to others?
        </h2>
        <div className=" flex justify-center items-center gap-5">
          <div className=" flex justify-center gap-2">
            <label className=" uppercase font-poppins text-[#bbbbbb] text-[14px]">
              Yes
            </label>
            <input
              type="radio"
              name="yes"
              id="opinion"
              onClick={(e) => setRecommended("yes")}
            />
          </div>
          <div className=" flex gap-2">
            <label className=" uppercase font-poppins text-[#bbbbbb] text-[14px]">
              No
            </label>
            <input
              type="radio"
              name="no"
              id="opinion"
              onClick={(e) => setRecommended("no")}
            />
          </div>
        </div>
      </div>
      <div className="pt-[16px] px-[16px]">
        <h2 className=" font-poppins font-bold text-[14px] uppercase mb-2 text-center ">
          Your suggestions to improve
        </h2>
        <div>
          <textarea
            name="suggestion"
            className="border border-[#bbbbbb] w-full h-[186px] rounded-[8px]"
            draggable
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-2 pt-[16px] px-[16px]">
        <input
          type="checkbox"
          name="follow-up"
          id=""
          onSelect={(e) => setRecieeveFollowup(!recieveFollowUp)}
        />
        <label className=" uppercase font-poppins text-[16px] font-bold ">
          Receive personal follow up to your feedback
        </label>
      </div>
      <div className=" flex justify-center items-center px-4 pt-2">
        <button
          className=" w-full h-[56px] rounded-[8px] text-center py-[12px] px-[20px] bg-[#D83D4C]  font-poppins font-bold text-[14px] uppercase mb-2 text-white"
          onClick={sendData}
        >
          SUBMIT FEEDBACK
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
