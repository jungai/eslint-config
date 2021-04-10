module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
		'react/jsx-props-no-spreading': 'off',
		'no-console': 'warn',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
	},
};
