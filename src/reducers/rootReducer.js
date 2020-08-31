export default (state={
  username: ''
}, action) => {
  switch(action.type) {
    case 'STORE_USERNAME':
      return {
        username: action.username
      }

    case 'CLEAR_USERNAME':
      return {
        username: ''
      }

    default:
      return state;
  }
}