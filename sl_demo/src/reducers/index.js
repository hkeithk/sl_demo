import { createStore, combineReducers, compose } from 'redux';
import entityReducer from 'reducers/entityReducer';

const allReducers = combineReducers({
  entity: entityReducer,
});

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

export const store = createStore(allReducers, composeEnhancers());
