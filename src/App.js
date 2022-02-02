import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
// import { ThemeProvider } from 'styled-components';
import store from './core/store';
import MailPresentation from './features/mail';
import Simulation from './features/simulationMock';
import * as themes from './shared/themes';
import ThemeContext from './shared/themes/context';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: themes.leegaTheme,
		};
	}

	toggleTheme = () => {
		const { state } = this.state;
		this.setState({
			theme: state === themes.leegaTheme ? themes.fMapTheme : themes.leegaTheme,
		});
	};

	render() {
		const { theme } = this.state;
		return (
			<div className="App">
				<Provider store={store}>
					<ThemeContext.Provider value={theme}>
						<Simulation toogleTheme={this.toggleTheme} />
						<MailPresentation />
						{/* <ThemeContext.Consumer>
							<ThemeProvider theme={theme}>
								<MailPresentation />
							</ThemeProvider>
						</ThemeContext.Consumer> */}
					</ThemeContext.Provider>
				</Provider>
			</div>
		);
	}
}

export default App;
