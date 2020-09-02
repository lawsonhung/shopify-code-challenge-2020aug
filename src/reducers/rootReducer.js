export default (state={
  title: '',
  resultCt: 0,
  searchResults: null,
  nominations: []
}, action) => {
  switch(action.type) {
    case 'STORE_TITLE':
      return {
        title: action.title,
        resultCt: state.resultCt,
        searchResults: state.searchResults,
        nominations: state.nominations
      }

    case 'STORE_NUM_RESULTS':
      return {
        title: state.title,
        resultCt: action.resultCt,
        searchResults: state.searchResults,
        nominations: state.nominations
      }

    case 'RESET_NUM_RESULTS':
      return {
        title: state.title,
        resultCt: 0,
        searchResults: state.searchResults,
        nominations: state.nominations
      }

    case 'STORE_SEARCH_RESULTS':
      return {
        title: state.title,
        resultCt: state.resultCt,
        searchResults: action.searchResults,
        nominations: state.nominations
      }

    case 'STORE_NOMINATION':
      return {
        title: state.title,
        resultCt: state.resultCt,
        searchResults: state.searchResults,
        nominations: state.nominations.push('New Nomination')
      }

    default:
      return state;
  }
}