export function toggleTheme(isLeega, theme, empresa) {
	return {
		type: 'TOGGLE_THEME',
		isLeega,
		theme,
		empresa,
	};
}
export function isCnpj(cnpj) {
	return {
		type: 'IS_CNPJ',
		cnpj,
	};
}
export function setTitular(nameColab, dataSolicita) {
	return {
		type: 'USER_SET',
		nameColab,
		dataSolicita,
	};
}
