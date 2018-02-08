import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Routes from './routes/Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../src/styles/login/login.css';
import '../src/styles/plugins/icons/icons.css';
import '../src/script/login/login.js';

let routes = Routes.routes;

ReactDOM.render(
  <Router children={routes} />
, document.getElementById('help-desk-root') as HTMLElement);