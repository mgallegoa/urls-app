/**
 * Action Creator for find all Storeds URLs
 */
export const type = 'findAllUrls';

const findAllUrls = text => {
  // Return de action
  return {
    type,
    payload: text
  };
};

export default findAllUrls;
