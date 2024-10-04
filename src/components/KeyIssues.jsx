const keyIssues = [
  "Wrong Prescription",
  "Opened Late",
  "Bad Receipts",
  "Late Check In",
  "Delay in Lab",
  "Careless Waste Disposal",
];

const KeyIssues = () => {
  return (
    <div className="col-span-3 bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Key Issues</h2>
      <div className="flex flex-wrap gap-2">
        {keyIssues.map((issue, index) => (
          <button
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded"
            key={index}
          >
            {issue}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeyIssues;
