import api from "../api";
import { userLoggedIn } from "./Auth";
import { USER_FETCHED, PROFILE_FETCHED } from '../types'
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.JWT = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
    return user;
  });

export const userFetched = user => ({
	type: USER_FETCHED,
	user
});

export const fetchCurrentUser = () => dispatch => 
	api.user.fetchCurrentUser().then(user => {
		if(!user) {
			let res = false
			return dispatch(userFetched(res))
		} else {
			let newUser = { ...user, token: localStorage.JWT}
			return dispatch(userFetched(newUser))	
		}
	})
