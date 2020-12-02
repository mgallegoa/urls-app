const defaultState = [
  {
    urlId: 1,
    url: 'http://start.spring.io',
    description: 'This is my description',
    slug: 'awasome-web-page',
    notes: 'This is the notes'
  },
  {
    urlId: 2,
    url: 'http://start.spring.io',
    description: 'This is my description',
    slug: 'awasome-web-page',
    notes: 'This is the notes'
  }

];

function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case 'findCurrentUrl ': {
      return [
        {
         urlId: 2,
          url: 'http://start.spring.io',
          description: 'This is my description',
          slug: 'awasome-web-page',
          notes: 'This is the notes'
        }
      ];
    }
    default:
      return state;
  }
}

export default reducer;

