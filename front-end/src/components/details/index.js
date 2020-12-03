/**
 * Container for logic
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter  } from 'react-router-dom'
import Page from './page'
import findCurrentUrls from '../../redux/actions/findCurrentUrls'


class Details extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.findCurrentUrls(this.props.match.params.slug)
  }

  render() {

    const { currentUrl } = this.props
    return (
        <Page
           currentUrl={currentUrl}
           goTo={(path) => {
               this.props.history.push(path)
           }}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUrl: state.currentUrl,
  }
}

const mapDispatchToProps = {
  //This is available like a prop
  findCurrentUrls,
}

export default withRouter (connect( mapStateToProps, mapDispatchToProps)(Details));
