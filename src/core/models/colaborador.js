import * as themes from '../../shared/themes';

export const COLABORADOR = {
	theme: themes.leegaTheme,
	isLeega: false,
	cnpj: false,
	empresa: 'Leega',
	nameColab: 'CARREGANDO SERVIÇO',
	email: 'CARREGANDO SERVIÇO',
	dataSolicita: 'CARREGANDO SERVIÇO',
	cartoes: [
		{
			id: 1,
			nomePlano: 'Saúde',
			cardNum: '35966120211203023536',
			icon: 'https://static.overlay-tech.com/assets/a2445a6e-0ea9-49f4-ac5d-36e50c62108f.png',
			dependentes: [
				{
					ID: 1,
					NOME_DEPENDENTE: 'José Carlos Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
				{
					ID: 2,
					NOME_DEPENDENTE: 'Vitor Magalhaes Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
				{
					ID: 3,
					NOME_DEPENDENTE: 'Joao Marcos Magalhaes Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
				{
					ID: 4,
					NOME_DEPENDENTE: 'Joao Marcos Magalhaes Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
			],
		},
		{
			id: 2,
			nomePlano: 'Odonto',
			cardNum: '54545454545454545454',
			icon: 'https://static.overlay-tech.com/assets/a2445a6e-0ea9-49f4-ac5d-36e50c62108f.png',
			dependentes: [
				{
					ID: 1,
					NOME_DEPENDENTE: 'José Carlos Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
				{
					ID: 2,
					NOME_DEPENDENTE: 'Vitor Magalhaes Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
				{
					ID: 3,
					NOME_DEPENDENTE: 'Joao Marcos Magalhaes Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
				{
					ID: 4,
					NOME_DEPENDENTE: 'Maria Magalhaes Ferreira',
					NRO_SEGURO: '35966120211203023536',
				},
			],
		},
	],
};
