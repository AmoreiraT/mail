import { createAction, createReducer } from '@reduxjs/toolkit';
import { COLABORADOR } from '../../../models/colaborador';
import * as themes from '../../../../shared/themes';

export const toogleTheme = createAction('TOGGLE_THEME');
export const isCNPJ = createAction('IS_CNPJ');
export const userSet = createAction('USER_SET');
export const depSet = createAction('DEP_SET');

export default createReducer(COLABORADOR, {
	[toogleTheme.type]: (state, action) => ({
		...state,
		isLeega: action.isLeega === true ? false : true,
		theme: action.isLeega === true ? themes.leegaTheme : themes.fMapTheme,
	}),
	[isCNPJ.type]: (state, action) => ({
		...state,
		cnpj: action.cnpj === true ? false : true,
	}),
	[userSet.type]: (state, action) => ({
		...state,
		nameColab: action.payload.Titular,
		dataSolicita: action.payload.DATA_ADMISSAO,
	}),
	[depSet.type]: (state, action) => {
		const variavelArray = state.cartoes[0].dependentes;
		variavelArray.push({ name: action.payload.NOME_DEPENDENTE });
		console.log(variavelArray);

		console.log(action.payload.NOME_DEPENDENTE);
		return {
			...state,
			// dependentes: action.payload.NOME_DEPENDENTE,
		};
	},

	//     => ({
	// 	...state,
	// 	dependentes: action.payload,

	// 	// cartoes: {
	// 	// 	...state.cartoes[0],
	// 	// 	dependentes: {
	// 	// 		...action.payload,
	// 	// 	},
	// 	// },
	// }),
});
