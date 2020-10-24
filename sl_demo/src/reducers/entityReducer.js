import { FETCH_ORDER } from 'reducers/actions';
import data from 'resources/data.json';

const initialState = {};

function reducer(state = initialState, action) {
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

export default reducer;
