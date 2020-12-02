import {type as findAllUrlsType} from '../actions/findAllUrls'

import UrlType from '../../models/url'

const mockArrayUrls = [
  {
    urlId: 1,
    url: 'http://start.spring.io',
    description: 'This is my description',
    slug: 'awasome-web-page',
    notes: 'This is the notes 1'
  },
  {
    urlId: 2,
    url: 'http://start.spring.io',
    description: 'This is my description',
    slug: 'awasome-web-page',
    notes: 'This is the notes 2'
  }
];


const defaultState = [];

function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case findAllUrlsType: {
      /*return (dispatch, getState) => {
        return axios.get('http://localhost:8080/api/urls/').then(response => {
          dispatch(fetchAllUrlsSucceeded(response.data));
        })
      }*/
      return mockArrayUrls
    }
    default:
      return state;
  }
}

export default reducer;

