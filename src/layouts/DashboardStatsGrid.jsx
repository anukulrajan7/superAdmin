import React from 'react'
import { BsFillCartCheckFill, BsArrowDownRight,BsArrowUpRight } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { MdAddBusiness } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";

const DashboardStatsGrid = () => {
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="shadow-lg flex gap-4 justify-between px-2 items-center">
          <div>
            <h2 className="font-bold">Total Order</h2>
            <p className="flex items-center gap-1">
            <BsArrowUpRight  color="green" />
            +2.5% from last week</p>
            <p>84610</p>
          </div>
          <div>
            <BsFillCartCheckFill size={30} />
          </div>
        </div>
        <div className="shadow-lg  flex gap-4  justify-between px-2 items-center ">
          <div>
            <h2 className="font-bold">Total Revenue</h2>
            <p className="flex items-center gap-1">
            <BsArrowUpRight color="green" />
            +2.5% from last week</p>
            <p>84610</p>
            <p></p>
          </div>
          <div>
            <TbMoneybag size={30} />
          </div>
        </div>
        <div className="shadow-lg flex gap-4 justify-between px-2 items-center ">
          <div>
            <h2 className="font-bold">Total Merchants</h2>
            <p className="flex items-center gap-1 ">
            <BsArrowDownRight color="red"/>
            -2.5% from last week</p>
            <p>84610</p>
          </div>
          <div>
            <MdAddBusiness size={30}  />
          </div>
        </div>
        <div className="shadow-lg flex gap-4 justify-between px-2 items-center ">
          <div>
            <h2 className="font-bold">Total Customers</h2>
            <p className="flex items-center gap-1">
            <BsArrowUpRight color="green" />
            +2.5% from last week</p>
            <p>84610</p>
          </div>
          <div>
            <MdOutlinePeopleAlt size={30} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardStatsGrid