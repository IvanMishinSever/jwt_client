import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import store from './Components/App/store.js';

const render =() => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
      state={store.getState()}
      dispatch={store.dispatch}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
