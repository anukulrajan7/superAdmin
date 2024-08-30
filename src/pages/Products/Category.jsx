import React from "react";
import Topbar2 from "../../layouts/Topbar2";
import { BsImageFill } from "react-icons/bs";
import Categorytable from "./Categorytable";

const Category = () => {
  return (
    <>
      <Topbar2 />
      <div className="flex ml-5 ">
        <div className="font-bold  flex items-center text-lg">Categories</div>
      </div>

      <div className="ml-5 mt-1 flex  gap-20">
        <div className="flex items-center gap-0 ">
          <input type="file" className="" />
        </div>
        <div className="">
          <label className="block mb-2">Last Name</label>
          <input
            class="input-field gap-5"
            type="text"
            placeholder="Enter Your Last name"
          />
        </div>
        {/* <div className="">
          <label className="block mb-2">E-Mail</label>
          <input
            class="input-field  "
            type="email"
            placeholder="name@gmail.com"
          />
        </div> */}
        
          <div>
            <label className="block mb-2">Parent Categories</label>
            <select name="Categories" id="" className="mr-20">
              <option value="Cake">Cake</option>
              <option value="Flower">Flower</option>
              <option value="Chocolates">Chocolates</option>
              <option value="Jewellery">Jewellery</option>
            </select>
          </div>
      
      </div>

      <div className="flex items-stretch ml-5 mt-2 focus:bg-gray-900">
        <button className="flex bg-gray-700 hover:bg-gray-900 text-white items-center px-4 py-1 gap-2 focus:outline-none">
          Add Categories
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>

      <div className="flex items-stretch ml-5 mt-2 focus:bg-gray-900">
        <input
          type="text"
          placeholder="Search here..."
          className="sm:px-4 px-2 sm:py-2 py-0 rounded-l-md focus:outline-gray-900"
        />
        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none">
          <ion-icon name="search-outline" className="text-white"></ion-icon>
        </button>
      </div>

      <div className="ml-5 mt-2">
        <Categorytable />
      </div>
    </>
  );
};

export default Category;
