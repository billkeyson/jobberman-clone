import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {StateProvider} from './StateProvider';
import reducer , {initalState} from './reducer';

ReactDOM.render(
  <BrowserRouter>
  <StateProvider 
    reducer ={reducer} 
    initialState = {initalState}>
        <App />
    </StateProvider>
  </BrowserRouter>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
