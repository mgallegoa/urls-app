/**
 * Action Creator for find the current Storeds URLs
 */
import { getCurrentUrlService } from '../../api/services'

export const type = 'findCurrentUrls';

// Return de action, here we use the middelware thunk for intercept the api call
const findCurrentUrls = urlSlug => {
    return { type, payload: +urlSlug }
};

export default findCurrentUrls;

/*return (dispactch, getState) => {
                  getCurrentUrlService(urlSlug.value)
                     .then((response) => dispactch({type: type, payload: response.data}))
                     .catch(error => {
                        console.log(error.response)
                     });
    }*/
