import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import App from './App';
import GaleriaPage from './components/GaleriaPage';
import CotizarPage from './components/CotizarPage';
import DepartamentosPage from './components/DepartamentosPage';
import AdminSolicitudesPage from './components/AdminSolicitudesPage';
import AdminDepartamentosPage from './components/AdminDepartamentosPage';
import AdminGaleriaPage from './components/AdminGaleriaPage';
import './index.css';

import { ParallaxProvider } from 'react-scroll-parallax';

const hist = createBrowserHistory();
const app = (
  <ParallaxProvider>
    <Router history={hist}>
      <Switch>
        <Route exact path="/galeria" component={GaleriaPage} />
        <Route exact path="/cotizar" component={CotizarPage} />
        <Route exact path="/departamentos" component={DepartamentosPage} />
        <Route
          exact
          path="/adminsolicitudes"
          component={AdminSolicitudesPage}
        />
        <Route
          exact
          path="/admindepartamentos"
          component={AdminDepartamentosPage}
        />
        <Route exact path="/admingaleria" component={AdminGaleriaPage} />
        <Route path="/" render={() => <App />} />
        {/* <Redirect from="/" to="/login" /> */}
      </Switch>
    </Router>
  </ParallaxProvider>
);
ReactDOM.render(app, document.getElementById('root'));
