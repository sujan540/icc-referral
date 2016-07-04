{/*import fakeContracts from '../../init/initializeContracts';

const initialState = {
  items: fakeContracts,
  searchTerm: ''
}

console.log(initialState)*/}

let contractReducer = function (contracts=[], action){
  switch(action.type){


    case 'DELETE_CONTRACT':
      return {
        tems: state.items.filter(c => c.id !== action.id)
      }


    default:
      return contracts
  }

}

export default contractReducer
