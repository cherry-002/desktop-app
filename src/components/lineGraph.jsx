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
  CategoryScale,
);

export const LineGraph = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: 'Test results'
      }
    }
  }

  // const data = {}

  return <Line options={options} data={lineChartData} />;
};
