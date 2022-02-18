import { createAction, createReducer } from '@reduxjs/toolkit';
import { TITULAR } from '../../../models/titularform';
// import * as themes from '../../../../shared/themes';
export const titularSet = createAction('TITULAR_SET');

export default createReducer(TITULAR, {
	[titularSet.type]: (state, action) => {
		console.log(action);
		return {
			...state,
			[state]: [action.payload],
		};
	},
});
