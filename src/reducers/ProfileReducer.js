import { PROFILE_FETCHED } from "../types";

export default function profile(state = {loaded: false}, action = {}) {
  switch (action.type) {
    case PROFILE_FETCHED:
    	return {...state, ...action.user, loaded: true };
    default:
    	return state;
  }
}
