// import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import mail from './redux/reducers/mail';
import titular from './redux/reducers/titularreducer';

export default configureStore({
	reducer: {
		mail,
		titular,
	},
});
