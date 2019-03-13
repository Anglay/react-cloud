import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from "react-router-redux";
import createBrowserHistory from 'history/createBrowserHistory'
//引入store
import { Provider } from "react-redux";
import store from "./redux/store";

import './index.less';
import 'element-theme-default';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
const history = createBrowserHistory()
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
