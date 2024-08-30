import React from "react";

const Inventory_Basic_info =()=>{


    return (
        <>
        <section>
            <h2 className="font-semibold sm:m-4 "> Inventory</h2>

            <section className="flex ">
            <section className=" sm:w-1/4  h-[5rem] sm:m-4 border border-b-black">
                <p className="font-semibold text-xs sm:m-4" >Inventory Method</p>
           
                    <select name="inventoryDrop" id="inventoryDrop"  className="bg-transparent text-xs px-3 ">
                    <option className="text-xs"> <p >Select Inventory Method</p></option>
                </select>
                
            </section>
            </section>


            <section className="flex ">
            <section className=" sm:w-1/4  h-[5rem] sm:m-4 border border-b-black">
                <p className="font-semibold text-xs sm:m-4" >Warehouse</p>
           
                    <select name="inventoryWarehouseDrop" id="inventoryWarehouseDrop"  className="bg-transparent text-xs px-3 ">
                    <option className="text-xs"> <p >Select Warehouse</p></option>
                </select>
                
            </section>
            </section>

            <section className="sm:m-4">
                <ul className="flex">
            <li className="mx-2 "><input type="radio" name="radioBtnBasic" className="mt-[1px]" /><label className="text-xs font-[500] ">Bound To Stock Quantity</label></li>
            <li className="mx-2 "><input type="radio" name="radioBtnBasic" className="mt-[1px]"/><label className="text-xs  font-[500]" >Display Stock Quantity</label></li>
            
           </ul>
            </section>


            <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
                <p className="font-semibold text-xs">Order Minimum Cart Quantity</p>
                <input type="text" name="cartQuantityMin" id="cartQuantityMin" placeholder="1" className="bg-transparent border border-b-black text-sm p-1"/>
            </section>

            <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
                <p className="font-semibold text-xs">Order Maximum Cart Quantity</p>
                <input type="text" name="cartQuantityMax" id="cartQuantityMax" placeholder="7" className="bg-transparent border border-b-black text-sm p-1"/>
            </section>


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
          Add Categories
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>



        </section>
        </>
    )
}

export default Inventory_Basic_info;