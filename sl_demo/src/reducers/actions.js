// import axios from 'axios';
export const FETCH_ORDER = 'FETCH_ORDER';
export const SORT = 'SORT';

//action creators
export function fetchAction() {
  return {
    type: FETCH_ORDER,
  };
}

// export function sort(field) {
//   return {
//     type: SORT,
//     field,
//   };
// }

//normally would do a fetchData and try to get data from an API
// const fetchData = async () => {
//   try {
//     const result = await axios.get('http://www.randomSite.com/api/givemedata');
//     return result;
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// };

export default fetchAction;
