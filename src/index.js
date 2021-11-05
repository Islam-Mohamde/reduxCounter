import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {createStore} from 'redux'
import allReducers from './reducer'
import { Provider } from 'react-redux'

const store = createStore(allReducers)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  rootElement
);
