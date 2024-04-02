

// export default SideBar;
import React, { useState } from "react";
import { HiMiniBars4 } from "react-icons/hi2";
// import "./Navigation.css";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GoOrganization } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";
import { Navigate, useNavigate, NavLink, useLocation } from "react-router-dom";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const [isTrue, setisTrue] = useState(true);
  const nav = useNavigate();
  const [activeName, setactiveName] = useState("");
  const location = useLocation();


  // const hideSideBars = () => {
  //   setisTrue(!isTrue);
  // };

  const SideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let sideOptions = [
    {
      icons: <GoHome />,
      name: "Home",
      link: "/",
    },
    {
      icons: <GoOrganization />,
      name: "Organization",
      link: "/organization",
    },
    {
      icons: <FiBox />,
      name: "Assets",
      link: "/assets",
    },
    {
      icons: <LuArrowDownUp />,
      name: "Trade",
      link: '/trade'
    },
    {
      icons: <MdOutlineHourglassEmpty />,
      name: "History",
      link: '/history'
    },
    {
      icons: <IoWalletOutline />,
      name: "Wallet",
      link: "/wallet",
    },
  ];

  let settingIcons = [
    {
      icons: <IoIosNotificationsOutline />,
      name: "Notifications",
    },
    {
      icons: <MdOutlineContactSupport />,
      name: "Support",
    },
    {
      icons: <CiSettings />,
      name: "Settings",
    },
  ];

  
  const higlighted = list => {
    nav(list.link);
    setactiveName(list.name)
  };

  return (
    <div className="dark:bg-sideBardark relative h-full">
       <aside className={isSidebarOpen ? "sidebarContainer lg:w-auto md:w-[400px] sm:z-20 w-[400px]  bg-[#171717]  h-[100vh] p-[20px] flex flex-col gap-[20px]" : "sidebarContainer  bg-[#171717] h-[100vh] p-[20px] flex flex-col gap-[20px]"}>
      <div className='logoContainer gap-2 flex w-[100%] items-center justify-around'>
        <img
          src='https://carboncell.io/assets/img/logo2.png'
          alt='logo'
          className={isSidebarOpen ? "w-[120px] h-auto" : "hidden"}
        />
        <button className='menubtn'>
          <HiMiniBars4  onClick={SideBarToggle}/>
        </button>
      </div>
      <div className="pl-4 pt-4">
      <div className={isSidebarOpen ? "sidebarsearch relative" : "hidden"}>
        <input type='text' className="p-2  pl-7 w-auto bg-transparent border border-slate-600 rounded-md" placeholder='Search' />
        <FaSearch size={14} className=" absolute top-[14px] left-2" />
      </div>
      </div>
      <div className={isSidebarOpen ? "navbarOptions" : "hidden"}>
        <ul className="flex pl-4 text-white flex-col">
          {sideOptions.map(list => (
            <li >
              <NavLink exact to={list.link} className={window.location.pathname === list.link ? 'green text-[green] items-center flex gap-2 p-[6px]' : 'navbarList flex flex-row items-center gap-2 p-[6px] justify-start'}>
                {list.icons}
            {list.name}
          </NavLink>
            </li>
          ))}
        </ul>

        <ul className='settingOption pl-4 pt-[120px]'>
          {settingIcons.map(list => (
            <li className='navbarList gap-2 p-[6px] flex text-white justify-start items-center'>
              {list.icons}
              <p className="text-slate-500">{list.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={isSidebarOpen ? "profileSection pt-4" : "hidden"}>
      <div className="card p w-auto bg-base-100 shadow-xl">
        <div className="p-4 gap-2 flex items-center justify-around">
          
          <div className="avatar online">
        <div className="w-8 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="description">
        <p className="text-sm font-bold text-white">Brooklyn Simmons</p>
        <p className="text-xs">brooklynsimmons@gmail.com</p>
      </div>
      <div className="icon ">
      <HiOutlineDotsVertical className="mr-2" />
      </div>
          </div>
     
      </div>

        {/* <div className='profileName'>
          <p style={{ fontWeight: "bold" }}>Brooklyn Simmons</p>
          <p style={{ color: "#929791" }}>brooklyn@simmons.com</p>
        </div>
        <SlOptionsVertical style={{ color: "#929791" }} /> */}
      </div>
    </aside>
    </div>
  );
};

export default SideBar;
