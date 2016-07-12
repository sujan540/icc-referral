import axios from 'axios';

// --------------------------- Action constants --------------------------
const LOAD = 'movies/LOAD';
const LOAD_SUCCESS = 'movies/LOAD_SUCCESS';
const LOAD_FAIL = 'movies/LOAD_FAIL';
const ADD_MOVIE = 'movies/ADD_MOVIE';

// --------------------------- Reducer function --------------------------
const initialState = {
  loaded: false,
  loading: true,
  data: null,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_MOVIE:
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
  return globalState.movies && globalState.movies.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: axios.get('http://localhost:3001/api/referrals')
  };
}

export function addMovie(title, sprocketCount, owner) {
  console.log(title);
  console.log(sprocketCount);
  console.log(owner);
  return {
    types: [ADD_MOVIE],
    promise: axios
    .post('http://localhost:3001/api/addMovie', { title, sprocketCount, owner })
  };
}
