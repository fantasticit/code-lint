"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDefaultESLintConfig = function () {
    return {
        plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'jest', 'prettier'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                module: true,
            },
            project: './tsconfig.json',
        },
        env: {
            'es6': true,
            'browser': true,
            'node': true,
            'jest/globals': true,
        },
        extends: [
            'plugin:react/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:import/typescript',
            'plugin:import/react',
            'prettier',
            'plugin:prettier/recommended',
        ],
        rules: {
            'prettier/prettier': 'error',
            // 禁止使用二进制操作符 & | ~
            'no-bitwise': 'error',
            // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
            'for-direction': 'error',
            // 强制 getter 函数中出现 return 语句
            'getter-return': 'error',
            // 禁止使用异步函数作为 Promise executor
            'no-async-promise-executor': 'error',
            // 禁止在循环中出现 await
            'no-await-in-loop': 'warn',
            // 禁止与 -0 进行比较
            'no-compare-neg-zero': 'error',
            // 禁止条件表达式中出现赋值操作符
            'no-cond-assign': 'error',
            // 禁用 console
            'no-console': 'error',
            // 禁止在条件中使用常量表达式
            'no-constant-condition': 'error',
            // 禁止在正则表达式中使用控制字符
            'no-control-regex': 'error',
            // 禁用 debugger
            'no-debugger': 'error',
            // 禁止 function 定义中出现重名参数
            'no-dupe-args': 'error',
            // 禁止对象字面量中出现重复的 key
            'no-dupe-keys': 'error',
            // 禁止出现重复的 case 标签
            'no-duplicate-case': 'error',
            // 禁止出现空语句块
            'no-empty': 'error',
            // 禁止在正则表达式中使用空字符集
            'no-empty-character-class': 'error',
            // 禁止对 catch 子句的参数重新赋值
            'no-ex-assign': 'error',
            // 禁止不必要的布尔转换(Fixable)
            'no-extra-boolean-cast': 'error',
            // 禁止对 function 声明重新赋值
            'no-func-assign': 'error',
            // 禁止在嵌套的块中出现变量声明或 function 声明
            'no-inner-declarations': ['error', 'functions'],
            // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
            'no-invalid-regexp': 'error',
            // 禁止不规则的空白
            'no-irregular-whitespace': 'error',
            // 不允许在字符类语法中出现由多个代码点组成的字符
            'no-misleading-character-class': 'error',
            // 禁止把全局对象作为函数调用
            'no-obj-calls': 'error',
            // 禁止直接调用 Object.prototypes 的内置属性
            'no-prototype-builtins': 'error',
            // 禁止正则表达式字面量中出现多个空格(Fixable)
            'no-regex-spaces': 'error',
            // 禁用稀疏数组
            'no-sparse-arrays': 'error',
            // 禁止在常规字符串中出现模板字面量占位符语法
            'no-template-curly-in-string': 'warn',
            // 禁止出现令人困惑的多行表达式
            'no-unexpected-multiline': 'error',
            // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
            'no-unreachable': 'error',
            // 禁止在 finally 语句块中出现控制流语句
            'no-unsafe-finally': 'error',
            // 禁止对关系运算符的左操作数使用否定操作符(Fixable)
            'no-unsafe-negation': 'error',
            // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
            'require-atomic-updates': 'error',
            // 要求使用 isNaN() 检查 NaN
            'use-isnan': 'error',
            // 强制 typeof 表达式与有效的字符串进行比较
            'valid-typeof': 'error',
            // 强制把变量的使用限制在其定义的作用域范围内
            'block-scoped-var': 'error',
            // 强制类方法使用 this
            'class-methods-use-this': 'warn',
            // 要求 return 语句要么总是指定返回的值，要么不指定
            'consistent-return': 'error',
            // 强制尽可能地使用点号(Fixable)
            'dot-notation': 'error',
            // 禁用 arguments.caller 或 arguments.callee
            'no-caller': 'error',
            // 不允许在 case 子句中使用词法声明
            'no-case-declarations': 'error',
            // 禁止除法操作符显式的出现在正则表达式开始的位置(Fixable)
            'no-div-regex': 'error',
            // 禁止 if 语句中 return 语句之后有 else 块(Fixable)
            'no-else-return': ['error', { allowElseIf: false }],
            // 禁止出现空函数
            'no-empty-function': 'error',
            // 禁止使用空解构模式
            'no-empty-pattern': 'error',
            // 禁止在没有类型检查操作符的情况下与 null 进行比较
            'no-eq-null': 'warn',
            // 禁用 eval()
            'no-eval': 'error',
            // 禁止扩展原生类型
            'no-extend-native': 'error',
            // 禁止不必要的 .bind() 调用
            'no-extra-bind': 'error',
            // 禁用不必要的标签
            'no-extra-label': 'error',
            // 禁止 case 语句落空
            'no-fallthrough': 'error',
            // 禁止删除变量
            'no-delete-var': 'error',
            // 要求 switch 语句中有 default 分支
            'default-case': 'error',
            // 禁止数字字面量中使用前导和末尾小数点
            'no-floating-decimal': 'error',
            // 禁止对 function 的参数进行重新赋值
            'no-param-reassign': 'off',
            // 禁止多次声明同一变量
            'no-redeclare': 'error',
            // 禁止在 return 语句中使用赋值语句
            'no-return-assign': 'error',
            // 禁用一成不变的循环条件
            'no-unmodified-loop-condition': 'error',
            // 禁用未声明的变量，除非它们在 /* global */ 注释中被提到
            'no-undef': 'error',
            // getter/setter必须承兑出现
            'accessor-pairs': 'error',
            // 检查super调用是否合法
            'constructor-super': 'error',
            // 强制所有控制语句使用一致的括号风格(Fixable)
            'curly': 'error',
            // 禁止对原生对象或只读的全局对象进行赋值(Fixable)
            'no-global-assign': 'error',
            // 禁止使用类似 eval() 的方法
            'no-implied-eval': 'error',
            // 禁用 __iterator__ 属性
            'no-iterator': 'error',
            // 禁用标签语句
            'no-labels': 'error',
            // 禁用不必要的嵌套块
            'no-lone-blocks': 'error',
            // 禁止在循环语句中出现包含不安全引用的函数声明
            'no-loop-func': 'error',
            // 禁止使用多行字符串
            'no-multi-str': 'error',
            // 禁止对 Function 对象使用 new 操作符
            'no-new-func': 'error',
            // 禁止对 String，Number 和 Boolean 使用 new 操作符
            'no-new-wrappers': 'error',
            // 禁用八进制字面量
            'no-octal': 'error',
            // 禁止在字符串中使用八进制转义序列
            'no-octal-escape': 'error',
            // 禁用 __proto__ 属性
            'no-proto': 'error',
            // 禁用不必要的 return await
            'no-return-await': 'error',
            // 禁止使用 javascript: url
            'no-script-url': 'error',
            // 禁止自我赋值
            'no-self-assign': 'error',
            // 禁用出现未使用过的标
            'no-unused-labels': 'error',
            // 禁止不必要的 catch 子句
            'no-useless-catch': 'error',
            // 禁止多余的 return 语句
            'no-useless-return': 'error',
            // 要求使用 Error 对象作为 Promise 拒绝的原因
            'prefer-promise-reject-errors': 'error',
            // 禁止使用不带 await 表达式的 async 函数
            'require-await': 'error',
            // 禁止混合常规变量声明和 require 调用
            'no-mixed-requires': 'error',
            // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字(Fixable)
            'no-useless-rename': 'error',
            // 要求使用剩余参数而不是 arguments
            'prefer-rest-params': 'error',
            // 禁用函数内没有yield的 generator 函数
            'require-yield': 'error',
            'react/jsx-no-comment-textnodes': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/jsx-no-target-blank': 'error',
            'react/jsx-no-undef': 'error',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/no-children-prop': 'error',
            'react/no-danger-with-children': 'error',
            'react/no-deprecated': 'error',
            'react/no-direct-mutation-state': 'error',
            'react/no-is-mounted': 'error',
            'react/no-render-return-value': 'error',
            'react/no-string-refs': 'error',
            'react/no-unknown-property': 'error',
            'react/require-render-return': 'error',
            'react/react-in-jsx-scope': 'error',
            // 强制回调错误处理
            'handle-callback-err': ['error', '^(err|error)$'],
            // 要求构造函数首字母大写
            'new-cap': ['error', { newIsCap: true, capIsNew: false }],
            // 要求调用无参构造函数时带括号(Fixable)
            'new-parens': 'error',
            // 禁用 Array 构造函数
            'no-array-constructor': 'error',
            // 禁止修改类声明的变量
            'no-class-assign': 'error',
            // 禁止修改 const 声明的变量
            'no-const-assign': 'error',
            // 禁止类成员中出现重复的名称
            'no-dupe-class-members': 'error',
            // 不允许标签与变量同名
            'no-label-var': 'error',
            // 禁用 Object 的构造函数
            'no-new-object': 'error',
            // 禁止调用 require 时使用 new 操作符
            'no-new-require': 'error',
            // 禁止 Symbol 操作符和 new 一起使用
            'no-new-symbol': 'error',
            // 禁止对 __dirname 和 __filename 进行字符串连接
            'no-path-concat': 'error',
            // 禁止自身比较
            'no-self-compare': 'error',
            // 禁用逗号操作符
            'no-sequences': 'error',
            // 禁止将标识符定义为受限的名字
            'no-shadow-restricted-names': 'error',
            // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
            'no-this-before-super': 'error',
            // 禁止抛出异常字面量
            'no-throw-literal': 'error',
            // 不允许初始化变量值为 undefined(Fixable)
            'no-undef-init': 'error',
            // 禁止可以在有更简单的可替代的表达式时使用三元操作符(Fixable)
            'no-unneeded-ternary': ['error', { defaultAssignment: false }],
            // 禁止不必要的 .call() 和 .apply()
            'no-useless-call': 'error',
            // 禁止在对象中使用不必要的计算属性(Fixable)
            'no-useless-computed-key': 'error',
            // 禁用不必要的构造函数
            'no-useless-constructor': 'warn',
            // 禁用不必要的转义字符
            'no-useless-escape': 'error',
            // 禁用 with 语句
            'no-with': 'error',
            // 强制函数中的变量要么一起声明要么分开声明
            'one-var': ['error', { initialized: 'never' }],
            // 强制在注释中 // 或 /* 使用一致的空格
            'spaced-comment': [
                'error',
                'always',
                {
                    exceptions: [
                        // /*#__PURE__*/ 专门用来标识函数执行结果无副作用，不能加空格，特殊排除
                        '#__PURE__',
                    ],
                    markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
                },
            ],
            // 要求 IIFE 使用括号括起来(Fixable)
            'wrap-iife': ['error', 'any'],
            // 要求或禁止 “Yoda” 条件
            'yoda': ['error', 'never'],
            // 要求使用 let 或 const 而不是 var
            'no-var': 'error',
            // 禁止出现未使用过的表达式
            'no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
            ],
            // Report missing `key` props in iterators/collection literals
            'react/jsx-key': 'error',
            // Detect unescaped HTML entities, which might represent malformed tags
            'react/no-unescaped-entities': 'error',
            // Prevent usage of unsafe lifecycle methods
            'react/no-unsafe': 'error',
            // 允许使用后缀名为js的文件代替jsx
            'react/jsx-filename-extension': 'off',
            // 大括号内的空格规则
            'react/jsx-curly-spacing': [
                'error',
                {
                    when: 'never',
                    children: true,
                },
            ],
            // 关闭变量驼峰命名检查
            'camelcase': 'off',
            // 关闭变量驼峰命名检查(typescript)
            '@typescript-eslint/camelcase': 'off',
            // 不能有未使用的变量(关闭js的规则，统一使用@typescript-eslint/no-unused-vars)
            'no-unused-vars': 'off',
            // 不能有未使用的变量
            '@typescript-eslint/no-unused-vars': 'warn',
            // 禁用propType校验，代码规范统一使用typescript编写，不使用propTypes
            'react/prop-types': 'off',
            // 禁用React组件必须设置displayName，看具体场景由开发自行决定
            'react/display-name': 'off',
            // 禁止使用React.findDomNode
            'react/no-find-dom-node': 'warn',
            // 如果可能，优先推荐使用无状态函数组件
            'react/prefer-stateless-function': 'error',
            // 显式声明public/protected/private(JS文件需要关闭，否则误报)
            // interface命名规范存在争议，加不加I前缀？不做强制限制
            '@typescript-eslint/interface-name-prefix': 'off',
            // 禁止将函数表达式直接写到jsx的props中，避免可读性和性能问题
            'react/jsx-no-bind': ['error'],
            // 强制JSX的props必须书写完整的key=value，boolean型也要写完整
            'react/jsx-boolean-value': ['error', 'always'],
            // 显式定义函数返回类型，大部分靠类型推断，暂时不做强制限制
            '@typescript-eslint/explicit-function-return-type': 'off',
            // 空类型定义暂时不要认为error，一些老的class组件无徐任何props，必须写{}
            '@typescript-eslint/no-empty-interface': 'warn',
            // 变量的使用要在声明之后
            'no-use-before-define': ['error', { functions: true, classes: true }],
            // 函数调用必须在定义之后
            '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true }],
            // 不允许显式用any
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            // 暂时不检查@ts-ignore，包依赖逻辑不好解决，暂时忽略
            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-expect-error': true,
                    'ts-ignore': false,
                    'ts-nocheck': true,
                    'ts-check': false,
                },
            ],
            // 必须用=== !== 强制开启
            'eqeqeq': 'error',
            // 要求 for-in 循环中有一个 if 语句
            'guard-for-in': 'error',
            // 强制每个文件中包含的的类的最大数量
            'max-classes-per-file': ['error', 5],
            'no-alert': 'warn',
            // 优先用object spread，禁止使用Object.assign
            'prefer-object-spread': 'error',
            // 优先使用const关键字
            'prefer-const': 'error',
            // 约束ReactHooks必须遵守规范
            'react-hooks/rules-of-hooks': 'error',
            // ReactHooks的dependencies必须补充完整，不能遗漏
            'react-hooks/exhaustive-deps': 'error',
            // 不能出现解析不到的文件import引用
            'import/no-unresolved': 'warn',
            // 禁止使用require，优先使用import，特殊情况请disable单行
            '@typescript-eslint/no-var-requires': 'error',
            // 当import default的名字恰巧出现在命名导出时，可能是代码写错了，给出警告
            'import/no-named-as-default-member': 'warn',
            // 无export default但是使用import default，可能是代码写错了，报错
            'import/default': 'error',
            '@typescript-eslint/no-empty-function': 'warn',
        },
        overrides: [
            {
                files: [
                    '.cz-config.js',
                    '.eslintrc.js',
                    '.huskyrc.js',
                    'lint-staged.config.js',
                    'npmpackagejsonlint.config.js',
                    '.prettierrc.js',
                    'stylelint.config.js',
                    'commitlint.config.js',
                ],
                rules: {
                    '@typescript-eslint/no-var-requires': 'off',
                },
            },
        ],
        settings: {
            'react': {
                version: 'detect',
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                // use <root>/tsconfig.json
                typescript: {
                    alwaysTryTypes: true,
                },
            },
            'import/ignore': ['react', 'prop-types'],
        },
    };
};
exports.default = getDefaultESLintConfig;
module.exports = getDefaultESLintConfig;
