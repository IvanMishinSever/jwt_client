import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import store from './Components/App/store.js';
import { createRoot } from 'react-dom/client';
  import { Provider } from 'react-redux';

/*
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
  */
const root = createRoot(document.getElementById("root"));
const render = () => {
  root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App 
       state={store.getState()}
        dispatch={store.dispatch}
      />
    </Provider>
</React.StrictMode>
);
}
render();
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
