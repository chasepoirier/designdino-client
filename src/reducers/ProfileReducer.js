import { PROFILE_FETCHED, CLEAR_CURRENT_PROFILE, UPDATE_USER_PROFILE } from "../types";

export default function profile(state = {loaded: false}, action = {}) {
  switch (action.type) {
    case PROFILE_FETCHED:
    	return {...state, ...action.user, loaded: true };
    case UPDATE_USER_PROFILE: 
    	return {...state, title: action.user.title, bio: action.user.bio}
    case CLEAR_CURRENT_PROFILE:
    	return {...state, ...action.user, loaded: false}
    default:
    	return state;
  }
}
