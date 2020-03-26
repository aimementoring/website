import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import general from './general/reducers';

const rootReducer = combineReducers({
  general,
});

const composeEnhacers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const initStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  composeEnhacers(applyMiddleware(thunk)),
);

export default initStore;
