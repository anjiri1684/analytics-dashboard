import Header from "./components/Header";
import VisitsList from "./components/VisitsList";
import KeyIssues from "./components/KeyIssues";
import MonitoringPeriod from "./components/MonitoringPeriod";
import MetricsCard from "./components/MetricsCard";
import StaffPerformance from "./components/StaffPerformance";

const footFallData = {
  value: "1.9k",
  chartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Foot Fall",
        data: [1200, 1900, 3000, 5000, 2300, 3200, 4100],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  },
};

const patientSatisfactionData = {
  value: "7.8",
  chartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Patient Satisfaction",
        data: [7.0, 7.5, 7.8, 8.0, 7.6, 7.9, 8.2],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  },
};

const revenueData = {
  value: "4.2m",
  chartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [1.2, 1.5, 1.8, 2.0, 2.3, 2.5, 2.8],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  },
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  },
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
      <div className="grid grid-cols-12 gap-6">
        <VisitsList />
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <KeyIssues />
            <MonitoringPeriod />
          </div>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <MetricsCard
              title="Foot Fall"
              data={footFallData}
              chartId="footFallChart"
            />
            <MetricsCard
              title="Patient Satisfaction"
              data={patientSatisfactionData}
              chartId="patientSatisfactionChart"
            />
            <MetricsCard
              title="Revenue"
              data={revenueData}
              chartId="revenueChart"
            />
          </div>
          <StaffPerformance />
        </div>
      </div>
    </div>
  );
};

export default App;
