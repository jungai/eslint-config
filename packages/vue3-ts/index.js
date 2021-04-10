module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
	},
	ignorePatterns: ['custom_types/**'],
	extends: [
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/typedef': [
			'error',
			{
				arrowParameter: true,
			},
		],
		'@typescript-eslint/explicit-module-boundary-types': [
			'error',
			{
				allowedNames: ['setup'],
			},
		],
		'prettier/prettier': 'warn',
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/typedef': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
};
