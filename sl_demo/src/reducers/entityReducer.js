import { FETCH_ORDER } from 'reducers/actions';
import data from 'resources/data.json';

const initialState = {};

function orderReducer(state = initialState, action) {
  console.log('in reducer');
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        ...data[0],
      };
    default:
      return state;
  }
}

export default orderReducer;
