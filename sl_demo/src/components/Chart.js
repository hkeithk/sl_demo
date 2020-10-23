import React from 'react';
import './Chart.css';

export const Chart = (props) => {
  const { salesData } = props;
  console.log(salesData);

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

  return (
    <div>
      <table>
        <thead className='table--header'>
          <th>WEEK ENDINGS</th>
          <th>RETAIL SALES</th>
          <th>WHOLESALE SALES</th>
          <th>UNITS SOLD</th>
          <th>RETAILER MARGIN</th>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr className='chart-table--row'>
              {Object.keys(sale).map((key) => (
                <td className='chart-table--cell'>
                  {formatData(key, sale[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
