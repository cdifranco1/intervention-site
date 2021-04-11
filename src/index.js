import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css'

import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>,
    rootElement
  );
} else {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>,
    rootElement
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
