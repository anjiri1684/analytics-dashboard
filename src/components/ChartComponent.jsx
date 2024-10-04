/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ id, data, options }) => {
  useEffect(() => {
    const ctx = document.getElementById(id).getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      chart.destroy();
    };
  }, [id, data, options]);

  return <canvas id={id}></canvas>;
};

export default ChartComponent;
