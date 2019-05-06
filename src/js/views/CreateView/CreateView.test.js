import React from 'react';
import ReactDOM from 'react-dom';
import CreateView from './CreateView';
import {Provider} from 'react-redux';
import store from '../../../js/redux/store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <CreateView/>
        </Provider>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
