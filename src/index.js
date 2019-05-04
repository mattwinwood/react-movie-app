import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import '../src/style/main.css';
import Root from './js/Root';
import store from './js/redux/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    rootElement
)
