import React from 'react';
import ReactDOM from 'react-dom';
import MoviesView from './MoviesView';
import {Provider} from 'react-redux';
import store from '../../../js/redux/store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <MoviesView/>
        </Provider>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
