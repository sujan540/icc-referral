import {
  FETCH_CONTRACTS,
  SEARCH_CONTRACTS,
  ADD_CONTRACT,
  EDIT_CONTRACT,
  DELETE_CONTRACT } from '../../constants/ActionTypes';

import fakeContracts from './fakeContracts';

const initialState = {
  items: fakeContracts,
  searchTerm: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_CONTRACTS:
      return {
        ...state,
        items: action.contracts
      };
    case SEARCH_CONTRACTS:
      return {
        ...state,
        items: action.contracts
      };
    case ADD_CONTRACT:
      return {
        ...state,
        items: state.items.concat(action.contract)
      };
    case EDIT_CONTRACT:
      return {
        ...state,
        items: state.items.map(c => c.id === action.contract.id ? { ...c, ...action.contract } : c)
      };
    case DELETE_CONTRACT:
      return {
        ...state,
        items: state.items.filter(c => c.id !== action.id)
      };
    default:
      return state;
  }
}
