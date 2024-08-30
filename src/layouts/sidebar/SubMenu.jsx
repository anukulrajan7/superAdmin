import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={` ${pathname.includes(data.name) && "text-blue-600 bg-blue-100 "}  `}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
 <NavLink className={`link hover:border-r hover:border-blue-600 hover:bg-blue-100 hover:text-blue-600 shadow-lg`} to={`/${data.name}`}>
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize text-base">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />

</NavLink>
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((men,index) => (
          <li >
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <NavLink
              to={`/${data.name}/${men.name}`}
              className="link !bg-transparent capitalize hover:text-blue-600"
            >
                {/* <men.icon size={23} className="min-w-max" /> */}
                <div className="min-w-max">{men.icon}</div>
                <p className="flex-1 capitalize text-base ">{men.name}</p>
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
