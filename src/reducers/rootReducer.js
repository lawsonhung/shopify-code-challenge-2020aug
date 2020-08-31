export default (state={
  title: ''
}, action) => {
  switch(action.type) {
    case 'STORE_TITLE':
      return {
        title: action.title
      }

    case 'CLEAR_TITLE':
      return {
        title: ''
      }

    default:
      return state;
  }
}