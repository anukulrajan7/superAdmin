import React, { useState, useEffect } from "react";
import Topbar2 from "../../layouts/Topbar2";
import { NavLink } from "react-router-dom";
import { HiTrash, HiPencil } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import mock from "../../dummy_data2.json";

// Function to style the order status
function getOrderStatus(status) {
  switch (status) {
    case "Active":
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-green-500 bg-green-100 border border-green-500">
          {status}
        </span>
      );
    case "Deactivated":
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-red-500 bg-red-100 border border-red-500">
          {status}
        </span>
      );
    default:
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-md text-xs font-bold text-gray-600 bg-gray-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}

// Function for alternate gray and white
function alternate(index) {
  if (index % 2 !== 0) {
    return "bg-white";
  }
}

// Dummy Values
const Customers = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
      const response = await fetch(
        "http://localhost:7000/api/v1/merchantCommission"
      );
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error("Failed to fetch data from the API.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Sort Column
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  // Pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedaddressType, setSelectedAddressType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showAddressType, setShowAddressType] = useState(false);

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleStatusToggle = () => {
    setShowStatus(!showStatus);
  };

  const handleAddressTypeToggle = () => {
    setShowAddressType(!showAddressType);
  };
  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleAddressTypeChange = (addressType) => {
    setSelectedAddressType(addressType);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFilterSubmit = () => {
    // Apply filter logic here
    const filteredData = mock.filter((d) => {
      return (
        (selectedStatus === "" ||
          d.status.toLowerCase() === selectedStatus.toLowerCase()) &&
        (selectedDate === "" ||
          new Date(d.date).toLocaleDateString() ===
            selectedDate.toLocaleDateString())
      );
    });
    setData(filteredData);
    setShowFilter(false);

    // Redirect to the desired URL based on selectedAddressType
    if (selectedaddressType) {
      navigate(`/Customers/${selectedaddressType}`);
    }
  };

  return (
    <>
      <Topbar2 />
      <div className="flex flex-col md:flex-row justify-between md:scale-75%">
        {/* Search */}
        <div className="flex items-stretch m-4 focus:bg-gray-900 ">
          <input
            type="text"
            placeholder="Search here..."
            className="sm:px-4 px-2 sm:py-2 py-0 rounded-l-md focus:outline-gray-900 shadow-2xl"
          />
          <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none">
            <ion-icon name="search-outline" className="text-white"></ion-icon>
          </button>
        </div>

        {/* Add customer & filter */}
        <div className="flex mr-4">
          <div
            className="flex items-stretch m-4 focus:bg-gray-900"
            onClick={() => {
              navigate("addCustomers");
            }}
          >
            <button className="flex bg-gray-700 hover:bg-gray-900 text-white items-center px-4 rounded-md focus:outline-none">
              <AiOutlinePlus className="mr-1" />
              Add Customers
            </button>
          </div>

          {/* Filter */}
          <div className="relative flex items-stretch my-4 focus:bg-gray-900">
            <button
              className="flex bg-gray-700 hover:bg-gray-900 text-white items-center px-4 rounded-md focus:outline-none"
              onClick={handleFilterToggle}
            >
              <ion-icon name="filter-outline" className="text-white"></ion-icon>
              Filter
            </button>
          </div>
        </div>
      </div>
      {/* Filter Dropdown */}
      {showFilter && (
        <div className="absolute mt-16 right-4 top-16 w-50 bg-white rounded-md shadow-md">
          <div className="p-2">
            <div
              className="flex items-center justify-between"
              onClick={handleStatusToggle}
            >
              <label className="p-2 text-gray-700 font-normal">
                Select Status
              </label>
              {showStatus ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {showStatus && (
              <div className="form-radio text-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="active" className="ml-2">
                    Active
                  </label>
                  <input
                    type="radio"
                    id="active"
                    name="status"
                    value="active"
                    checked={selectedStatus === "active"}
                    onChange={() => handleStatusChange("active")}
                  />
                </div>
                <u></u>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="deactive" className="ml-2">
                    Deactive
                  </label>
                  <input
                    type="radio"
                    id="deactive"
                    name="status"
                    value="deactivated"
                    checked={selectedStatus === "deactivated"}
                    onChange={() => handleStatusChange("deactivated")}
                  />
                </div>
              </div>
            )}
            <div
              className="flex items-center justify-between"
              onClick={handleAddressTypeToggle}
            >
              <label className="p-2 text-gray-700 font-normal">
                Select Address Type
              </label>
              {showAddressType ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {showAddressType && (
              <div className="form-radio text-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="country" className="ml-2">
                    Country
                  </label>
                  <input
                    type="radio"
                    id="country"
                    name="addressType"
                    value="Country"
                    checked={selectedaddressType === "Country"}
                    onChange={() => handleAddressTypeChange("Country")}
                  />
                </div>
                <u></u>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="State" className="ml-2">
                    State
                  </label>
                  <input
                    type="radio"
                    id="state"
                    name="addressType"
                    value="State"
                    checked={selectedaddressType === "State"}
                    onChange={() => handleAddressTypeChange("State")}
                  />
                </div>
                <u></u>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="city" className="ml-2">
                    City
                  </label>
                  <input
                    type="radio"
                    id="city"
                    name="addressType"
                    value="City"
                    checked={selectedaddressType === "City"}
                    onChange={() => handleAddressTypeChange("City")}
                  />
                </div>
                <u></u>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="addresstypes" className="ml-2">
                    Address Types
                  </label>
                  <input
                    type="radio"
                    id="addresstypes"
                    name="addressType"
                    value="Address Types"
                    checked={selectedaddressType === "Address Types"}
                    onChange={() => handleAddressTypeChange("Address Types")}
                  />
                </div>
                <u></u>
              </div>
            )}
            <div
              className="flex items-center justify-between"
              onClick={handleCalendarToggle}
            >
              <label className="p-2 text-gray-700 font-normal hover:cursor-pointer">
                By Date
              </label>
              {showCalendar ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            <div className="mt-4">
              {showCalendar && (
                <div className="relative">
                  <Calendar onChange={handleDateChange} value={selectedDate} />
                </div>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
                onClick={handleFilterSubmit}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Table */}
      <div className="rounded-lg shadow overflow-x-auto">
        <div className="flex flex-row gap-4 w-full">
          <div className="px-4 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="border-x border-gray-200 rounded-sm overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white border-b-2">
                    <th>S. No.</th>
                    <th className="pl-10">
                      <div className="flex items-center">
                        Customer Id
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("customer_id");
                          }}
                        />
                      </div>
                    </th>
                    <th className="pl-10">
                      <div className="flex items-center">
                        Customer Name
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("customer_name");
                          }}
                        />
                      </div>
                    </th>

                    <th className="pr-9">E-Mail</th>
                    <th className="pr-9 ">Amount</th>
                    <th className="pr-9">
                      <div className="flex items-center">
                        Date
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("date");
                          }}
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center">
                        Status
                        <FaSort
                          className="hover:cursor-pointer"
                          onClick={() => {
                            sorting("status");
                          }}
                        />
                      </div>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((d, index) => (
                    <tr
                      key={startIndex + d.id}
                      className={alternate(startIndex + index + 1)}
                    >
                      <td className="pl-4">{startIndex + index + 1}</td>

                      <td className="pl-10">{d.customer_id}</td>

                      <td className="pl-10">{d.customer_name}</td>
                      <td className="pl-8">{d.email}</td>
                      <td className="pl-4">{d.amount}</td>
                      <td>{new Date(d.date).toLocaleDateString()}</td>
                      <td>{getOrderStatus(d.status)}</td>
                      <td>
                        <div className="flex justify-center">
                          <HiPencil
                            className="fill-gray-800 mr-2 hover:cursor-pointer"
                            onClick={() => {
                              navigate("#");
                            }}
                          />
                          <HiTrash className="fill-red-500" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center ml-4 mr-4 mb-10">
          <div className="font-semibold">
            Showing {startIndex + 1}-{Math.min(endIndex, data.length)} entries
          </div>
          <div className="flex">
            {/* Previous Page Button */}
            <button
              className="mx-1 px-2 py-1 rounded bg-gray-200 text-gray-700"
              onClick={() =>
                handlePageChange(
                  currentPage === 1 ? totalPages : currentPage - 1
                )
              }
            >
              &lt;
            </button>
            {/* Page Number Button */}
            <button className="mx-1 px-2 py-1 rounded bg-gray-200 text-gray-700">
              Page {currentPage} of {totalPages}
            </button>
            {/* Next Page Button */}
            <button
              className="mx-1 px-2 py-1 rounded bg-gray-200 text-gray-700"
              onClick={() =>
                handlePageChange(
                  currentPage === totalPages ? 1 : currentPage + 1
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
