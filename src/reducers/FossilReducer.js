import { CREATE_FOSSIL, FOSSIL_FETCHED } from "../types";

export default function fossil(state = {loaded: false}, action = {}) {
  switch (action.type) {
    case CREATE_FOSSIL:
    	return {...state, success: action.success, loaded: true };
	case FOSSIL_FETCHED:
		return {...state, ...action.fossil, loaded: true}
    default:
    	return state;
  }
}
