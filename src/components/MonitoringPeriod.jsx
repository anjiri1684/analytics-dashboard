const MonitoringPeriod = () => {
  return (
    <div className="col-span-3 bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Monitoring Period</h2>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Day
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Week
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Month
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Year
          </button>
        </div>
        <div className="text-gray-500">10 Dec 2019 - 10 Jan 2020</div>
      </div>
    </div>
  );
};

export default MonitoringPeriod;
