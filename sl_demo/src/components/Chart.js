import React from 'react';
import './Chart.css';
import Table from 'components/Table';
import data from 'resources/data';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data[0],
      direction: {
        retailSales: 'asc',
        wholesaleSales: 'asc',
        unitsSold: 'asc',
        retailerMargin: 'asc',
      },
    };
    console.log(this.state);
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    console.log(this.state.data.sales);
    this.setState({
      data: this.state.data.sales.sort((a, b) =>
        this.state.direction[key] === 'asc' ? a[key] - b[key] : b[key] - a[key]
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc' ? 'dsc' : 'asc',
      },
    });
  }

  render() {
    return <Table salesData={this.state.data.sales} sortBy={this.sortBy} />;
  }
}

export default Chart;
