import React from "react";

const Prices_info = () => {
  return (
    <>
      <div className="font-semibold mt-2">Prices</div>
      <div className="ml-0 mt-5 flex gap-20">
        <div>
          <label className="block mb-2">Price</label>
          <input class="input-field" type="text" placeholder="Enter price" />
        </div>
        <div>
          <label className="block mb-2">old price</label>
          <input
            class="input-field"
            type="email"
            placeholder="Enter old price"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <input type="radio" />
        <label htmlFor="">Is Discount Allowed</label>
      </div>

      <div className="mt-4">
          <label className="block mb-2">Discount</label>
          <input class="input-field" type="text" placeholder="Enter Discount" />
        </div>

      <div className="flex items-stretch ml-0 mt-2 focus:bg-gray-900">
        <button className="flex bg-gray-700 hover:bg-gray-900 text-white items-center px-4 py-1 gap-2 focus:outline-none">
          Add Products
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>
    </>
  );
};

export default Prices_info;
