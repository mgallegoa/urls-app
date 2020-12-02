/**
 * Container for logic
 */
import React, { Fragment, Component } from 'react';
import {Provider} from 'react-redux'
import store from '../../redux/store'
import { connect } from 'react-redux'

import AppBar from '../appBar'
import Create from '../create'
import Result from '../result'



function MainPage(props) {
  return (
    <Provider store={store}>
      <Fragment>
        <AppBar />
        <div className="container">
          <div className="row">
            <Create />
            <Result />
          </div>
        </div>
      </Fragment>
    </Provider>
  );
}


export default MainPage;
