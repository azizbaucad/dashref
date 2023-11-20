import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartDataFake } from '@components/common/data/charts';
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

export const options = {
  layout: {
    padding: {
      left: 0,
      right: 60,
      top: 10,
      bottom: 0,
    },
  },
  maintainAspectRatio: false,
  indexAxis: 'y',
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
      display: false,
    },
    title: {
      display: true,
      text: 'Répartition CA (en %)',
      padding: {
        top: 10,
        bottom: 10,
      },
      color: '#666666',
      font: {
        size: 14,
        style: 'normal',
        weight: '500',
      },
      align: 'start',
    },
    datalabels: {
      display: true,
      color: '#000',
      align: 'end',
      anchor: 'end',
      labels: {
        title: {
          font: {
            weight: 'bold',
            size: '12',
          },
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
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
  },
};

const labels = ChartDataFake.map((o) => o.part);

export const backgroundColors = ['#ff9f40', '#4bc0c0', '#36a2eb', '#c9cbcf'];

export const data = {
  labels,
  datasets: [
    {
      barThickness: 20,
      barPercentage: 0.5,
      label: 'Part de marché',
      data: ChartDataFake.map((o) => o.percent),
      backgroundColor: backgroundColors,
    },
  ],
};

export const HorizontalBarChart = () => {
  return <Bar options={options} data={data} />;
};
