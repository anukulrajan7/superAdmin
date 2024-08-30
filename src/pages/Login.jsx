import React from 'react'
import LoginBg from '../Assets/login-page-bg.png';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();






  return (
    <>
      {/* div containing login-form and image */}
      <div className="p-10 shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 lg:w-8/12 md:w-8/12 sm:flex flex-col mx-auto md:flex-row  justify-center space-y-10 md:space-y-0 md:items-center my-2 md:mx-0 md:my-0">

        {/* image */}
        <div className="md:w-1/2 max-w-sm mx-auto border-black lg:pr-8 md:pr-4">
          <img
            src={LoginBg}
            alt="login-img"
          />
        </div>

        {/* form */}
        <div className=" md:w-1/2 max-w-sm">
          <h3 className="py-4 text-center">
            <b>Welcome to Admin</b>
          </h3>
          <h3>E-mail</h3>
          <input
            type="email"
            className="block py-2.5 px-0 w-full text-sm bg-transparent .placeholder-current border-0 border-b-2 border-dark appearance-none dark:text-black dark:border-gray-900 dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-dark peer"
            placeholder="Enter Mail ID"
          />
          <h3 className="pt-5">Password</h3>
          <input
            type="password"
            className="block py-2.5 px-0 w-full text-sm bg-transparent .placeholder-current border-0 border-b-2 border-dark appearance-none dark:text-black dark:border-gray-900 dark:focus:border-dark focus:outline-none focus:ring-0 focus:border-dark peer"
            placeholder="******"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-600 hover:text-black cursor-pointer">
              <input className="mr-2 rounded-full text-black" type="checkbox" />
              <span>Remember Me</span>
            </label>
          </div>
          <div className="text-center items-center">
            <button
              className="mt-4 bg-gray-900 hover:bg-black px-8 py-2 text-white text-sm tracking-wider"
              type="submit"
              onClick={() => {
                window.localStorage.setItem("user", "anukulremremremremremremrem");
                navigate("/dashboard");

              }}
            >
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login