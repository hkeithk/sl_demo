import React from 'react';
import './Chart.css';

export const Chart = (props) => {
  const { salesData } = props;

  let formatData = (type, data) => {
    let typeCheck = type.toLowerCase();
    let stringData = data.toString();

    if (typeCheck.includes('sales') || typeCheck.includes('margin')) {
      return `$${stringData.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else if (typeCheck.includes('week')) {
      let date = stringData.split('-');
      return `${date[1]}-${date[2]}-${date[0].slice(-2)}`;
    }
    return stringData;
  };

  let table = [];
  if (salesData !== undefined) {
    table = salesData.map((sale) => (
      <tr className='chart-table--row' key={`${sale.weekEnding}`}>
        {Object.keys(sale).map((key, index) => (
          <td className='chart-table--cell' key={index}>
            {formatData(key, sale[key])}
          </td>
        ))}
      </tr>
    ));
  }

  return (
    <>
      <table className='table-main'>
        <thead>
          <tr>
            <th className='table--header'>WEEK ENDINGS</th>
            <th className='table--header'>RETAIL SALES</th>
            <th className='table--header'>WHOLESALE SALES</th>
            <th className='table--header'>UNITS SOLD</th>
            <th className='table--header'>RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </>
  );
};

export default Chart;
