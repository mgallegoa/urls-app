/**
 * Action Creator for the current URL
 */
import { createUrlService } from '../../api/services'

export const type = 'createUrl'


const createUrl = dataUrlToCreate => {
    // Return de action
    return (dispactch, getState) => {
                createUrlService(dataUrlToCreate)
                   .then((response) =>
                        {
                        //TODO Call the update local array update
                        alert("URL saved successful, please refresh the page to see the result");
                        dispactch({type: type, payload: response.data})
                        }
                   )
                   .catch(error => {
                       console.log(error.response)
                   });
    }
};

export default createUrl;