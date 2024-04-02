import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import SideBar from "./SideBar";
// import TopBar from "./TopBar";
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer";
import { useTheme } from "../ContextProvider";
import SideBar from "./Sidebar";
import TopBar from "./Topbar";
// import { useTheme } from "../HelperCon/ContextProvider";
var classNames = require("classnames");

const Layout = ({ children, tophide }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [topBarStatus, setTopBarStatus] = useState(
    tophide != undefined ? tophide : true
  );

  const SideBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
//   const { isSidebarOpen, SideBarToggle } = useTheme();
  const [sideBarFlag, setSideBarFlag] = useState(true);
  return (
    <div className="w-full h-screen overflow-hidden dark:bg-darkThemebg">
      {/*=============== Side Bar============= */}
      <div class="flex w-full h-full">
        <div
          class=
          {classNames(
            ` bg-[#171717] h-[100vh]   transition-[width] ease-in-out duration-700  ${
              isSidebarOpen ? 
              "w-[19%]" 
              : 
              " w-[10%]"
            }`
          )}
        >
          {/* <button
            onClick={() => SideBarToggle()}
            className="text-[1rem] z-10 md:w-[30px] md:h-[30px] 2xl:h-[45px] 
            2xl:w-[45px] dark:bg-btnThemebgDark dark:text-white absolute md:top-[17px] shadow-[2px 2px 8px 0px rgba(0, 0, 0, 0.10)] bg-white md:right-[-15px] 2xl:right-[-22px] border-solid border-[#586e88] hover:border-[1px] rounded-full flex items-center justify-center"
          >
            {isSidebarOpen === true ? <FaAngleRight /> : <FaAngleLeft />}
          </button> */}

          <div className="dark:bg-darkThemebg">
            <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} SideBarToggle={SideBarToggle}  />
          </div>
          {/* <div className="flex items-center absolute bottom-3 gap-1 w-full justify-center">
            {!isSidebarOpen ? (
              <h4
                className={` text-[18px] font-semibold font-inter transition-all duration-700 ease-in-out text-sidebarBotomtext ${
                  !isSidebarOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                Product of
              </h4>
            ) : null} */}
            {/* <img
              className="w-[55px] h-[44px]"
              src={require("../../Constant/Images/KevaLogo.png")}
            /> */}
          {/* </div> */}
        </div>
        {/* ===============main container============== */}
        <div
          className=
          {`h-screen mainScrollbar bg-[#F1F5F9] dark:dark:bg-darkThemebg ${
            isSidebarOpen ? "w-[100%]" : "w-[100%]"
          }`}
        >
          {/* {topBarStatus ? (
            <div
              className="md:h-[50px] 2xl:h-[70px] bg-white dark:bg-topBarDark dark:
            text-white shadow-topBar dark:shadow-topbarDark w-full flex items-center justify-center"
            >
              <TopBar />
            </div>
          ) : null} */}
          <div className="">
            <MainContainer page={children} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

// For Admin Screebs import the main file of the admin and pass the prop inside the Admin Component
