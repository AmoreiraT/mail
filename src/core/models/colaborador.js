import * as themes from '../../shared/themes';

export const COLABORADOR = {
	theme: themes.leegaTheme,
	isLeega: false,
	cnpj: false,
	empresa: 'Leega',
	nameColab: 'CARREGANDO SERVIÇO',
	email: 'CARREGANDO SERVIÇO',
	dataSolicita: 'CARREGANDO SERVIÇO',
	dependentes: [
		{
			ID: 0,
			NOME_DEPENDENTE: '',
			NRO_CARTEIRA: '',
			NRO_CARTEIRA_ODONTO: '',
		},
	],
	cartoes: [
		{
			id: 1,
			nomePlano: 'Saúde',
			cardNum: '',
			icon: 'https://static.overlay-tech.com/assets/a2445a6e-0ea9-49f4-ac5d-36e50c62108f.png',
			dependentes: [
				{
					ID: 1,
					NOME_DEPENDENTE: '',
					num: '',
				},
			],
		},
		{
			id: 2,
			nomePlano: 'Odonto',
			cardNum: '',
			icon: 'https://static.overlay-tech.com/assets/a2445a6e-0ea9-49f4-ac5d-36e50c62108f.png',
			dependentes: [
				{
					ID: 1,
					NOME_DEPENDENTE: ' ',
					num: '',
				},
			],
		},
	],
};
