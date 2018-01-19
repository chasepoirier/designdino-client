import { combineReducers } from 'redux';

import user from './UserReducer';
import profile from './ProfileReducer';
import fossil from './FossilReducer';

export default combineReducers({
	user,
	profile,
	fossil
})