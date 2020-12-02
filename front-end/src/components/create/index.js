/**
 * Container for logic
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Page from './page'
import saveUrl from '../../redux/actions/saveUrl'

const mockUrls =
  {
    urlId: 19,
    url: 'http://start.spring.io',
    description: 'This is my description',
    slug: 'awasome-web-page',
    notes: 'This is the notes 19'
  }


class Create extends Component {
   constructor(props) {
    super(props)
     this.state = {
       urlName:'',
       urlDescription:'',
       urlNotes:'',
     };

  }

  render () {
    const {
       urlName,
       urlDescription,
       urlNotes,
     } = this.state
    const {
       saveUrl
    } = this.props


    return (
        <Page 
          urlName={urlName}
          urlDescription={urlDescription}
          urlNotes={urlNotes}
          saveUrl={saveUrl}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    saveUrl: state.saveUrl
  }
}

const mapDispatchToProps = {
  //This is available like a prop
  saveUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
