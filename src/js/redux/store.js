import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Awesome awesome awesome Redux tool for chrome
const store = createStore(rootReducer, composeEnhancers(
    // Redux Thunk for async interactions with store
    // https://github.com/reduxjs/redux-thunk
    applyMiddleware(thunk)
));

export default store;

