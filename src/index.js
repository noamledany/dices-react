import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import GamesCreator from "./GamesCreator";
import Game from "./Game";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HashRouter>
      <HeaderContainer key="header-container-key"/>
      <Route exact path={"/"} component={GamesCreator}/>
      <Route exact path={"/game/:guid"} component={Game}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
