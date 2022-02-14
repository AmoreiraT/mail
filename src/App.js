import React from 'react';
import { connect, Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './core/store';
import MailPresentation from './features/mail';
// import Simulation from './features/simulationMock';

import ThemeContext from './shared/themes/context';

function App({ theme }) {
	return (
		<div>
			<Provider store={store}>
				<ThemeContext.Provider value={theme}>
					{/* <Simulation /> */}

					<ThemeContext.Consumer>
						{t => (
							<ThemeProvider theme={t}>
								<MailPresentation />
							</ThemeProvider>
						)}
					</ThemeContext.Consumer>
				</ThemeContext.Provider>
			</Provider>
		</div>
	);
}

const mapStateToProps = state => ({
	theme: state.mail.theme,
});
export default connect(mapStateToProps)(App);
