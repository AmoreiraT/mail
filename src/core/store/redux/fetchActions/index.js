import queryString from 'query-string';
// import api from '../../../services/api';
import { depSet, userSet, toogleTheme, isCNPJ } from '../reducers/mail';

// ////////////////////
// ////////////////////

// MAIL PHASE

export const doLogin = () => {
	return async dispatch => {
		await fetch('https://apps.blueprojects.com.br/arturos_mr/Security/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: 'andre',
				password: 'andre',
			}),
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);

				// var token;

				const token = responseJson.data.auth_ticket;
				dispatch(fetchMR(token));
				dispatch(fetchMRDependente(token));
			});
	};
};
export const fetchMR = token => {
	const value = queryString.parse(window.location.search);
	console.log(value.id);
	const obj = {
		qid: 'MINHAS_SOLICITACOES:MINHAS_SOLICITACOES',
		conditions: [
			{
				filterid: 'HASH',
				values: [value.id],
			},
		],
	};
	return async dispatch => {
		await fetch(
			'https://apps.blueprojects.com.br/arturos_mr/Integration/Query',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			},
		)
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				const resList = [...responseJson.list];
				console.log(resList);

				if (resList.length > 0) {
					console.log('cheguei no if');
					const titular = responseJson.list[0];
					console.log(titular);
					// const dataSolicita = responseJson.list[0].DATA_ADMISSAO.payload;
					// const nameColab = responseJson.list[0].DATA_ADMISSAO.payload;
					// console.log(dataSolicita);
					dispatch(userSet(titular));
					dispatch(toogleTheme(titular));
					dispatch(isCNPJ(titular));
				}
			});
	};
};

export const fetchMRDependente = token => {
	const value = queryString.parse(window.location.search);
	console.log(value.id);
	const obj = {
		qid: 'MINHAS_SOLICITACOES:DEPENDENTES',
		conditions: [
			{
				filterid: 'HASH',
				values: [value.id],
			},
		],
	};
	return async dispatch => {
		await fetch(
			'https://apps.blueprojects.com.br/arturos_mr/Integration/Query',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					auth: token,
				},
				body: JSON.stringify(obj),
			},
		)
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				const resList = [...responseJson.list];
				console.log(resList);

				if (resList.length > 0) {
					console.log('cheguei no if');
					const dependente = responseJson.list;
					console.log(dependente);

					dispatch(depSet(dependente));
				}
			});
	};
};
