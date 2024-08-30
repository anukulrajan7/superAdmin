import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "./Notificationdata";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[black] p-4  border-l-[1px] border-[grey]">
        <div className="max-w-[3640px]  flex flex-row items-center justify-between  ">
          <div className=" flex flex-row  gap-[150px] sm:gap-[100px] justify-between items-center  ">
            <div class="flex items-stretch   ">
              <input
                type="text"
                class=" sm:px-4 px-2 sm:py-2 py-0 rounded-l-md focus:outline-none   "
              />

              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none  ">
                <ion-icon
                  name="search-outline"
                  className="text-white"
                ></ion-icon>
              </button>
            </div>
          </div>

          <div className="flex gap-1">
            <div className="text-white cursor-pointer">
              <MdCircleNotifications onClick={() => setShow(!show)} size={25} />
            </div>
            {/* notification section starts here */}
            <div
              className={`
      bg-[#090707]  text-white fixed  w-[29%] right-[6px]    z-10    
        duration-700 ${show ? "top-[63px]" : "top-[-100%]"}
        `}
            >
              <div className="flex justify-between mb-3 px-2">
                <span>Notifications</span>
                <span className="text-[#ff00f27c]">Mark all as Read</span>
              </div>
              <div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-[#090707] max-h-[200px] ">
              {links.map((link) => (
               
                <div className="flex justify-between items-center px-3  ">
                  <div className="flex gap-2 items-center">
                    <img
                      src={link.image}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <h2>{link.heading}</h2>
                      <p>{link.content}</p>
                    </div>
                  </div>
                  <div className="">
                    <h3>{link.time}</h3>
                  </div>
                </div>
                
              ))}
              </div>
            </div>

            <div className={`text-white cursor-pointer`}>
              <NavLink to="/myaccount">
                <FaUserCircle size={22} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
