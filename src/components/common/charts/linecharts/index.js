import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(Legend, CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept'],
  datasets: [
    {
      label: 'Wave',
      data: [80, 100, 150, 80, 120, 100, 80, 130],
      fill: false,
      backgroundColor: '#34a4ec',
      borderColor: '#34a4ec',
    },
    {
      label: 'Orange Money',
      data: [90, 70, 100, 100, 100, 120, 130, 140],
      fill: false,
      backgroundColor: '#fc8064',
      borderColor: '#fc8064',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,

  elements: {
    line: {
      fill: false,
      tension: 0.01,
      borderWidth: 2,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        color: 'rgb(0, 0, 0, 0.02)',
      },
    },
    y: {
      beginAtZero: true, // Ensure the y-axis starts at zero
      ticks: {
        beginAtZero: true,
      },
      border: {
        display: false,
      },
      grid: {
        color: 'rgb(0, 0, 0, 0.02)',
      },
      gridLines: {
        color: 'red',
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      labels: {
        color: '#666',
        usePointStyle: true,
        pointStyle: function (context) {
          return 'rectRounded';
        },
        boxHeight: 8,
        boxWidth: 16,
        padding: 10,
        borderWidth: 1,
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
    title: {
      display: false,
    },
    datalabels: {
      display: false,
      labels: {
        display: true,
      },
    },
  },
};

export const LineCharts = () => {
  return <Line data={data} options={options} />;
};
