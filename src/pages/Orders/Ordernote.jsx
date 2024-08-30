import React from 'react'

const Ordernote = () => {
  return (
    <>
        <div className="ml-5 mt-5 flex  gap-20">
         
          <div className="">
            <label className="block mb-2">Order Note</label>
            <input
              class=" border border-slate-600 shadow-sm text-sm bg-transparent h-[100px] w-[400px] px-2  "
              type="email"
              placeholder="Enter Your Note"
            />
          </div>
        </div>
    </>
  )
}

export default Ordernote