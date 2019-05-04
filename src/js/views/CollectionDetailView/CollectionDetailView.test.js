import React from 'react';
import ReactDOM from 'react-dom';
import CollectionDetailView from './CollectionDetailView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollectionDetailView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
