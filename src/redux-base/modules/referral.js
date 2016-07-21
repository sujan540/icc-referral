import axios from 'axios';

// --------------------------- Action constants --------------------------
const LOAD = 'referrals/LOAD';
const LOAD_SUCCESS = 'referrals/LOAD_SUCCESS';
const LOAD_FAIL = 'referrals/LOAD_FAIL';
const ADD_REFERRAL = 'referrals/ADD_REFERRAL';
const LOAD_SKILLSETS = 'referrals/LOAD_SKILLSETS';

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
  return globalState.referrals && globalState.referrals.loaded;
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

  const name = form.name;
  const email = form.email;
  const connection = form.connection;
  const status = form.status;
  const extra = form.extra;
  const phone = form.phone;
  const linkedin = form.linkedin;
  const github = form.github;
  const twitter = form.twitter;
  const other = form.other;
  const skill = form.skill.join(', ');

  return {
    types: [ADD_REFERRAL],
    promise: axios
    .post('http://localhost:8080/EnterpriseArchitecture/referral/', { name, email, skill, connection, status, extra, phone, linkedin, github, twitter, other })
  };
}
