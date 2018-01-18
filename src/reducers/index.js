import { combineReducers } from 'redux';

import user from './UserReducer';
import profile from './ProfileReducer';

export default combineReducers({
	user,
	profile
})