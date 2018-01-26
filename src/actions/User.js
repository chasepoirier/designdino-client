import api from "../api";
import { userLoggedIn } from "./Auth";
import { USER_FETCHED, USER_CHANGE_AVATAR, UPDATE_USER_PROFILE, SHOW_USER_LIKES } from '../types'
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

export const userAvatar = avatar => ({
	type: USER_CHANGE_AVATAR,
	avatar
})

export const newUserProfile = user => ({
	type: UPDATE_USER_PROFILE,
	user
})

export const showUserLikes = likes => ({
	type: SHOW_USER_LIKES,
	likes
})

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

export const changeUserAvatar = (user, data) => dispatch => {
	return api.user.changeUserAvatar(user, data).then(res => {
		return dispatch(userAvatar(res.avatar)) 
	})
}

export const fetchUserLikes = (user) => dispatch => {
	return api.user.fetchUserLikes(user).then(res => {
		return dispatch(showUserLikes(res))
	})
}

export const updateUserProfile = (user, data) => dispatch => {
	return api.user.updateUserProfile(user, data).then(res => {
		return dispatch(newUserProfile(res))
	})
}

