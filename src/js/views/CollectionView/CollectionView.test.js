import React from 'react';
import ReactDOM from 'react-dom';
import CollectionView from './CollectionView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollectionView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
