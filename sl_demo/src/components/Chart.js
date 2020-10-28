import React from 'react';
import './Chart.css';
import Table from 'components/Table';
import data from 'resources/data';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data[0].sales,
      direction: {
        weekEnding: 'asc',
        retailSales: 'asc',
        wholesaleSales: 'asc',
        unitsSold: 'asc',
        retailerMargin: 'asc',
      },
    };
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    let sortedData = [];
    console.log(this.state.data);
    if (key.includes('weekEnding')) {
      sortedData = this.state.data.sort((a, b) =>
        this.state.direction.weekEnding === 'asc'
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key])
      );
    } else {
      sortedData = this.state.data.sort((a, b) =>
        this.state.direction[key] === 'asc' ? a[key] - b[key] : b[key] - a[key]
      );
    }

    this.setState({
      data: sortedData,
      direction: {
        [key]: this.state.direction[key] === 'asc' ? 'dsc' : 'asc',
      },
    });
  }

  render() {
    return (
      <>
        <Table
          salesData={this.state.data}
          sortBy={this.sortBy}
          key={this.state.data}
        />
      </>
    );
  }
}

export default Chart;
