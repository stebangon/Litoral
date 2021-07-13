import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import GaleriaPage from './components/GaleriaPage';
import CotizarPage from './components/CotizarPage';
import DepartamentosPage from './components/DepartamentosPage';
import './index.css';

const hist = createBrowserHistory();
const app = (
  <Router history={hist}>
    <Switch>
      <Route exact path="/galeria" component={GaleriaPage} />
      <Route exact path="/cotizar" component={CotizarPage} />
      <Route exact path="/departamentos" component={DepartamentosPage} />
      <Route path="/" render={() => <App />} />
      {/* <Redirect from="/" to="/login" /> */}
    </Switch>
  </Router>
);
ReactDOM.render(app, document.getElementById('root'));
