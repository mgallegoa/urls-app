/**
 * Container for logic
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter  } from 'react-router-dom'
import Page from './page'
import findAllUrls from '../../redux/actions/findAllUrls'

class Results extends Component {
  constructor(props) {
    super(props)

    this.props.findAllUrls()
  }

  render() {

    const { results } = this.props

    return (
        <Page 
           results={results}
           goTo={(path) => {
               this.props.history.push(path)
           }}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
  }
}

const mapDispatchToProps = {
  //This is available like a prop
  findAllUrls,
}

//This is the specific form of the wrapper
const wrapper = connect( mapStateToProps, mapDispatchToProps )
const component = wrapper(Results)

export default withRouter (component);
