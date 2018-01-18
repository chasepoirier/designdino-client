import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from './reducers/';

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducers, 
	composeWithDevTools(middleware
));