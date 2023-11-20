import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { StackChartDataFake } from '@components/common/data/charts';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title
);

const labels = StackChartDataFake.map((o) => o.part);

const backgroundColors = [
  '#ff7900',
  '#0fa296',
  '#4bb4e6',
  '#9fb3d6',
  '#626ed4',
];

const data = {
  labels,
  datasets: [
    {
      barThickness: 30,
      barPercentage: 0.5,
      label: 'Transfert',
      data: StackChartDataFake.map((o) => o.percent),
      backgroundColor: '#4cc4c4',
    },
    {
      barThickness: 30,
      barPercentage: 0.5,
      label: 'B2B',
      data: StackChartDataFake.map((o) => o.percent),
      backgroundColor: '#fc8064',
    },
    {
      barThickness: 30,
      barPercentage: 0.5,
      label: 'Telco',
      data: StackChartDataFake.map((o) => o.percent),
      backgroundColor: '#fccc54',
    },
    {
      barThickness: 30,
      barPercentage: 0.5,
      label: 'International',
      data: StackChartDataFake.map((o) => o.percent),
      backgroundColor: '#34a4ec',
    },
    {
      barThickness: 30,
      barPercentage: 0.5,
      label: 'SF',
      data: StackChartDataFake.map((o) => o.percent),
      backgroundColor: '#9c64fc',
    },
  ],
};

export const options = {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 0,
    },
  },
  maintainAspectRatio: false,
  indexAxis: 'x',
  elements: {
    bar: {
      display: false,
    },
  },
  Legend: {
    display: false,
    labels: 'Legend',
  },
  responsive: true,
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
        padding: 8,
        borderWidth: 1,
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
    title: {
      display: true,
      text: 'Mix CA (en %)',
      padding: {
        bottom: 10,
      },
      font: {
        size: 16,
        style: 'normal',
        weight: 'normal',
      },
      align: 'start',
      position: 'top',
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        display: true,
      },
      border: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        display: true,
      },
      border: {
        display: false,
      },
      grid: {
        color: 'rgb(0, 0, 0, 0.03)',
      },
    },
  },
};

export const StackedBarChart = () => {
  return <Bar height={300} options={options} data={data} />;
};
