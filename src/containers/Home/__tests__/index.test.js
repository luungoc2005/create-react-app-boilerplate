import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../index';

describe('Home page rendering', () => {
  describe('Home/index page', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(React.createElement(HomePage), div);
    });
  });
});