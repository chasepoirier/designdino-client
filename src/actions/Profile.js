import api from "../api";
import { PROFILE_FETCHED } from '../types'

export const userProfile = user => ({
	type: PROFILE_FETCHED,
	user
})


export const getUserProfile = username => dispatch => {
	return api.profile.fetchUserProfile(username).then(user => {
		return dispatch(userProfile(user))
	})
}