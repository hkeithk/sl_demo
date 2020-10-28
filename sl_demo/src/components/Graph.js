import React from 'react';
import { Line } from 'react-chartjs-2';
import data from 'resources/data';

class Graph extends React.Component {
  constructor(props) {
    super(props);

    let currentMonth = 1;
    const months = [
      ' ',
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    let result = [];

    data[0].sales
      .map((sale) => sale.weekEnding.split('-'))
      .forEach((date) => {
        if (
          parseInt(date[1]) === currentMonth &&
          !result.includes[months[currentMonth]]
        ) {
          result.push(months[currentMonth]);
          currentMonth += 1;
        } else {
          result.push(' ');
        }
      });

    this.state = {
      data: {
        labels: [...result],
        datasets: [
          {
            label: 'Retail Sales',
            backgroundColor: 'black',
            fill: false,
            data: [...data[0].sales.map((sale) => sale.retailSales)],
          },
          {
            label: 'Wholesale Sales',
            fill: false,
            backgroundColor: '#00d2ff',
            data: [...data[0].sales.map((sale) => sale.wholesaleSales)],
          },
        ],
      },
    };
  }

  setGradientColor = (canvas, color) => {
    const contxt = canvas.getContext('2d');
    const gradient = contxt.createLinearGradient(500, 0, 100, 0);
    //color stop takes an offset
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, '#928DAB');
    return gradient;
  };

  getChartData = (canvas) => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ['#928DAB', '#00d2ff'];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = colors[i];
        set.borderWidth = 2;
        set.pointRadius = 0;
      });
    }
    return data;
  };

  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: 1300,
          height: 600,
          marginBottom: '50px',
        }}
      >
        <Line
          type='line'
          options={{
            responsive: true,
            scales: {
              yAxes: [
                { ticks: { suggestedMin: -200000, suggestedMax: 2000000 } },
              ],
            },
          }}
          data={this.getChartData}
        ></Line>
      </div>
    );
  }
}

export default Graph;
