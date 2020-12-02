/**
 * Page for the presentation
 */

import React, { Fragment } from 'react';
import {Provider} from 'react-redux'
import store from '../../redux/store'

import AppBar from '../appBar'
import Create from '../create'
import Result from '../result'

function Page(props) {
  return (
    <Provider store={store}>
      <Fragment>
        <AppBar />
        <div className="container">
          <Create />
          <Result />
        </div>
      </Fragment>
    </Provider>
  );
}

export default Page;
