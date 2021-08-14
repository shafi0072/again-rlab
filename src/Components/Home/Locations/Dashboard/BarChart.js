import React from "react";


import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Vcc1",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Vcc2",
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      borderColor: "#742774"
    },
    {
        label: "Vcc3",
        data: [33, 25, 90, 55, 101, 76],
        fill: false,
        borderColor: "#eb9234"
      }
  ]
};


const BarChart = () => {
    return (
        <div >
            <Line data={data} height={100}/>
        </div>
    );
};

export default BarChart;