import { useState } from "react";
import Chart from "react-apexcharts";

const SideChart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-donut",
      },
      labels: ["Africa", "Europe", "Australia", "South America"],
      colors: ["#FCD2C2", "#CC400C", "#EB5017", "#F56630"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [121799, 66734, 21567, 11387],
  });

  return (
    <div className="mt-5">
      <Chart
        className="flex-none"
        options={state.options}
        series={state.series}
        type="pie"
        width="200"
        height="200"
      />
    </div>
  );
};

export default SideChart;
