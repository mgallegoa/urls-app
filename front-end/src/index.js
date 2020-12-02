import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/superhero/bootstrap.min.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './redux/store'

import MainPage from './components/mainpage'
import Details from './components/details'



const Root = (
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
       <Route path="/urls-app" component={MainPage} />
       <Route path="/urls-detail/:slug" component={Details} />
       <Redirect from="/" to="/urls-app" />
    </Switch>
  </BrowserRouter>
  </Provider>
);


ReactDOM.render(
  Root,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
