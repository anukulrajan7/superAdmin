// import React from 'react'
// import Topbar2 from '../../layouts/Topbar2';
// import { SiHomeassistantcommunitystore } from 'react-icons/si';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// const Addproducts = () => {
//     const navigate = useNavigate();
//   return (
//     <>
//          <Topbar2 />
//       <div className="bg-white">
//         <div className="flex justify-between">
//           <div className="font-bold m-5 flex items-center text-lg">
//             <SiHomeassistantcommunitystore className="mr-2" />
//             Add Products
//           </div>

//           {/* Close */}
//           <div className="flex mr-4">
//             <div
//               className="flex items-stretch my-4 focus:bg-gray-900"
//               onClick={() => {
//                 navigate("../products");
//               }}
//             >
//               <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
//                 <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//         </div>
//     </>
//   )
// }

// export default Addproducts

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Topbar2 from "../../layouts/Topbar2";
import { RxCrossCircled } from "react-icons/rx";
import Basic_info from "./Addeditproductfiles/Basic_info";
// import Prices_Basic_info from "./Addeditproductfiles/Pictures_Basic_info";
import Shipping_Basic_info from "./Addeditproductfiles/Shipping_Basic_info";
import Inventory_Basic_info from "./Addeditproductfiles/Inventory_Basic_info";
import Pictures_Basic_info from "./Addeditproductfiles/Pictures_Basic_info";
import Seo_Basic_info from "./Addeditproductfiles/Seo_Basic_info";
import ProductAttributesBasic_info from "./Addeditproductfiles/ProductAttributesBasic_info";
import Prices_info from "./Addeditproductfiles/Prices_info";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineCamera, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdOutlineInventory, MdOutlineLocalShipping } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";
// import Basic_info from "./Basic_info";
// import Prices_Basic_info from "./Prices_Basic_info";
// import Shipping_Basic_info from "./Shipping_Basic_info";
// import Inventory_Basic_info from "./Inventory_Basic_info";
// import Pictures_Basic_info from "./Pictures_Basic_info";
// import Seo_Basic_info from "./Seo_Basic_info";
// import  ProductAttributesBasic_info from "./ProductAttributesBasic_info";

const Addproducts = () => {
    const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("");

  const renderIt = (nextTab) => {
    setSelectedTab(nextTab);
  };

  const renderingIt = () => {
    switch (selectedTab) {
      case "/basic_info":
        return (
          <>
            <Basic_info />
          </>
        );
        break;
      case "/pricesinfo":
        return (
          <>
            <Prices_info />
          </>
        );
        break;
      case "/shipping":
        return (
          <>
            <Shipping_Basic_info />
          </>
        );
        break;
      case "/inventory":
        return (
          <>
            <Inventory_Basic_info />
          </>
        );
        break;
      case "/pictures":
        return (
          <>
            <Pictures_Basic_info />
          </>
        );
        break;
      case "/seo":
        return (
          <>
            <Seo_Basic_info />
          </>
        );
        break;
      case "/productAttribute":
        return (
          <>
            <ProductAttributesBasic_info />
          </>
        );
        break;

      default:
        return (
          <>
            <Basic_info />
          </>
        );
        break;
    }
  };

  return (
    <>
      <section>
        <section>
          <Topbar2 />
        </section>
        {/* <section className="my-5 flex justify-between">
          <section className="flex border border-b-black w-[9rem] mx-4">
            <img
              src="../../public/icons/EditProductLogoOfHome.png"
              width={30}
              height={20}
              alt="editProductLogo"
              className="mr-2"
            />
            <span className="font-semibold">Edit Product</span>
          </section>

          <button className="flex items-center justify-center border border-[#4F46E5] bg-[#4F46E5] sm:w-[6rem] sm:h-[2rem] mx-5 rounded-2xl">
            <RxCrossCircled className="text-xs w-fit rounded-lg  bg-white text-[#4F46E5] mr-3 " />
            <p className="text-sm text-[#fff] ">Close</p>
          </button>
        </section> */}

        <div className="flex justify-between">
          <div className="font-bold m-5 flex items-center text-lg">
            <BsPeopleFill className="mr-2" size={22} />
            Add Products
          </div>

          {/* Close */}
          <div className="flex mr-4">
            <div
              className="flex items-stretch my-4 focus:bg-gray-900"
              onClick={() => {
                navigate("../products");
              }}
            >
              <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
                <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
                Close
              </button>
            </div>
          </div>
        </div>

        <section className="px-7">
          <ul className="flex">
            <li className="w-fit">
              <button
                className={
                  selectedTab === "/"
                    ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                    : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
                }
                onClick={() => {
                  renderIt("/");
                }}
              >
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/basicInfoLogo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <AiOutlineInfoCircle />
                <p className="text-sm ">Basic info</p>
                {/* <p className="text-sm ">Basic info</p> */}
              </button>
            </li>

            <li className="w-fit">
              <button
                className={
                  selectedTab === "/pricesinfo"
                    ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                    : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
                }
                onClick={() => {
                  renderIt("/pricesinfo");
                }}
              >
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/pricesTabLogoBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
               <HiOutlineCurrencyRupee/>
                <p className="text-sm ">Prices</p>
              </button>
            </li>

            <li className="w-fit">
              <button
                className={
                  selectedTab === "/shipping"
                    ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                    : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
                }
                onClick={() => {
                  renderIt("/shipping");
                }}
              >
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/ShippingTabLogoBasicInfo.png"
                    width={20}
                    height={20}
                    alt="logoBasic"
                  />
                </section> */}
                <MdOutlineLocalShipping/>
                <p className="text-sm ">Shipping</p>
              </button>
            </li>

            <li className="w-fit">
              <button
                className={
                  selectedTab === "/inventory"
                    ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                    : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
                }
                onClick={() => {
                  renderIt("/inventory");
                }}
              >
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/InventoryTabLogoBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <MdOutlineInventory/>
                <p className="text-sm ">Inventory</p>
              </button>
            </li>

            <li className="w-fit">
              <button
                className={
                  selectedTab === "/pictures"
                    ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                    : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
                }
                onClick={() => {
                  renderIt("/pictures");
                }}
              >
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/CameraIconPicturesBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <AiOutlineCamera/>
                <p className="text-sm ">Pictures</p>
              </button>
            </li>

            <li className="w-fit">
              <button
                className={
                  selectedTab === "/seo"
                    ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                    : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
                }
                onClick={() => {
                  renderIt("/seo");
                }}
              >
                {/* <section className="p-[3px] pt-[4px]">
                  <img
                    src="../../public/icons/SeoTabLogoBasicInfo.png"
                    width={20}
                    height={20}
                    alt="logoBasic"
                  />
                </section> */}
                <TbSeo/>
                <p className="text-sm ">SEO</p>
              </button>
            </li>

            <li className="w-fit">
              <button
                className={
                  selectedTab === "/productAttribute"
                    ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                    : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
                }
                onClick={() => {
                  renderIt("/productAttribute");
                }}
              >
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/ProductAttributeTabLogoBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <RiProductHuntLine/>
                <p className="text-sm ">Product Attributes</p>
              </button>
            </li>
          </ul>

          <section>{renderingIt()}</section>
        </section>
      </section>
    </>
  );
};

export default Addproducts;
