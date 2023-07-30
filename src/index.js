import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerregister from './serviceWorkerRegistration';
import 'tachyons';
import {robots} from './robots';
import App from './containers/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>    
  <p>so we can have another container here lets see </p>
  </React.StrictMode>
);

// ReactDOM.render(<h1> aaa hello </h1>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorkerregister();
reportWebVitals();