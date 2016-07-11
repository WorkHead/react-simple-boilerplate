/**
 * Created by tanjiasheng on 2016/7/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import routes from './router'

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'));