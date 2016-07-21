import axios from 'axios';

// --------------------------- Action constants --------------------------
const LOAD = 'referrals/LOAD';
const LOAD_SUCCESS = 'referrals/LOAD_SUCCESS';
const LOAD_FAIL = 'referrals/LOAD_FAIL';
const SEARCH_REFERRALS = 'referrals/SEARCH_REFERRALS';

// --------------------------- Reducer function --------------------------
const initialState = {
  loaded: false,
  loading: true,
  data: null,
  error: null,
  searchTerm: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        searchTerm: 'Suj'
      };
    case SEARCH_REFERRALS:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data,
        error: null,
        searchTerm: ''
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error.data,
        searchTerm: ''
      };
    default:
      return state;
  }
}

// --------------------------- Action functions --------------------------
export function isLoaded(globalState) {
  return globalState.referrals && globalState.referrals.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL, SEARCH_REFERRALS],
    promise: axios.get('http://localhost:8080/EnterpriseArchitecture/referral/')
  };
}
