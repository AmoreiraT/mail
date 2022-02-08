import queryString from 'query-string';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COLABORADOR } from '../models/colaborador';
import * as MailAction from '../store/redux/actions/userset';

export const login = () => {
	fetch('https://apps.blueprojects.com.br/arturos_mr/Security/login', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: 'leega_admin',
			password: 'leega@mr',
		}),
	})
		.then(response => response.json())
		.then(responseJson => {
			console.log(responseJson);

			// var token;

			const token = responseJson.data.auth_ticket;
			fetchEpm(token);
		});
};

const fetchEpm = token => {
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
	fetch('https://apps.blueprojects.com.br/arturos_mr/Integration/Query', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			auth: token,
		},
		body: JSON.stringify(obj),
	})
		.then(response => response.json())
		.then(responseJson => {
			console.log(responseJson);

			if (responseJson.list.length > 0) {
				console.log(responseJson.list[0].Titular);
				console.log(responseJson.list[0].DATA_ADMISSAO);
				responseJson.list[0].Empresa === 'LEEGA' ? true : false;
				COLABORADOR.dataSolicita = responseJson.list[0].DATA_ADMISSAO;
				COLABORADOR.nameColab = responseJson.list[0].Titular;
				COLABORADOR.empresa = responseJson.list[0].Empresa;
				console.log(responseJson.list[0]);

				// return responseJson.list[0];
			}
		});
};

const mapDispatchToProps = dispatch => bindActionCreators(MailAction, dispatch);

export default connect(mapDispatchToProps)(fetchEpm);
