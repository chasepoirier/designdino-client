import api from "../api";
import { CREATE_FOSSIL, FOSSIL_FETCHED } from '../types'

export const fossilCreated = success => ({
	type: CREATE_FOSSIL,
	success
})

export const fossilFetched = fossil => ({
	type: FOSSIL_FETCHED,
	fossil
})

export const createNewFossil = (user, data) => dispatch => {
	return api.fossil.createFossil(user, data).then(res => {
		dispatch(fossilCreated('success'))
		return res
	})
}

export const fetchFossil = url => dispatch => {
	return api.fossil.fetchFossil(url).then(fossil => {
		dispatch(fossilFetched(fossil))
	})
}
