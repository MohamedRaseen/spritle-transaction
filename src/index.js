import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from '../src/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
