import { CREATE_FOSSIL, FOSSIL_FETCHED, ALL_FOSSILS_FETCHED, SET_TO_LOADING, USER_FOSSILS_FETCHED, ADD_DINO_CLAPS } from "../types";

export default function fossil(state = {loaded: false}, action = {}) {
  switch (action.type) {
    case CREATE_FOSSIL:
    	return {...state, success: action.success, loaded: false };
	case FOSSIL_FETCHED:
		return {...state, ...action.fossil, loaded: true};
	case ALL_FOSSILS_FETCHED:
		return {...state, fossils: action.fossils, loaded: true};
	case USER_FOSSILS_FETCHED:
		return {...state, fossils: action.fossils, loaded: true};
	case SET_TO_LOADING:
		return {...state, loaded: false}
	case ADD_DINO_CLAPS:
		return {...state, dinoClaps: action.claps.fossil}
    default:
    	return state;
  }
}
