import { createAction, createReducer } from '@reduxjs/toolkit';
import { COLABORADOR } from '../../../models/colaborador';
import * as themes from '../../../../shared/themes';

export const toogleTheme = createAction('TOGGLE_THEME');
export const isCNPJ = createAction('IS_CNPJ');
export const userSet = createAction('USER_SET');
export const depSet = createAction('DEP_SET');

export default createReducer(COLABORADOR, {
	[toogleTheme.type]: (state, action) => {
		const empresaNome = action.payload.Empresa;
		const empresa = empresaNome === 'LEEGA' ? true : false;

		return {
			...state,
			isLeega: empresa,
			theme: empresa === true ? themes.leegaTheme : themes.fMapTheme,
		};
	},
	[isCNPJ.type]: (state, action) => {
		const regimeName = action.payload.REGIME;
		const regime = regimeName === 'CLT' ? false : true;
		console.log(regimeName);
		return {
			...state,
			cnpj: regime,
		};
	},
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

		return {
			...state,
			cartoes: cartao,
		};
	},
});
