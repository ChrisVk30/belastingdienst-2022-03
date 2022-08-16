module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'xo',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'no-unused-vars': 'off',
		'no-useless-constructor': 'off', // Because I don't care
	},
};
