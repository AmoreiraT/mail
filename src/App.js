import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './core/store';
import MailPresentation from './features/mail';
import Simulation from './features/simulationMock';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Simulation />
				<MailPresentation />
			</Provider>
		</div>
	);
}

export default App;
