
const visits = [
  "Kariobangi",
  "Mukuru Kwa Ruben",
  "Mukuru Kwa Njenga",
  "Baba Dogo",
  "Kiserian",
  "Mukuru Kayaba",
];

const VisitsList = () => {
  return (
    <div className="col-span-3 bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Visits</h2>
      <ul>
        {visits.map((visit, index) => (
          <li className="mb-2" key={index}>
            <button className="w-full text-left bg-gray-100 text-gray-600 px-4 py-2 rounded">
              {visit}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitsList;
