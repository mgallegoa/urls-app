import {type as saveUrl} from '../actions/saveUrl'

import axios from 'axios'

import UrlType from '../../models/url'


const mockUrls =
  {
    urlId: 19,
    url: 'http://start.spring.io',
    description: 'This is my description',
    slug: 'awasome-web-page',
    notes: 'This is the notes 19'
  }


const defaultState = {};

function reducer( state = defaultState, {type, payload}) {

  switch(type) {
    case saveUrl: {
      return mockUrls
    }

    default: {
      return state
    }
  }
}
export default reducer; 
