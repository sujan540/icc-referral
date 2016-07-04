

let searchReducer = function (searchTerm='', action){
  switch(action.type){
    case 'SERACH_CONTRACTS':
      return {
        searchTerm: action.searchTerm
      }


    default:
      return searchTerm
  }

}

export default searchReducer
