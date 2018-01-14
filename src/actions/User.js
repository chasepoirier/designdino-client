import api from "../api";
import { userLoggedIn } from "./Auth";
import * as ActionTypes from "../actionTypes/ActionTypes";

export function fetchUser() {
	return {
		type: ActionTypes.VIEW_USER_NAME,
		payload: {
			name: 'Chase',
		}
	}
}

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.JWT = user.token;
    dispatch(userLoggedIn(user));
    return user;
  });

// export const fetchCurrentUser = () => dispatch => 
//     api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)))

