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
	[userSet.type]: (state, action) => {
		const cartao = state.cartoes.map((card, i) =>
			i === 0 ? { ...card, cardNum: action.payload.NRO_CARTEIRA } : card,
		);
		return {
			...state,
			nameColab: action.payload.Titular,
			dataSolicita: action.payload.DATA_ADMISSAO,
			cartoes: cartao,
		};
	},
	[depSet.type]: (state, action) => {
		const cartao = state.cartoes.map((card, i) =>
			i === 0 ? { ...card, dependentes: [action.payload] } : card,
		);
		cartao.map((card, i) =>
			i === 1 ? { ...card, dependentes: [action.payload] } : card,
		);

		console.log(cartao);
		console.log(state.cartoes);
		console.log(action.payload.NOME_DEPENDENTE);
		return {
			...state,
			cartoes: cartao,
		};
	},
});
