import React, { useEffect, useState } from "react";
// import ThemeSwitch from "../SmallComponent/ThemeSwitch";
// import NotificationBox from "../SmallComponent/NotificationBox";
// import userImg from "../../Constant/Images/userImg.png";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
// import { useTheme } from "../HelperCon/ContextProvider";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
// import { useTheme } from "../HelperCon/ContextProvider";
// import { jwtDecode } from "jwt-decode";
import { useTheme } from "../ContextProvider";

const TopBar = () => {
  // const { isLogged, logoutFun } = useTheme();

  // console.log(keycloak, "topbar keycloak");
  // const { keycloak } = useTheme();
  // console.log(keycloak, "keyycloak");
  // const accessToken = keycloak.token;
  // const navigate = useNavigate();
  // const isLogged = keycloak?.authenticated;
  const handleClick = async () => {
    // navigate("/login");
    // try {
    //   const authenticated = await keycloak.init({ onLoad: "login-required" });
    //   console.log(
    //     `User is ${authenticated ? "authenticated" : "not authenticated"}`
    //   );
    //   console.log(authenticated, "authenticated");
    // } catch (error) {
    //   console.error("Failed to initialize adapter:", error);
    // }
    // keycloak.login();
  };

  // const handleClickClear = () => {
  //   navigate("/");
  //   localStorage.clear(); // Clearing localStorage
  //   keycloak.logout();
  // };

  // const getUsernameFromToken = (token) => {
  //   try {
  //     const decodeToken = jwtDecode(token);
  //     // console.log(decodeToken, "DECODE TOKEN");
  //     return decodeToken.name;
  //   } catch (error) {
  //     // console.error("Error decoding token:", error);
  //     return null;
  //   }
  // };

  // const username = getUsernameFromToken(accessToken);
  // console.log(username, "usernameeee");

  const items = true ? [
        {
          label: "Profile",
          key: "0",
        },
        {
          label: "Help",
          key: "1",
        },
        {
          label: (
            <h5
              // onClick={() => {
              //   handleClickClear(); // Call logout function on click
              // }}
            >
              Logout
            </h5>
          ),
          key: "3",
        },
      ]
    : [
        {
          label: <Link to={"/login"}>Login</Link>,
          key: "0",
        },
      ];

  // useEffect(() => {
  //   if (!keycloak.authenticated) {
  //     // keycloak.login();
  //   }
  // }, []);

  return (
    <div className="w-full h-full flex items-center justify-end px-[20px]">
      <div className="flex items-center md:gap-[25px] 2xl:gap-[32px]">
        {/* <ThemeSwitch /> */}
        {/* <NotificationBox /> */}
        <div className="flex items-center gap-[5px]">
          {/* {isLogged ? ( */}
            <div className="mr-2">
              <h4 className="md:text-[12px] 2xl:text-[15px] text-[#637381] dark:text-white font-semibold font-inter">
                {localStorage.getItem("userName")}
              </h4>
              <p className="md:text-[10px] 2xl:text-[12px] font-semibold text-[#637381] text-right font-inter">
                {/* {username} */}Dipin
              </p>
            </div>
          {/* // ) : (
          //   <div className="mr-2 cursor-pointer" onClick={handleClick}>
          //     <h4 className="text-[12px] text-[#637381] dark:text-white font-semibold font-inter">
          //       Welcome to Kdesk
          //     </h4>
          //     <p className="text-[10px] font-semibold text-[#637381] cursor-pointer text-right font-inter">
          //       Login your account
          //     </p>
          //   </div>
          // )} */}

          {/* <img
            className="w-[36px] h-[36px] rounded-full "
            src={userImg}
            alt="user"
          /> */}

          {true ? (
            <>
              <FaCircleUser className="text-[25px] text-slate-500" />
              <div className="cursor-pointer">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a href="/" onClick={(e) => e.preventDefault()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.41058 6.91058C4.73602 6.58514 5.26366 6.58514 5.58909 6.91058L9.99984 11.3213L14.4106 6.91058C14.736 6.58514 15.2637 6.58514 15.5891 6.91058C15.9145 7.23602 15.9145 7.76366 15.5891 8.08909L10.5891 13.0891C10.2637 13.4145 9.73602 13.4145 9.41058 13.0891L4.41058 8.08909C4.08514 7.76366 4.08514 7.23602 4.41058 6.91058Z"
                        fill="#637381"
                      />
                    </svg>
                  </a>
                </Dropdown>
              </div>
            </>
          ) : (
            <div>
              <FaCircleUser className="text-[25px] text-slate-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
