import { PROFILE_FETCHED, CLEAR_CURRENT_PROFILE } from "../types";

export default function profile(state = {loaded: false}, action = {}) {
  switch (action.type) {
    case PROFILE_FETCHED:
    	return {...state, ...action.user, loaded: true };
    case CLEAR_CURRENT_PROFILE:
    	return {...state, ...action.user, loaded: false}
    default:
    	return state;
  }
}
