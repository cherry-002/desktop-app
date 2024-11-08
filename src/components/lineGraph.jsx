import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  plugins,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { lineChartData } from '../utils/FAKE_DATA.JS';

ChartJS.register(
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  CategoryScale
);

export const LineGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Test results',
      },
    },
  };

  // const data = {}

  return (
    <div className="flex justify-center bg-white rounded-xl h-[90%]">
      <Line
        className="px-4 py-4"
        options={options}
        data={lineChartData}
      />
    </div>
  );
};
