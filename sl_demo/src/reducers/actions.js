// import axios from 'axios';
export const FETCH_ORDER = 'FETCH_ORDER';

//action creators
export function fetchAction() {
  console.log('in fetchAction');
  return {
    type: FETCH_ORDER,
  };
}

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
