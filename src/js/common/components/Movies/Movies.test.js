import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

// Pure components cannot have access to redux global store. No need to wrap in Provider.
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Movies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
