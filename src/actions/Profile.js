import api from "../api";
import { PROFILE_FETCHED, CLEAR_CURRENT_PROFILE } from '../types'

export const userProfile = user => ({
	type: PROFILE_FETCHED,
	user
})

export const clearCurrentProfile = user => ({
	type: CLEAR_CURRENT_PROFILE,
	user
})


export const getUserProfile = username => dispatch => {
	let user = {
		avatar: null
	}
	dispatch(clearCurrentProfile(user));
	return api.profile.fetchUserProfile(username).then(user => {
		return dispatch(userProfile(user))
	})
}