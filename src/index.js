import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { userFetched, fetchCurrentUser } from './actions/User';
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

if (localStorage.JWT) {
  setAuthorizationHeader(localStorage.JWT);
  store.dispatch(fetchCurrentUser());
} else {
  store.dispatch(userFetched({}));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));
// registerServiceWorker();
