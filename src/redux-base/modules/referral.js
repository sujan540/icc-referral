import axios from 'axios';

// --------------------------- Action constants --------------------------
const LOAD = 'referral/LOAD';
const LOAD_SUCCESS = 'referral/LOAD_SUCCESS';
const LOAD_FAIL = 'referral/LOAD_FAIL';
const ADD_REFERRAL = 'referral/ADD_REFERRAL';
const LOAD_SKILLSETS = 'referral/LOAD_SKILLSETS';

// --------------------------- Reducer function --------------------------
const initialState = {
  loaded: false,
  loading: true,
  data: null,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_REFERRAL:
      return {
        ...state
      };
    case LOAD_SKILLSETS:
      return {
        ...state,
        loading: true
      };
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error.data
      };
    default:
      return state;
  }
}

// --------------------------- Action functions --------------------------
export function isLoaded(globalState) {
  return globalState.referral && globalState.referral.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: axios.get('http://localhost:3001/api/referrals')
  };
}

export function loadSkillSets() {
  return {
    types: [LOAD_SKILLSETS, LOAD_SUCCESS, LOAD_FAIL],
    promise: axios.get('http://localhost:3001/api/skillSets')
  };
}

export function addReferral(form) {
  console.log(form.name);
  console.log(form.skill);
  console.log(form.extra);
  console.log(form.status);
  return {
    types: [ADD_REFERRAL],
    promise: axios
    .post('http://localhost:3001/api/addReferral', { form })
  };
}
