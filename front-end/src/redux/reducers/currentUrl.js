const defaultState = { urlId: 2,
          url: 'http://start.spring.io',
          description: 'This is my description',
          slug: 'awasome-web-page',
          notes: 'This is the notes 3'
}

function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case 'findCurrentUrl': {
      return defaultState
    }

    default:
      return state;
  }
}

export default reducer;

