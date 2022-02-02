module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'prettier',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},

		ecmaVersion: 2020,
		sourceType: 'module',
	},

	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'prettier/prettier': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'import/prefer-default-export': 'off',
		'no-use-before-define': 'off',
		'no-unused-expressions': 'off',
		'import/no-cycle': 'off',
		'react/jsx-no-constructed-context-values': 'off',
		'no-unneeded-ternary': 'off',
		'prefer-object-spread': 'off',
		'consistent-return': 'off',
		'react/no-unstable-nested-components': 'off',
		'no-param-reassign': 'off',
		'react/function-component-definition': [
			'off',
			{
				namedComponents: [
					'function-declaration',
					'function-expression',
					'arrow-function',
				],
				unnamedComponents: [
					'function-declaration',
					'function-expression',
					'arrow-function',
				],
			},
		],
		camelcase: 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx'],
			},
		},
	},
};
