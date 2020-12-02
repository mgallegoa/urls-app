/**
 * Container for logic
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Page from './page'

class Create extends Component {
  render () {
    const { currentUrl } = this.props

    return (
        <Page 
          currentUrl={currentUrl}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUrl: state.currentUrl,
  }
}

export default connect(mapStateToProps)(Create);
