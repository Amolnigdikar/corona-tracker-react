import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

export const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  async function fetchApi() {
    setDailyData(await fetchDailyData());
  }

  useEffect(() => {
    fetchApi();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  // const barChart = data.confirmed ? (
  //   <Bar
  //     data={{
  //       labels: [],
  //     }}
  //     options={{
  //       legend: { display: false },
  //       title: { display: true, text: `Current state in ${country}` },
  //     }}
  //   />
  // ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};
