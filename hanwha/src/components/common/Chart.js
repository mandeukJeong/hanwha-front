import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { COLORS } from '../../constants/colors';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Chart = ({ labels, stats, posCd }) => {
  const statList =
    posCd === 1
      ? [stats.era, stats.so, stats.win, stats.hld, stats.sv]
      : [stats.avg, stats.rbi, stats.sb, stats.hr, stats.h];

  const data = {
    labels,
    datasets: [
      {
        label: 'Player Stats',
        data: statList,
        backgroundColor: 'rgba(243, 115, 33, 0.2)',
        borderColor: COLORS.orange,
        pointBorderColor: COLORS.white,
        pointBackgroundColor: COLORS.white,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        backgroundColor: COLORS.grey,
        min: 0,
        max: 200,
        pointLabels: {
          color: COLORS.white,
          font: {
            size: 15,
            family: 'Noto Sans KR',
            weight: '600',
          },
        },
        ticks: {
          stepSize: 50,
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Radar data={data} options={options} />
    </>
  );
};

export default Chart;
