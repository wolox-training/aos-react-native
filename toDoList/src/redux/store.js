import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

const reducers = combineReducers({

})

const middlewares = [];
const enhancers = [];

/*----- Thunk Middleware ------*/

middlewares.push(thunk);

/*----- Redux-Recompose Middleware ------*/

middlewares.push(fetchMiddleware);

const createAppropriateStore = _DEV_ ? Reactotron.createStore : createStore;
const store = createAppropriateStore(reducers, compose(...enhancers));

export default store;
