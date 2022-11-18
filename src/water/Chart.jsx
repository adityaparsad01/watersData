import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import FilterByMonth from "../water/FilterByMonth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Compairision Sheet"
    }
  }
};

const Chart = ({ datas }) => {
  const [item, setItem] = useState();
  console.log(item);
  useState(() => {
    console.log("ji");
  }, [setItem]);

  const filterData = datas.filter((item) => {
    return item.monthNum === 11;
  });

  console.log(filterData);
  const time = filterData.map((item) => {
    const time1 = new Date(item.Date);
    const mnth = ("0" + (time1.getMonth() + 1)).slice(-2);
    const day = ("0" + time1.getDate()).slice(-2);
    return [day, mnth].join("-");
  });

  const To_Plant = filterData.map((item) => item.To_Plant);
  const stp = filterData.map((item) => item.STP);
  const labels = time;

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Water Inlet",
        data: To_Plant,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Daily Water Outlet",
        data: stp,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };

  return (
    <>
      <FilterByMonth datas={datas} items={setItem} />
      <Line options={options} data={data} />
    </>
  );
};

export default Chart;
