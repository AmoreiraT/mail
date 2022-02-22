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
		const array = [];
		array.push(state.cartoes);

		console.log(array);
		const cartao = state.cartoes.map((card, i) =>
			i === 0
				? { ...card, cardNum: action.payload.NRO_CARTEIRA }
				: { ...card, cardNum: action.payload.NRO_CARTEIRA_ODONTO },
		);

		console.log(cartao);

		return {
			...state,
			nameColab: action.payload.Titular,
			dataSolicita: action.payload.DATA_ADMISSAO,
			cartoes: cartao,
		};
	},
	[depSet.type]: (state, action) => {
		const deps = action.payload;
		const cartao = state.cartoes;
		const array = [];
		array.push(state.cartoes);

		console.log(array);

		deps.forEach(e => {
			if (e.NRO_CARTEIRA !== null) {
				cartao[0].dependentes.push({ num: e.NRO_CARTEIRA });
			}
		});
		// const arr = [];
		// const obj = {
		// 	saude: [],
		// 	odonto: [],
		// };

		// const objcartao = { saude: {}, odonto: {} };

		// deps.forEach(element => {
		// 	obj.saude.push(element.NRO_CARTEIRA);
		// 	obj.odonto.push(element.NRO_CARTEIRA_ODONTO);
		// });

		// cartao.forEach((e, i) => {
		// 	i === 0
		// 		? e.dependentes.forEach(d => d.num.replace(action.payload.NRO_CARTEIRA))
		// 		: e.dependentes.forEach(d =>
		// 				d.num.replace(action.payload.NRO_CARTEIRA_ODONTO),
		// 		  );
		// });

		console.log(cartao);
		console.log(deps);
		// console.log(obj);
		// console.log(objcartao);

		return {
			...state,
			// cartoes: cartao,
			dependentes: deps,
		};
	},
});
