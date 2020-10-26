import React from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import './Chart.css';

export const Table = (props) => {
  // const { salesData } = props;
  console.log(props.salesData);

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
  if (
    props.salesData !== undefined &&
    Object.keys(props.salesData).length > 0
  ) {
    table = props.salesData.map((sale) => (
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
            <th className='table--header'>
              <button className='chart-button'>
                WEEK ENDINGS
                <BsChevronCompactDown />
              </button>
            </th>
            <th className='table--header'>
              <button
                className='chart-button'
                onClick={() => props.sortBy('retailSales')}
              >
                RETAIL SALES
                <BsChevronCompactDown />
              </button>
            </th>

            <th className='table--header'>
              <button className='chart-button'>
                WHOLESALE SALES
                <BsChevronCompactDown />
              </button>
            </th>
            <th className='table--header'>
              <button className='chart-button'>
                UNITS SOLD
                <BsChevronCompactDown />
              </button>
            </th>
            <th className='table--header'>
              <button className='chart-button'>
                RETAILER MARGIN
                <BsChevronCompactDown />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </>
  );
};

export default Table;
