import * as ActionTypes from "../actionTypes/ActionTypes";
import { getApiUrl } from '../config';

const BaseURL = getApiUrl();

export function fetchUser() {
	return {
		type: ActionTypes.VIEW_USER_NAME,
		payload: {
			name: 'Chase',
		}
	}
}

// export function createNewUser(user) {
// 	console.log('user', user);
//     return dispatch => {
//         dispatch(request({ user }));
//         fetch(`${BaseURL}/users/new-user`, {
// 			method: 'POST',
// 			'Content-type': 'application/json',
// 			body: JSON.stringify(user)
//         })
//         	.then(dispatch(success(user)))
//     };

//     function request(user) { return { type: ActionTypes.FETCH_REQUEST, payload: user } }
//     function success(user) { return { type: ActionTypes.FETCH_SUCCESS, payload: user } }
// }

export function createNewUser(user) {
	console.log('New User', user);
    return dispatch => {
        dispatch(request());
        setTimeout(() => {
        	dispatch(success(user))	
        }, 2000);
    };

    function request() { return { type: ActionTypes.FETCH_REQUEST } }
    function success(user) { return { type: ActionTypes.FETCH_SUCCESS, payload: user } }
}
