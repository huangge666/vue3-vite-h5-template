module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'eslint-config-prettier', // 关闭一些与 Prettier 冲突的 ESLint 规则。
    'prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  rules: {
    // 0表示不不处理，1表示警告，2表示错误并退出
    'vue/script-setup-uses-vars': 'error',
    'no-empty-function': 'off',
    // 关闭在定义之前使用变量
    'no-use-before-define': 'off',
    // 对页面中没有使用的变量加前缀 _
    'no-unused-vars': 'off',
    // 关闭函数括号前的空格
    'space-before-function-paren': 'off',
    // 关闭自定义事件强制使用大小写
    'vue/custom-event-name-casing': 'off',
    // 关闭对vue语法进行排序, 如v-if必须放到v-model之前
    'vue/attributes-order': 'off',
    // 强制每个组件都必须在自己的文件中
    'vue/one-component-per-file': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    // 关闭对于自定义组件强制执行属性命名样式
    'vue/attribute-hyphenation': 'off',
    // 关闭父传子props必须有默认值
    'vue/require-default-prop': 'off',
    // 警告需要使用emits规则触发
    'vue/require-explicit-emits': 'warn',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 8
        },
        multiline: {
          max: 4
        }
      }
    ],
    'vue/html-indent': 'off',
    'vue/valid-template-root': 'off',
    'vue/first-attribute-linebreak': 'off',
    semi: [2, 'never'], //要求或禁止使用分号代替 ASI
    'semi-spacing': [
      2,
      {
        //强制分号之前和之后使用一致的空格
        before: false,
        after: true
      }
    ],
    'vue/multi-word-component-names': 'off',
    'no-useless-escape': 'off',
    'no-undef': 'off',
    'no-console': 'off', //禁止调用 console 对象的方法
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ]
  }
}
