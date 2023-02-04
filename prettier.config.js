module.exports = {
	singleQuote: true,
	useTabs: true,
	tabWidth: 4,
	semi: false,
	jsxSingleQuote: true,
	bracketSpacing: true,
	arrowParens: 'always',
	printWidth: 140,
	quoteProps: 'preserve',
	trailingComma: 'all',
	overrides: [
		{
			files: '*.jsx',
			options: {
				printWidth: 120,
			},
		},
		{
			files: '*.tsx',
			options: {
				printWidth: 120,
			},
		},
	],
}
