import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Editcategories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between">
        <div className="font-bold m-5 flex items-center text-lg">
          <BsPeopleFill className="mr-2" size={22} />
          Edit Categories
        </div>

        {/* Close */}
        <div className="flex mr-4">
          <div
            className="flex items-stretch my-4 focus:bg-gray-900"
            onClick={() => {
              navigate("../products/category");
            }}
          >
            <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
              <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
              Close
            </button>
          </div>
        </div>
      </div>

      <div>
        <input type="file" />
        <label htmlFor="">Upload Category Image</label>
      </div>

      <div className="mt-3">
        <label className="block mb-2">Category Name</label>
        <input
          class="input-field gap-5"
          type="text"
          placeholder="Enter Category"
        />
      </div>


      <div>
          <label className="block mb-2 mt-4">Parent Categories</label>
          <select name="Category" id="" class="form-control">
          <option value="Cake">Cake</option>
          <option value="Flower">Flower</option>
          <option value="Chocolates">Chocolates</option>
          <option value="Jewellery">Jewellery</option>
          </select>
        </div>


        <div className="flex items-stretch ml-0 mt-6 focus:bg-gray-900">
        <button className="flex bg-gray-700 hover:bg-gray-900 text-white items-center px-4 py-1 gap-2 focus:outline-none">
          Update Categories
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>
    </>
  );
};

export default Editcategories;
