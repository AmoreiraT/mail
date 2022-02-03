import React from 'react';
import { connect, Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './core/store';
import MailPresentation from './features/mail';
import Simulation from './features/simulationMock';
// import * as themes from './shared/themes';
import ThemeContext from './shared/themes/context';

function App({ theme }) {
	return (
		<div>
			<Provider store={store}>
				<ThemeContext.Provider value={theme}>
					<Simulation />

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

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			theme: themes.leegaTheme,
// 		};
// 	}

// 	// toggleTheme = () => {
// 	// 	const { state } = this.state;
// 	// 	console.log(state);
// 	// 	this.setState({
// 	// 		theme: state === themes.leegaTheme ? themes.fMapTheme : themes.leegaTheme,
// 	// 	});
// 	// };

// 	render() {
// 		const { theme } = this.state;

// 		return (
// 			<div>
// 				<Provider store={store}>
// 					<ThemeContext.Provider value={theme}>
// 						<Simulation />

// 						<ThemeContext.Consumer>
// 							{t => (
// 								<ThemeProvider theme={t}>
// 									<MailPresentation />
// 								</ThemeProvider>
// 							)}
// 						</ThemeContext.Consumer>
// 					</ThemeContext.Provider>
// 				</Provider>
// 			</div>
// 		);
// 	}
// }

// export default App;
