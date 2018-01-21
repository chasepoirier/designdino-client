import api from "../api";
import { USER_FOSSILS_FETCHED, CREATE_FOSSIL, FOSSIL_FETCHED, ALL_FOSSILS_FETCHED } from '../types'

export const fossilCreated = success => ({
	type: CREATE_FOSSIL,
	success
})

export const fossilFetched = fossil => ({
	type: FOSSIL_FETCHED,
	fossil
})

export const allFossilsFetched = fossils => ({
	type: ALL_FOSSILS_FETCHED,
	fossils
})

export const userFossilsFetched = fossils => ({
	type: USER_FOSSILS_FETCHED,
	fossils
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

export const getAllFossils = () => dispatch => {
	return api.fossil.getAllFossils().then(fossils => {
		dispatch(allFossilsFetched(fossils))
		return fossils
	})
}

export const fetchUserFossils = user => dispatch => {
	return api.fossil.fetchUserFossils(user).then(fossils => {
		dispatch(userFossilsFetched(fossils))
		return fossils
	})
}
