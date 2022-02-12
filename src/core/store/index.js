// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import mail from './redux/reducers/mail';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// store.replaceReducer(rootReducer);

// export default store;
export default configureStore({
	reducer: {
		mail,
	},
});
