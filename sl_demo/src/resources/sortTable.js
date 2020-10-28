const direction = {
  weekEnding: 'asc',
  retailSales: 'asc',
  wholesaleSales: 'asc',
  unitsSold: 'asc',
  retailerMargin: 'asc',
};

export const sortTable = (key, salesData) => {
  const data = salesData.map((sales) => {
    return Object.assign({}, sales);
  });

  let sortedData;
  sortedData = data.sort((a, b) =>
    direction[key] === 'asc' ? a.key - b.key : b.key - a.key
  );

  if (direction[key] === 'asc') {
    direction[key] = 'dsc';
  } else {
    direction[key] = 'asc';
  }

  return sortedData;
};

export default sortTable;
