/**
 * Container for logic
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Page from './page'

class Results extends Component {
  render() {
    const { results } = this.props

    return (
        <Page 
           results={results}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
  }
}

const wrapper = connect( mapStateToProps )
const component = wrapper(Results)

export default component
