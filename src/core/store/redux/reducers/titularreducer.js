import { createAction, createReducer } from '@reduxjs/toolkit';
import { TITULAR } from '../../../models/titularform';
// import * as themes from '../../../../shared/themes';
export const titularSet = createAction('TITULAR_SET');

export default createReducer(TITULAR, {
	[titularSet.type]: (state, action) => {
		const obj = action.payload;
		console.log(obj);
		return {
			...state,
			...obj,
		};
	},
});
