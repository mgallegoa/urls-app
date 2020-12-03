/**
 * Container for logic
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Page from './page'
import createUrl from '../../redux/actions/createUrl'


class Create extends Component {
   constructor(props) {
    super(props)
     this.state = {
       urlName:'',
       urlDescription:'',
       urlNotes:'',
     };
     this.createUrl = this.createUrl.bind(this)
   }

   createUrl(newUrl) {
        this.state.newUrl = newUrl
        this.props.createUrl(this.state.newUrl)
   }

   render () {
     const {
       urlName,
       urlDescription,
       urlNotes,
       newUrl
     } = this.state
     const {
       createUrl,
       addUrlToArray,
     } = this.props


   return (
        <Page 
          urlName={urlName}
          urlDescription={urlDescription}
          urlNotes={urlNotes}
          createUrl={this.createUrl}
          addUrlToArray={addUrlToArray}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    createUrl: state.createUrl
  }
}

const mapDispatchToProps = {
  //This is available like a prop
  createUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
