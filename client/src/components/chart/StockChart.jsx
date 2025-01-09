import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './StockChart.css';

const UserGrowthChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'User Count',
        data: [0, 200, 300, 450, 500, 600, 750, 800, 950, 1050, 1150, 1200], // Replace with actual user count data
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        background: '#00274d', // Set dark blue background color
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth', // Smooth line
        colors: ['#A9DFD8'], // Set the line color to a gold shade
        width: 2, // Line thickness
      },
      fill: {
        type: 'gradient', // Apply gradient to the area below the line
        gradient: {
          shade: 'dark',
          type: 'vertical',
          opacityFrom: 0.1, // Adjust opacity from the bottom
          opacityTo: 0.4, // Adjust opacity at the top
          stops: [0, 90, 100], // Define gradient stops
          colorStops: [
            {
              offset: 0,
              color: '#A9DFD8', // Match the stroke color for the gradient fill
              opacity: 1,
            },
            {
              offset: 100,
              color: '#A9DFD8', // Keep the dark background color at the bottom
              opacity: 0.1,
            },
          ],
        },
      },
      title: {
        text: 'Monthly User Growth',
        align: 'left',
        style: {
          color: '#fff', // Title color white for contrast
        },
      },
      xaxis: {
        categories: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December', // Months of the year
        ],
        labels: {
          style: {
            colors: '#fff', // Set x-axis labels color to white
          },
        },
      },
      yaxis: {
        title: {
          text: '',
        },
        labels: {
          style: {
            colors: '#fff', // Set Y-axis labels color to white
          },
          show: true, // Show Y-axis labels
        },
        axisBorder: {
          show: false, // Remove Y-axis border
        },
        axisTicks: {
          show: false, // Remove Y-axis ticks
        },
      },
      grid: {
        show: false, // Remove grid lines
      },
      legend: {
        horizontalAlign: 'left',
        labels: {
          colors: '#c0c572', // Set legend text color to the same color as the line
        },
      },
    },
  });

  return (
    <div className="chart-container">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default UserGrowthChart;
