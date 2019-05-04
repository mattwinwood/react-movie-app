import React from 'react';
import ReactDOM from 'react-dom';
import MoviesView from './MoviesView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviesView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
