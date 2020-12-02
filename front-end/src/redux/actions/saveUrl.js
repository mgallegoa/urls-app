/**
 * Action Creator for the current URL
 */
import api from '../../api' 

export const type = 'saveUrl'


const saveUrl = text => {
  // Return de action
  return {
    type,
    payload: text
  };
}

export default saveUrl;
