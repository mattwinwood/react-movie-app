import React from 'react';
import ReactDOM from 'react-dom';
import CollectionView from './CollectionView';
import {Provider} from 'react-redux';
import store from '../../../js/redux/store';

// Using redux means wrapping Provider around test components so we have access to global store.
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <CollectionView/>
        </Provider>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
