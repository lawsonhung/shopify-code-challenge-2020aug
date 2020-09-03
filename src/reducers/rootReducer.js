export default (state={
  title: '',
  resultCt: 0,
  searchResults: null,
  nominations: []
}, action) => {
  switch(action.type) {
    case 'STORE_TITLE':
      return {
        ...state,
        title: action.title
      }

    case 'STORE_NUM_RESULTS':
      return {
        ...state,
        resultCt: action.resultCt
      }

    case 'RESET_NUM_RESULTS':
      return {
        ...state,
        resultCt: 0
      }

    case 'STORE_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.searchResults
      }

    case 'STORE_NOMINATION':
      return {
        ...state,
        // nominations: []
        nominations: [...state.nominations, action.nominations]
      }

      case 'REMOVE_NOMINATION':
        return {
          ...state,
          nominations: [
            ...state.nominations.slice(0, action.nominationIndex),
            ...state.nominations.slice(action.nominationIndex + 1)
          ]
        }

    default:
      return state;
  }
}