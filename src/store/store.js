/* eslint-disable prettier/prettier */
import { authReducer } from '../reducers/authReducer';
import {combineReducers, createStore} from 'redux';

//Mantiene el store en el local storage
//para no perder la info almacenada de redux.
const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
};

//Carga lo almacenado en el local storage
//para que si se pierde la info de redux, se pueda recuperar
const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };

const peristedState = loadState();

const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(
    reducers, 
    peristedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Este metodo escucha cuando el valor cambia y lo almacena
//en el local storage
store.subscribe(() => {
    saveState(store.getState());
});