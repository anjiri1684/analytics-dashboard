const staffData = [
  {
    name: "Mercy Mukoya",
    efficiency: 2.5,
    npsDelta: -1.2,
    efficiencyRate: "82%",
    respond: "Yes",
  },
  {
    name: "Kennedy Aiyuka",
    efficiency: 2.2,
    npsDelta: -0.8,
    efficiencyRate: "78%",
    respond: "Yes",
  },
  {
    name: "Stephanie Tomno",
    efficiency: 2.0,
    npsDelta: -0.5,
    efficiencyRate: "76%",
    respond: "No",
  },
  {
    name: "Faith Kinya",
    efficiency: 1.8,
    npsDelta: -0.3,
    efficiencyRate: "74%",
    respond: "No",
  },
];

const StaffPerformance = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Staff Performance</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Staff Name</th>
            <th className="py-2">Efficiency Data</th>
            <th className="py-2">NPS Delta</th>
            <th className="py-2">Efficiency</th>
            <th className="py-2">Respond</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff, index) => (
            <tr key={index}>
              <td className="py-2">{staff.name}</td>
              <td className="py-2">{staff.efficiency}</td>
              <td className="py-2">{staff.npsDelta}</td>
              <td className="py-2">{staff.efficiencyRate}</td>
              <td className="py-2">{staff.respond}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffPerformance;
