import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { connect, Provider } from 'react-redux';
import { ThemeContext } from 'styled-components';
import store from '../../core/store';
import FormPresentation from './presentation/Form';

function Form({ theme }) {
	return (
		<div>
			<Provider store={store}>
				<ThemeContext.Provider value={theme}>
					<ThemeContext.Consumer>
						{t => (
							<ThemeProvider theme={t}>
								<FormPresentation />
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
export default connect(mapStateToProps)(Form);
