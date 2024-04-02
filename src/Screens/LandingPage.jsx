import React, { useEffect, useState } from "react";
// import Layout from "../../Base/Layout";
// import { useTheme } from "../../HelperCon/ContextProvider";
// import { GetDataApi } from "../../HelperCon/GetHelperData";
// import Marquee from "react-fast-marquee";
// import axios from "axios";
// import { ApiEndPoint } from "../../../Api/ApiEndPoint";
// import SkeletonLoader from "../../SmallComponent/SkeletonCon";
// import QouteDarkImg from "../../../Constant/Images/thougthDarkImg.png";
// import QouteLightImg from "../../../Constant/Images/thougthImg.png";
// import WhatsNewRowCom from "./WhatsNewRowCom";
// import WhatsnewModal from "../../HomeComponents/WhatsnewModal";

// import ImageViewSlider from "../../HomeComponents/ImageViewSlider";
// import WorldTime from "../../SmallComponent/Home/WorldTime";
// import Events from "../../SmallComponent/Home/Events";
// import Calendar from "../../SmallComponent/Home/Calendar";
import { AiOutlineCalendar, AiOutlineUnorderedList } from "react-icons/ai";
import { useTheme } from "../ContextProvider";
import Layout from "../base/Layout";
import TradeChart from "../Components/HomeComponents/TradeChart";
import axios from "axios";
// import HeadingSec from "./HeadingSec";
// import NoDataFound from "../../SmallComponent/NoDataFound";
// import { APIUtility } from "../../../Api";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import CryptoCard from "../Components/HomeComponents/CryptoCard";
import Blogs from "../Components/HomeComponents/Blogs";

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: 'Today',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'This Week',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: 'This Month',
    key: '3',
    icon: <UserOutlined />,
  },
  {
    label: 'This Year',
    key: '4',
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const LandingPage = () => {
  const [priceData, setPriceData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)

  useEffect(() => {
    const getCryptoPrice = async () => {
      try {
        setError("");
        setLoader(true);

        let response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

        let dataObject = response.data.bpi;
        let dataArray = [];

        Object.keys(dataObject).forEach((key) => {
          dataArray.push(dataObject[key]);
        });
        setPriceData(dataArray);
        setLoader(false);
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    };

    getCryptoPrice();
  }, []);

  return (
    <Layout>
      {/* <WhatsnewModal
        setOpenModal={setOpenModal}
        whats_new_id={WhatsNewId}
        isOpenModal={isOpenModal}
      /> */}
      
      <div className="appContainer p-5">
        {
          !isSidebarOpen ? 
          (
            <div className="pl-8">
              <div className="headingsContainer">
        <div className='headings'>
          <h1 className="text-2xl font-bold">
            Hello,<span className='font-bold text-2xl name'>Brooklyn Simmons</span>👋
          </h1>
          <h2 className="text-xl font-semibold">
            Welcome to <span style={{ color: "#49d907" }}>Spot Trading!</span>
          </h2>
        </div>
        <div className="startTradingbtn">
            <button className="btn text-slate-200 btn-xs sm:btn-sm md:btn-md ">Start Trading</button>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row">
      <div className="lg:w-[60%]">
        < TradeChart />
      </div>
      <div className="blogs">
        <Blogs />
      </div>
        </div>
      <div className="flex items-center justify-between pt-3">
        <p className="text-lg text-white font-semibold">Assets</p>
        <div>
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Today
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </div>
      </div>
      <div className="cryptocards">
      <div className="flex items-center justify-start">
      </div>
      {error ? <p className="text-red-400">Error! - {error}</p> : ""}
        <div
          className="priceCards flex flex-col items-center mt-2 md:flex-col lg:items-center
        md:mt-5 md:flex lg:flex-row md:justify-start"
        >
          {priceData?.map((item, index) => (
            <CryptoCard data={item} key={item.code} />
          ))}
        </div>

      </div>
            </div>
          )
          :
          (
            <div>

      <div className="headingsContainer">
        <div className='headings'>
          <h1 className="text-2xl font-bold">
            Hello,<span className='font-bold text-2xl name'>Brooklyn Simmons</span>👋
          </h1>
          <h2 className="text-xl font-semibold">
            Welcome to <span style={{ color: "#49d907" }}>Spot Trading!</span>
          </h2>
        </div>
        <div className="startTradingbtn">
            <button className="btn text-slate-200 btn-xs sm:btn-sm md:btn-md ">Start Trading</button>
        </div>
        </div>
      <div className="lg:w-[60%]">
        < TradeChart />
      </div>
      <div className="flex items-center justify-between pt-3">
        <p className="text-lg text-white font-semibold">Assets</p>
        <div>
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Today
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </div>
      </div>
      <div className="cryptocards">
      <div className="flex items-center justify-start">
      </div>
      {error ? <p className="text-red-400">Error! - {error}</p> : ""}

      {/* {loader ? (
        <div className="flex justify-center">
          <FallingLines height="50" width="50" />
        </div>
      ) : ( */}
        <div
          className="priceCards flex flex-col items-center mt-2 md:flex-col lg:items-center
        md:mt-5 md:flex lg:flex-row md:justify-start"
        >
          {priceData?.map((item, index) => (
            <CryptoCard data={item} key={item.code} />
          ))}
        </div>
      {/* // )} */}
      </div>
            </div>
          )
        }
      </div>
    </Layout>
  );
};

export default LandingPage;
