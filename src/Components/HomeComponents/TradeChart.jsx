import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
// import { FallingLines } from "react-loader-spinner";

const TradeChart = () => {
  const [graphData, setGraphData] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "USA Population Chart",
      },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          color: "#3E3E3E",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          lineWidth: 0,
        },
      },
    },
  };

  useEffect(() => {
    const getGrpahData = async () => {
      try {
        setError("");
        let response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        let data = response.data?.data.reverse();

        let graphData = {
          labels: data.map((item) => item.Year),
          datasets: [
            {
              data: data.map((data) => data.Population),
              borderColor: "#2AB42A",
            },
          ],
        };

        setGraphData(graphData);
      } catch (err) {
        setError(err.message);
      }
    };
    getGrpahData();
  }, []);

  return (
    <div className="pt-8 flex justify-center lg:justify-start">
      {/* {loader ? (
        <div className="flex justify-center">
          <FallingLines height="50" width="50" />
        </div>
      ) : ( */}
        <div className="w-[100%] lg:w-[85%] p-4 bg-[#1A1E1C] rounded-md ">
        <p className="text-white border-b-2 pb-2 border-b-gray-700">Markert Overview</p>

          {error ? <p className="text-red-400">Error ! - {error}</p> : ""}
          {graphData ? <Line data={graphData} options={options} className="mb-2" /> : ""}
          <div className="flex border-t-2 border-t-gray-700 pt-2 items-center justify-between">
            <p className="text-white">Get in depth charts in Trade</p>
            <div className="startTradingbtn">
            <button className="px-5 py-2 text-slate-200  "> Trade</button>
        </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default TradeChart;