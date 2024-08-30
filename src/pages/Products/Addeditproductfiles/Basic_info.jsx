import React from "react";


const Basic_info = ()=>{



    return (
        <>
    
    <section className="w-full">
        <section className="flex w-full justify-around">
            <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
                <p className="font-bold text-xs">Product Name</p>
                <input type="text" name="productName" id="productName" placeholder="Enter Business name" className="bg-transparent border border-b-black text-sm p-1"/>
            </section>

            <section className=" m-1 sm:w-1/3  p-1 sm:m-4 flex flex-col justify-around ">
                <p className="font-bold text-xs m-2"> Short Description</p>
                <textarea rows={3} cols={30}  className="p-2 m-1 bg-transparent text-sm border border-slate-400 rounded-lg" placeholder="Enter about file"></textarea>
            </section>


           <section className=" w-1/3 m-1 p-2  sm:m-4">
             <p className="font-bold text-xs m-2"> Full Description</p>
            <textarea rows={3} cols={30}  className="p-2 m-1 text-sm border bg-transparent border-slate-400 rounded-lg" placeholder="Enter about file"/>
           </section>

            {/* copy of the above done and dusted desctiption code */}
        </section>

        <section className="flex w-full justify-around ">
            
            <section className=" sm:w-1/3 m-1 h-[5rem]  sm:p-2">
                <p className="font-semibold text-xs sm:m-4" >Manufacturer</p>
                <select name="manufacturerDrop" id="manufacturerDrop" placeholder="Select manufacturer" className="bg-transparent  text-xs px-3 ">
                    <option className="text-xs"> <p>Select manufacturer</p></option>
                </select>
                
            </section>
            
            <section className=" sm:w-1/3 h-[5rem] m-1 sm:p-2">
                <p className="font-semibold text-xs sm:m-4">Vendor</p>
                <select name="manufacturerDrop" id="manufacturerDrop" placeholder="Select manufacturer" className="bg-transparent text-xs px-3 py-2">
                    <option className="text-xs"> <p>Select manufacturer</p></option>

                </select>
                
            </section>
            
             <section className="sm:w-1/3 sm:h-[5rem] flex flex-col justify-around m-1 sm:m-4 sm:p-2">
                <p className="font-bold text-xs pb-3">Categories</p>
                <input type="text" name="productName" id="productName" placeholder="Enter category" className="bg-transparent border border-b-black text-sm p-1 "/>
            </section>
        </section>

           <section className="flex">
            <section className=" sm:w-1/3 m-1 h-[5rem]  sm:p-2">
                <p className="font-semibold text-xs sm:m-4" >Status</p>
                <select name="manufacturerDrop" id="manufacturerDrop" placeholder="Select manufacturer" className="bg-transparent  text-xs px-3 ">
                    <option className="text-xs"> <p>Select manufacturer</p></option>
                </select>
                
            </section>

            <section className=" sm:w-1/3 m-1 h-[5rem]  sm:p-2">
                <p className="font-semibold text-xs sm:m-4" >Start Date</p>
               <input type="date" placeholder="select date" className="bg-transparent tex-xs border border-b-black "/>
            </section>
            
            <section className=" sm:w-1/3 m-1 h-[5rem]  sm:p-2">
                <p className="font-semibold text-xs sm:m-4" >Start Date</p>
               <input type="date" placeholder="select date" className="bg-transparent tex-xs  border border-b-black "/>
            </section>
            
        </section>

        <section className="flex w-full justify-around">
            <section className="sm:m-4 p-1 sm:w-1/3 sm:h-[6rem] flex flex-col justify-around">
                <p className="font-bold text-xs">Tags</p>
                <input type="text" name="productName" id="productName" placeholder="Enter tags" className="bg-transparent border border-b-black text-sm p-1"/>
            </section>

            <section className=" sm:m-4 sm:w-1/3  p-1 flex flex-col justify-around ">
                <p className="font-bold text-xs m-2">Sku</p>
                <input type="text" name="productName" id="productName" placeholder="Enter tags" className="bg-transparent border border-b-black text-sm p-1"/>
            </section>


           <section className=" w-1/3 sm:m-4 p-2">
           <ul className="">
            <li><input type="radio" name="radioBtnBasic" className="my-0 text-xs" /><label className="text-xs ">Show on Home page</label></li>
            <li><input type="radio" name="radioBtnBasic" className="my-0 text-xs"/><label className="text-xs " >Mark as New</label></li>
            <li><input type="radio" name="radioBtnBasic" className="my-0 text-xs"/><label className="text-xs " >Allow Customer Reviews</label></li>
           </ul>
           </section>

            {/* copy of the above done and dusted desctiption code */}
        </section>

     

        {/* <section className="sm:m-4">
            <button className="flex items-center justify-center border bg-gray-700 hover:bg-gray-900 sm:w-[10rem] sm:h-[2rem] rounded-2xl">
                <p className="text-sm text-[#fff] ">Edit Product</p>
                <ion-icon name="send" className="text-white "></ion-icon>
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
    )

}

export default Basic_info;