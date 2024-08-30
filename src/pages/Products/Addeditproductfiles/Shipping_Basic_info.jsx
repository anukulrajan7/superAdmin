import React from "react";

import { RxCrossCircled } from "react-icons/rx";

const Shipping_Basic_info = () => {
  return (
    <>
      <section>
        <h2 className="font-semibold sm:m-4"> Pricing</h2>

        <section>
          <ul className="flex">
            <li className="mx-2 ">
              <input type="radio" name="radioBtnBasic" />
              <label className="text-sm font-[500] ">Show on Home page</label>
            </li>
            <li className="mx-2 ">
              <input type="radio" name="radioBtnBasic" />
              <label className="text-sm  font-[500]">Mark as New</label>
            </li>
          </ul>
        </section>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-bold text-xs">Shipping Charges</p>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="Enter Price"
            className="bg-transparent border border-b-black text-sm p-1"
          />
        </section>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-bold text-xs">Shipping Charges</p>
          <section className="flex">
            <section className="flex border border-gray-500 rounded-sm w-fit bg-gray-500 hover:bg-gray-700 text-[#fff] mx-1 items-center">
              <span className="text-xs mx-1"> Shiprocket </span>
              <RxCrossCircled className="text-xs text-white " />
            </section>

            <section className="flex border border-gray-500 rounded-sm w-fit bg-gray-500 hover:bg-gray-700 text-[#fff] mx-1 items-center">
              <span className="text-xs mx-1"> E-Cart </span>
              <RxCrossCircled className="text-xs text-white " />
            </section>

            <section className="flex border border-gray-500 rounded-sm w-fit bg-gray-500 hover:bg-gray-700 text-[#fff] mx-1 items-center">
              <span className="text-xs mx-1"> Firstflight </span>
              <RxCrossCircled className="text-xs text-white " />
            </section>
          </section>
        </section>

        <section className="flex ">
          <section className=" sm:w-1/4 m-1 h-[5rem] sm:m-4 border border-b-black">
            <p className="font-semibold text-xs sm:m-4">Status</p>

            <select
              name="shippingDrop"
              id="shippingDrop"
              className="bg-transparent text-xs px-3 w-full items-center "
            >
              <option className="text-xs">
                
                <p>1</p>
              </option>
              <option className="text-xs">
                
                <p>2</p>
              </option>
              <option className="text-xs">
                
                <p>3</p>
              </option>
              <option className="text-xs">
                
                <p>4</p>
              </option>
            </select>
          </section>
        </section>

        {/* <div>
          <label className="block mb-2">Estimated shipping day</label>
          <select name="Category" id="" class="form-control mt-3">
            <option value="Cake">Cake</option>
            <option value="Flower">Flower</option>
            <option value="Chocolates">Chocolates</option>
            <option value="Jewellery">Jewellery</option>
          </select>
        </div> */}

        {/* <section className="sm:m-4">
          <button className="flex items-center justify-center border border-[#4F46E5] bg-[#4F46E5] sm:w-[10rem] sm:h-[2rem] rounded-2xl">
            <p className="text-sm text-[#fff] ">Edit Product</p>
            <img
              className="ml-2"
              src="../../public/icons/Basic_infor_EditProduct.png"
              width={15}
              height={15}
              alt="send"
            />
          </button>
        </section> */}
        <div className="flex items-stretch ml-5 mt-2 focus:bg-gray-900">
        <button className="flex bg-gray-700 hover:bg-gray-900 text-white items-center px-4 py-1 gap-2 focus:outline-none">
          Add Products
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>

      </section>
    </>
  );
};

export default Shipping_Basic_info;
