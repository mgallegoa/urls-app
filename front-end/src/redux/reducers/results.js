import {type as findAllUrlsType} from '../actions/findAllUrls'

const defaultState = [];

function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case findAllUrlsType: {
      return payload
    }
    default:
      return state;
  }
}

export default reducer;

