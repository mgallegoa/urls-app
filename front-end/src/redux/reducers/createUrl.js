import {type as createUrl} from '../actions/createUrl'
import { CREATE_URL_SUCCES } from '../../commons/constants'

const defaultState = {};

function reducer( state = defaultState, {type, payload}) {

  switch(type) {
    case createUrl: {
      return payload
    }

    case CREATE_URL_SUCCES: {
       return payload
    }

    case CREATE_URL_SUCCES: {
       return payload
    }

    default: {
      return state
    }
  }
}
export default reducer; 
