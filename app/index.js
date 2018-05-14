import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const AppDOM = () => (
  <App />
);

const appDom = document.getElementById('app')

ReactDOM.render(
  <AppDOM />,
  appDom
);
