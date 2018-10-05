import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './style.css'

import summonerNameReducer from "./reducers/summonerNameReducer";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

//this is the redux store
var store = createStore(summonerNameReducer,

window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
