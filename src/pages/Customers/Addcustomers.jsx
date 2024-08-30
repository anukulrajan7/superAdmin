import React, { useState } from "react";
import Topbar2 from "../../layouts/Topbar2";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";

export default function FFormElementsInputPlainLgRequired() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const handleFormSubmit = async () => {
    try {
      const formData = {
        fullName,
        email,
        phoneNumber,
        alternatePhoneNumber,
        aadhaarNumber,
        panNumber,
        country,
        state,
        district,
      };

      const response = await axios.post(
        "http://localhost:7000/api/v1/customerAdd",
        formData
      );

      console.log(response.data);
      // Redirect to the desired page after successful submission
      // navigate('../Merchant'); // You can use navigate() function here if needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <Topbar2 />
      <div className="bg-white">
        <div className="flex justify-between">
          <div className="font-bold m-5 flex items-center text-lg">
            <BsPeopleFill className="mr-2" size={22} />
            Add Customer
          </div>

          {/* Close */}
          <div className="flex mr-4">
            <div
              className="flex items-stretch my-4 focus:bg-gray-900"
              onClick={() => {
                navigate("../customers");
              }}
            >
              <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
                <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="ml-5 font-semibold text-lg">Basic Information</div>
        <div className="ml-5 mt-5 flex flex-col gap-5">
          <div className="w-[20%]">
            <label className="block mb-2">Full Name</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="Enter Business name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">E-Mail</label>
            <input
              class="input-field"
              type="email"
              placeholder="name@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">Contact no.</label>
            <input
              class="input-field"
              type="tel"
              placeholder="+91 - 7983163574"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="ml-5 mt-5 flex flex-col gap-5">
          <div>
            <label className="block mb-2">Country</label>
            <select
              name="Country"
              id=""
              className="mr-20"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="America">America</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">State</label>
            <input
              class="input-field"
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">District</label>
            <input
              class="input-field"
              type="text"
              placeholder="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div
          className="flex items-stretch m-5 focus:bg-gray-900"
          onClick={() => {
            navigate("../customers");
          }}
        >
          <button
            onClick={handleFormSubmit}
            className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  "
          >
            Submit
            <MdOutlineSend className="ml-2 scale-125  fill-white" />
          </button>
        </div>
      </div>
    </>
  );
}
