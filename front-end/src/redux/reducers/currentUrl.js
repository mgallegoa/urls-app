import {type as findCurrentUrlsType} from '../actions/findCurrentUrls'
import {findAllReducer as reducer} from './results'

const defaultState = {};

function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case findCurrentUrlsType: {
          if (!payload) {
              return null;
          }

      return findAllReducer.find(n => n.slug === payload);
    }
    default:
      return state;
  }
}

export default reducer;

