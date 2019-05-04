import React from 'react';
import ReactDOM from 'react-dom';
import CreateView from './CreateView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
