import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore, AiOutlineInfoCircle } from "react-icons/ai";
import { BiCategory, BiGlobe } from "react-icons/bi";
import { BsCartDash, BsPeople, BsInfoCircleFill } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line, RiGovernmentFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import {
  MdMenu,
  MdBusiness,
  MdCategory,
  MdRateReview,
  MdPayments,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import {
  FaCity,
  FaCloudUploadAlt,
  FaMoneyCheckAlt,
  FaRegAddressCard,
} from "react-icons/fa";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 767px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Orders",
      icon: BsCartDash,
      menus: [
        {
          name: "Details ",
          icon: <AiOutlineInfoCircle />,
        },
      ],
    },
  ];
  const subMenusList2 = [
    {
      name: "Merchant",
      icon: MdBusiness,
      menus: [
        //    {

        //   name: "Info ",
        //   icon: <BsInfoCircleFill />,
        // },
        {
          name: "Commission",
          icon: <FaMoneyCheckAlt />,
        },
        {
          name: "Payments",
          icon: <MdPayments />,
        },
      ],
    },
    {
      name: "Products",
      icon: TbReportAnalytics,
      menus: [
        {
          name: "Bulk Upload ",
          icon: <FaCloudUploadAlt />,
        },
        {
          name: "Category",
          icon: <BiCategory />,
        },
        {
          name: "Commission",
          icon: <FaMoneyCheckAlt />,
        },
        {
          name: "Reviews",
          icon: <MdRateReview />,
        },
      ],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-lg z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          {/* <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          /> */}
          {/* <span className="text-xl whitespace-pre">LOGO</span> */}
          <h1
            className={`items-center mx-auto ${
              open ? "mx-auto " : "text-sm font-bold "
            }`}
          >
            LOGO
          </h1>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink
                to={"/"}
                className="link shadow-lg text-base hover:bg-blue-100 hover:text-blue-600 hover:border-r hover:border-blue-600"
              >
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={"/orders"} className="link shadow-lg text-base hover:bg-blue-100 hover:text-blue-600 hover:border-r hover:border-blue-600">
                <BsCartDash size={23} className="min-w-max" />
                Orders
              </NavLink>
            </li> */}

            {(open || isTabletMid) && (
              <div className="border-y border-slate-300 ">
                {subMenusList?.map((menu, index) => (
                  <div className="flex flex-col gap-1">
                    <SubMenu data={menu} key={index} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink
                to={"/customers"}
                className="link shadow-lg text-base hover:bg-blue-100 hover:text-blue-600 hover:border-r hover:border-blue-600"
              >
                <BsPeople size={23} className="min-w-max" />
                Customers
              </NavLink>
            </li>
            {(open || isTabletMid) && (
              <div className="border-y pb-5 border-slate-300 ">
                {subMenusList2?.map((menu, index) => (
                  <div className="flex flex-col gap-1">
                    <SubMenu data={menu} key={index} />
                  </div>
                ))}
              </div>
            )}
          </ul>
          {open && (
            <div className="  flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  cursor-pointer">
              <div className="flex border-y border-slate-300 p-4 shadow-lg items-center gap-6 justify-center text-base hover:border-r hover:border-r-blue-600">
                <FiLogOut />
                <p className="">Log Out</p>
              </div>
            </div>
          )}
        </div>

        {/* opening and closing arrow */}
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>

      {/*  menu icon */}
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
