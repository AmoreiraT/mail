import { COLABORADOR } from '../../../models/colaborador';
import * as themes from '../../../../shared/themes';

export default function mail(state, action) {
	state = COLABORADOR;
	if (action.type === 'TOGGLE_THEME') {
		console.log(action);

		return {
			...state,
			isLeega: action.isLeega === true ? false : true,
			theme: action.isLeega === true ? themes.leegaTheme : themes.fMapTheme,
		};
	}
	if (action.type === 'IS_CNPJ') {
		console.log(action);

		return {
			...state,
			cnpj: action.cnpj === true ? false : true,
		};
	}
	if (action.type === 'USER_SET') {
		console.log(action);

		return {
			...state,
			nameColab: action.nameColab,
			dataSolicita: action.dataSolicita,
		};
	}
	console.log(state);

	return state;
}
