import * as ActionTypes from "../actionTypes/ActionTypes";

const initialState = {
	name: null,
	username: null,
	email: null
}

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.VIEW_USER_NAME: {
			return {...state, name: action.payload.name}
		}
		case ActionTypes.SET_NEW_USER: {
			return {...state, 
				name: action.payload.name,
				username: action.payload.username,
				email: action.payload.email,
			}
		}
		case ActionTypes.FETCH_REQUEST: {
			return {...state,
				isFetching: true,
				fetched: false
			}
		}
		case ActionTypes.FETCH_SUCCESS: {
			return {...state,
				isFetching: false,
				fetched: true,
				name: action.payload.name,
				email: action.payload.email,
				username: action.payload.username,
				password: action.payload.password,
			}
		}
		default: 
			return state
	}
}