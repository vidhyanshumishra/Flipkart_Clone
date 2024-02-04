import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductReducer, getProductDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import {thunk} from 'redux-thunk';

const reducer= combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;