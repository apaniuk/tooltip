module.exports = {
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2020,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': false,
		},
	},
	'env': {
		'browser': true,
		'node': true,
		'jest': true,
	},
	'globals': {
		'__BROWSER__': true,
		'__SERVER__': true,
		'process': true,
		'JSX': true,
	},
	'settings': {
		'import/parser': 'babel-eslint',
		'import/resolve': {
			'moduleDirectory': [
				'node_modules',
				'src',
			],
		},
		'import/ignore': [
			'\\.scss$',
			'node_modules',
			'\\.json$',
		],
		'import/resolver': {
			'node': {
				'extensions': [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
				],
			},
		},
		'react': {
			'version': 'detect',
		},
	},
	'plugins': [
		'react',
		'import',
		'unused-imports',
		'react-hooks',
		'@typescript-eslint',
		'@typescript-eslint/eslint-plugin',
	],
	'extends': [
		// 'react-app',
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'rules': {
		'react-hooks/exhaustive-deps': 'warn',
		'semi': [
			2,
			'never',
		],
		'object-curly-spacing': [
			1,
			'never',
		],
		'object-shorthand': [
			2,
			'always',
		],
		'quotes': [
			1,
			'single',
			'avoid-escape',
		],
		'space-infix-ops': [
			'error',
		],
		'jsx-quotes': [
			2,
			'prefer-single',
		],
		'key-spacing': [
			2,
			{
				'beforeColon': false,
			},
		],
		'arrow-body-style': 0,
		'comma-dangle': [
			1,
			'always-multiline',
		],
		'global-require': 0,
		'react/display-name': 0,
		'react/prefer-stateless-function': 0,
		'no-nested-ternary': 0,
		'func-names': 0,
		'linebreak-style': 0,
		'no-case-declarations': 0,
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'new-cap': [
			2,
			{
				'capIsNew': false,
			},
		],
		'space-before-function-paren': [
			2,
			'never',
		],
		'no-multi-spaces': [
			2,
			{
				'exceptions': {
					'VariableDeclarator': true,
					'AssignmentExpression': true,
				},
			},
		],
		'no-underscore-dangle': 0,
		'no-alert': 0,
		'no-console': 1,
		'object-property-newline': 'error',
		'max-len': [
			2,
			{
				'code': 1000,
			},
		],
		'no-extra-parens': [
			2,
			'functions',
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				'multiline': {
					'delimiter': 'none', // "none" or "semi" or "comma"
					'requireLast': true,
				},
				'singleline': {
					'delimiter': 'semi', // 'semi' or 'comma'
					'requireLast': false,
				},
			},
		],
		'camelcase': 0,
		'react/no-array-index-key': 0,
		'react/jsx-boolean-value': 2,
		'react/jsx-closing-bracket-location': [
			2,
			'line-aligned',
		],
		'react/jsx-curly-spacing': 2,
		'react/jsx-first-prop-new-line': 2,
		'react/jsx-indent-props': [
			0,
			'tab',
		],
		'react/jsx-indent': [
			0,
			'tab',
		],
		'react/jsx-filename-extension': [
			'error',
			{
				'extensions': [
					'.js',
					'.jsx',
					'.tsx',
				],
			},
		],
		'object-curly-newline': [
			'error',
			{
				'ObjectExpression': {
					'minProperties': 1,
					'multiline': true,
				},
				'ObjectPattern': {
					'multiline': true,
				},
				'ImportDeclaration': 'never',
				'ExportDeclaration': {
					'multiline': true,
					'minProperties': 3,
				},
			},
		],
		'react/jsx-key': 2,
		'react/jsx-max-props-per-line': [
			1,
			{
				'maximum': 1,
			},
		],
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			1,
			{
				'functions': true,
				'classes': true,
				'variables': false,
			},
		],
		'react/jsx-no-duplicate-props': 2,
		'no-undef': 2,
		'react/jsx-no-undef': 2,
		'@typescript-eslint/no-empty-function': 1,
		'react/jsx-no-bind': 0,
		'react/jsx-props-no-spreading': 0,
		'react/no-danger': 0,
		'react/no-direct-mutation-state': 2,
		'react/prefer-es6-class': 2,
		'react/sort-comp': 0,
		'react/forbid-prop-types': 0,
		'react/no-unescaped-entities': 0,
		'react/require-default-props': 0,
		'react/prop-types': 0,
		'react/jsx-one-expression-per-line': 0,
		'unused-imports/no-unused-imports': 'off',
		// "sort-imports": [
		//     "error",
		//     {
		//     "ignoreDeclarationSort": true
		// }],
		'import/no-unresolved': 0,
		'import/named': 2,
		'import/default': 2,
		'import/namespace': 2,
		'import/export': 2,
		'import/no-named-as-default': 1,
		'import/no-named-as-default-member': 2,
		'import/no-extraneous-dependencies': 0,
		'import/no-mutable-exports': 2,
		'import/no-commonjs': 0,
		'import/no-amd': 2,
		'import/no-cycle': 0,
		'import/imports-first': 2,
		'import/no-duplicates': 2,
		'import/newline-after-import': 2,
		'import/extensions': 0,
		'import/prefer-default-export': 0,
		'@typescript-eslint/array-type': [
			'error',
		],
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'indent': 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
		],
		'@typescript-eslint/ban-types': 'off',
	},
}
