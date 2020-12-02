/**
 * Action Creator for the current URL
 */
export const type = 'saveUrl';

const saveUrl = text => {
  // Return de action
  return {
    type,
    payload: text
  };
};

export default saveUrl;
