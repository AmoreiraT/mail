export function tootgleTheme(isLeega, theme) {
	return {
		type: 'TOGGLE_THEME',
		isLeega,
		theme,
	};
}
export function setTitular(nameColab) {
	return {
		type: 'USER_SET',
		nameColab,
	};
}
