import React from "react";

const ProductAttributesBasic_info = () => {
  return (
    <>
      <div className="font-semibold mt-2">Product Attributes</div>
      <div className="ml-0 mt-5 flex space-x-20">
        <div>
          <label className="block mb-2">Attribute</label>
          <select name="Category" id="" class="form-control">
            <option value="Cake">Cake</option>
            <option value="Flower">Flower</option>
            <option value="Chocolates">Chocolates</option>
            <option value="Jewellery">Jewellery</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Price Adjustment Types</label>
          <select name="Category" id="" class="form-control">
            <option value="Cake">Cake</option>
            <option value="Flower">Flower</option>
            <option value="Chocolates">Chocolates</option>
            <option value="Jewellery">Jewellery</option>
          </select>
        </div>
      </div>

      <div className="ml-0 mt-5 flex space-x-20">
        {/* <div>
          <label className="block mb-2">Attribute</label>
          <select name="Category" id="" class="form-control">
          <option value="Cake">Cake</option>
          <option value="Flower">Flower</option>
          <option value="Chocolates">Chocolates</option>
          <option value="Jewellery">Jewellery</option>
          </select>
        </div> */}
        <div>
          <label className="block mb-1">Price Adjustment</label>
          <input class="input-field" type="email" placeholder="Store City" />
        </div>
        <div>
          <label className="block mb-2">Attribute Value</label>
          <select name="Category" id="" class="form-control mt-3">
            <option value="Cake">Cake</option>
            <option value="Flower">Flower</option>
            <option value="Chocolates">Chocolates</option>
            <option value="Jewellery">Jewellery</option>
          </select>
        </div>
      </div>

      <div className="mt-4 w-[100% ] ">
      <table>
                    <thead className="border-separate px-12 w-fill  " >

                        <tr >
                            <th className=" px-3 m-1  text-sm ">S.No.</th>
                            <th className=" px-3 m-1  text-sm ">Attribute</th>
                            <th className=" px-3 m-1  text-sm ">Attribute Value</th>
                            <th className=" px-3 m-1  text-sm ">Price Adjusment Type</th>
                            <th className=" px-3 m-1  text-sm ">Price Adjusment</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="text-black-600 px-6 text-xs font-[400]">1</td>
                            <td className="text-black-600 px-6 text-xs font-[400]">95605</td>
                            <td className="text-black-600 px-6 text-xs font-[400]">Ronald Richards</td>
                            <td className="text-black-600 px-6 text-xs font-[400]">95605 </td>
                            <td className="text-black-600 px-6 text-xs font-[400]">95605 </td>
                        </tr>

                        <tr >
                            <td className="text-black-600 px-6 text-xs font-[400] ">2</td>
                            <td className="text-black-600 px-6 text-xs font-[400] ">39771 </td>
                            <td className="text-black-600 px-6 text-xs font-[400] ">Cody Fisher</td>
                            <td className="text-black-600 px-6 text-xs font-[400] ">39771  </td>
                            <td className="text-black-600 px-6 text-xs font-[400] ">39771  </td>
                        </tr>
 
                    </tbody>
                </table>
      </div>


      <div className="flex items-stretch ml-0 mt-3 focus:bg-gray-900">
        <button className="flex bg-gray-700 hover:bg-gray-900 text-white items-center px-4 py-1 gap-2 focus:outline-none">
          Add Products
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>

    </>
  );
};
export default ProductAttributesBasic_info;
