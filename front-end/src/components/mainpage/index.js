/**
 * Container for logic
 */
import React, { Fragment, Component } from 'react';
import {Provider} from 'react-redux'
import store from '../../redux/store'

import AppBar from '../appBar'
import Create from '../create'
import Result from '../result'



class MainPage extends Component {

  constructor (props) {
       super(props)
       this.addUrlToArray = this.addUrlToArray.bind(this)
  }

  addUrlToArray(newUrl){
      //this.setState(newUrl)
      //this.props.results.unshift(this.state.newUrl)
  }

  render() {

      const { results, addUrlToArray } = this.props

      return (
        <Provider store={store}>
          <Fragment>
            <AppBar />
            <div className="container">
              <div className="row">
                <Create
                     addUrlToArray={this.addUrlToArray}
                />
                <Result
                     results={results}
                />
              </div>
            </div>
          </Fragment>
        </Provider>
      );
  }
}


export default MainPage;
