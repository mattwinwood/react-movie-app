import React from 'react';
import ReactDOM from 'react-dom';
import CollectionDetailView from './CollectionDetailView';

// Using redux means wrapping Provider around test components so we have access to global store.
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollectionDetailView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
