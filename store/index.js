import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import donation from './donation/reducers';

const rootReducer = combineReducers({
  donation,
});

const composeEnhacers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const initStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  composeEnhacers(applyMiddleware(thunk)),
);

export default initStore;
