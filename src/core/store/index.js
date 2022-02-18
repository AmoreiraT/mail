// import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import mail from './redux/reducers/mail';

export default configureStore({
	reducer: {
		mail,
	},
});
