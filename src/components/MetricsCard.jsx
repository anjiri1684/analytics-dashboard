/* eslint-disable react/prop-types */
import ChartComponent from "./ChartComponent";

const MetricsCard = ({ title, data, chartId }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="text-2xl font-semibold mb-2">{data.value}</div>
      <div className="h-40">
        <ChartComponent
          id={chartId}
          data={data.chartData}
          options={data.chartOptions}
        />
      </div>
    </div>
  );
};

export default MetricsCard;
