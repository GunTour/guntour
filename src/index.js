import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.css';
import Index from "routes";
import { Provider } from 'react-redux';
import { store } from 'utils/redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);