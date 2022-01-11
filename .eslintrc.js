const commonRules = {
  'no-console'                   : 1,
  'import/extensions'            : 0,
  'quote-props'                  : 0,
  'import/prefer-default-export' : 0,
  'no-await-in-loop'             : 0,
  'no-restricted-syntax'         : 0,
  'max-classes-per-file'         : 0,
  'no-underscore-dangle'         : 0,
  'no-unused-expressions'        : 0,
  'no-case-declarations'         : 0,
  'no-shadow'                    : 0,
  'brace-style'                  : ["error", "1tbs", { "allowSingleLine" : true }],
  'lines-between-class-members'  : 0,
  'max-len'                      : ['warn', 120],
  'no-nested-ternary'            : 0,
  'key-spacing'                  : ['error', {
    afterColon  : true,
    beforeColon : true,
    align       : {
      beforeColon : true,
      afterColon  : true,
      on          : 'colon',
    },
  }],
  'import/no-cycle' : 0, // IMPORTANT
};

module.exports = {
  plugins : ['@typescript-eslint'],
  extends : [
    'airbnb-base',
    'prettier',
  ],
  env : {
    node : true,
    jest : true,
  },
  rules : commonRules,

  overrides : [
    {
      files   : ['*.ts'],
      extends : [
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules : {
        ...commonRules,

        '@typescript-eslint/interface-name-prefix' : 0,

        '@typescript-eslint/no-explicit-any' : 0, // TRY: Remove this
        '@typescript-eslint/ban-ts-ignore'   : 0, // TRY: Remove this
      },

      settings : {
        'import/extensions' : ['.ts'],
        'import/parsers'    : {
          '@typescript-eslint/parser' : ['.ts'],
        },
        'import/resolver' : {
          node : {
            extensions : ['.ts', '.d.ts', '.js'],
          },
        },
      },
    },
  ],
};