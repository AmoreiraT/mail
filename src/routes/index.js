import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import FormPresentation from '../features/form';
// import MailPresentation from '../features/mail';

function Routes() {
	return (
		<Switch>
			<Route path="/mail" component={App} />
			<Route path="/form" component={FormPresentation} />
		</Switch>
	);
}

export default Routes;
