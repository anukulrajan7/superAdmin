import React, { useState } from "react";
import Topbar3 from "../layouts/Topbar3";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsImageFill } from "react-icons/bs";

export default function FFormElementsInputPlainLgRequired() {
  const navigate = useNavigate();

  return (
    <>
      <Topbar3 />
      <div className="bg-white">
        <div className="flex justify-between">
          <div className="font-bold m-5 flex items-center text-lg">
            My Account
          </div>

          {/* Close */}
          <div className="flex mr-4">
            {/* <div
              className="flex items-stretch my-4 focus:bg-gray-900"
              onClick={() => {
                navigate("../");
              }}
            >
              <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
                <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
                Close
              </button>
            </div> */}
          </div>
        </div>

        <div className="flex items-center gap-0 ml-5">
          <input type="file" className="" />
          <BsImageFill/>
          <label>Upload Image</label>
        </div>

        {/* Input Fields */}
        
        <div className="ml-5 mt-5 flex  gap-20">
          <div className="">
            <label className="block mb-2">First Name</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="Enter Your name"
            />
          </div>
          <div className="">
            <label className="block mb-2">Last Name</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="Enter Your Last name"
            />
          </div>
          <div className="">
            <label className="block mb-2">E-Mail</label>
            <input
              class="input-field  "
              type="email"
              placeholder="name@gmail.com"
            />
          </div>
         
        </div>

        <div className="ml-5 mt-7 flex  gap-20">
          <div className="">
            <label className="block mb-2">Password</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="******"
            />
          </div>
          <div className="">
            <label className="block mb-2">Confirm Password</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="*******"
            />
          </div>
         
        </div>

      
      
      
        {/* Submit Button */}
        <div
          className="flex items-stretch m-5 focus:bg-gray-900"
          onClick={() => {
            navigate("../");
          }}
        >
          <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
            Submit
            <MdOutlineSend className="ml-2 scale-125  fill-white" />
          </button>
        </div>
      </div>
    </>
  );
}
