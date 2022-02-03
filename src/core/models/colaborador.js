import * as themes from '../../shared/themes';

export const COLABORADOR = {
	theme: themes.leegaTheme,
	isLeega: false,
	cnpj: false,
	empresa: 'Leega',
	nameColab: 'Thiago Moreira Faria',
	email: '',
	dataSolicita: '03/12/2021 15:41',
	cartoes: [
		{
			id: 1,
			nomePlano: 'Saúde',
			cardNum: '35966120211203023536',
			icon: 'https://static.overlay-tech.com/assets/a2445a6e-0ea9-49f4-ac5d-36e50c62108f.png',
			dependentes: [
				{
					id: 1,
					name: 'José Carlos Ferreira',
					cardNum: '35966120211203023536',
				},
				{
					id: 2,
					name: 'Vitor Magalhaes Ferreira',
					cardNum: '35966120211203023536',
				},
				{
					id: 3,
					name: 'Joao Marcos Magalhaes Ferreira',
					cardNum: '35966120211203023536',
				},
				{
					id: 4,
					name: 'Joao Marcos Magalhaes Ferreira',
					cardNum: '35966120211203023536',
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
					id: 1,
					name: 'José Carlos Ferreira',
					cardNum: '35966120211203023536',
				},
				{
					id: 2,
					name: 'Vitor Magalhaes Ferreira',
					cardNum: '35966120211203023536',
				},
				{
					id: 3,
					name: 'Joao Marcos Magalhaes Ferreira',
					cardNum: '35966120211203023536',
				},
				{
					id: 4,
					name: 'Maria Magalhaes Ferreira',
					cardNum: '35966120211203023536',
				},
			],
		},
	],
};
