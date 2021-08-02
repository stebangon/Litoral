/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import GaleriaPage from './components/GaleriaPage';
import CotizarPage from './components/CotizarPage';
import DepartamentosPage from './components/DepartamentosPage';
import AdminSolicitudesPage from './components/AdminSolicitudesPage';
import AdminDepartamentosPage from './components/AdminDepartamentosPage';
import AdminGaleriaPage from './components/AdminGaleriaPage';
import LoginPage from './components/LoginPage';
import { Provider } from 'react-redux';
import {store} from './store/store';
import { PrivateRoute } from './actions/PrivateRoute';
import './index.css';

const hist = createBrowserHistory();
const isLogedin = () => {
  //obtengo lo que esta en el redux
  const {auth} = store.getState();
  console.log('usuario en index', auth.usuario);
  return (auth.usuario !== undefined);
};
const app = (
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/galeria" component={GaleriaPage} />
        <Route exact path="/cotizar" component={CotizarPage} />
        <Route exact path="/departamentos" component={DepartamentosPage} />
        <PrivateRoute
            exact path="/adminsolicitudes" component={AdminSolicitudesPage}
            isAuthenticated={ isLogedin }
        />
        <PrivateRoute
            exact path="/admindepartamentos" component={AdminDepartamentosPage}
            isAuthenticated={ isLogedin }
        />
        <PrivateRoute
            exact path="/admingaleria" component={AdminGaleriaPage}
            isAuthenticated={ isLogedin }
        />
        <Route exact path="/login" component={LoginPage}/>
        <Route path="/" render={() => <App />} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
