import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Error, Loader } from "../components";
import { useGetTopChartsHistoryQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const [dailyData, setDailyData] = useState([]);

  const { data, isFetching, error } = useGetTopChartsHistoryQuery();

  if (isFetching) return <Loader title="Loading..." />;

  console.log(data?.response);

  const dataHistory = data?.response;

  if (error) return <Error />;

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setDailyData(await useGetTopChartsHistoryQuery());
  //   };

  //   //console.log(dailyData)

  //   fetchAPI();
  // }, []);

  const lineChart = dailyData.length ? (
    <Line
      dataHistory={{
        labels: dailyData(({ date }) => date),
        datasets: [
          {
            dataHistory: dailyData.map(({ cases }) => cases),
            label: "Cases",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            dataHistory: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            background: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            dataHistory: dailyData.map(({ tests }) => tests),
            label: "Tests",
            borderColor: "green",
            background: "#0071bd",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <h2 className="font-bold text-3xl text-white text-left">
            Covid19 Analysis System
          </h2>
        </div>

        <div className="">{lineChart}</div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center">
        {dataHistory?.map((dailyData) => ({
          cases: dailyData.cases.total,
          deaths: dailyData.deaths.total,
          tests: dailyData.tests.total,
        }))}
      </div>
    </>
  );
};

export default TopCharts;
