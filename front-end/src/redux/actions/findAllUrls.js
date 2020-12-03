/**
 * Action Creator for find all Storeds URLs
 */
import { getUrlsService } from '../../api/services'

export const type = 'findAllUrls';

const findAllUrls = list => {
  // Return de action, here we use the middelware thunk for intercept the api call
  return (dispactch, getState) => {
                  getUrlsService()
                     .then((response) => dispactch({type: type, payload: response.data}))
                     .catch(error => {
                        console.log(error.response)
                     });
    }
};

export default findAllUrls;
