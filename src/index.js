import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from 'react-router';
// import { ConnectedRouter } from 'react-router-redux';
// import App from './App';
import store from './core/store';
import Routes from './routes';

import * as serviceWorker from './serviceWorker';
// import FormPresentation from './features/form';
// import MailPresentation from './features/mail';

// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<CssBaseline />

			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// {
// 	/* <Route path="/" component={App}>
//             <Route path="mail" component={MailPresentation} />
//             <Route path="form" component={FormPresentation} />
//         </Route> */
// }
// {
// 	/* </Routes> */
// }
// {
// 	/* <App /> */
// }
