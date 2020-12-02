/**
 * Action Creator for the current URL
 */
export const type = 'findCurrentUrl';

const findCurrentUrl = id => {
  // Return de action
  return {
    type,
    payload: id
  };
};

export default findCurrentUrl;
