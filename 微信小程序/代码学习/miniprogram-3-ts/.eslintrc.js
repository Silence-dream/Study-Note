module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint" ],
    rules: {
    /*
     * "off"或者0    //关闭规则关闭
     * "warn"或者1    //在打开的规则作为警告（不影响退出代码）
     * "error"或者2    //把规则作为一个错误（退出代码触发时为1）
     */
        indent: ["error", 4 ], //代码缩进
        // "new-cap": ["error", {"capIsNew": false}],
        "no-multiple-empty-lines": [1, { max: 2 } ], //最大空行
        "no-trailing-spaces": 1, //一行结束后面不要有空格
        "no-delete-var": 2, //不能对var声明的变量使用delete操作符
        "no-dupe-args": 2, //函数参数不能重复
        "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-else-return": 2, //如果if语句里面有return,后面不能跟else语句
        "no-implicit-coercion": 1, //禁止隐式转换
        "linebreak-style": [0, "windows" ], //换行风格
        "no-mixed-spaces-and-tabs": [2, false ], //禁止混用tab和空格
        "comma-spacing": [1, { before: false, after: true } ], //逗号前后的空格
        camelcase: 2, //强制驼峰法命名
        "comma-dangle": [2, "always-multiline" ], //对象字面量项尾不能有逗号
        semi: [2, "always" ], //强制语句结束有分号
        "brace-style": [2, "1tbs" ], // 大括号风格
        "computed-property-spacing": [1, "never" ], //强制在计算的属性的方括号中使用一致的空格
        "block-spacing": [2, "always" ], //禁止或强制在代码块中开括号前和闭括号后有空格
        "func-call-spacing": [1, "never" ], //要求或禁止在函数标识符和其调用之间有空格
        "keyword-spacing": [1, { before: true } ], //强制关键字周围空格的一致性
        "object-curly-newline": [1, { multiline: true } ], //强制在花括号内使用一致的换行符
        "array-bracket-newline": [1, { multiline: true } ], //在数组开括号后和闭括号前强制换行
        "array-element-newline": [1, { multiline: true } ],
    },
    globals: {
        getApp: true,
        Page: true,
        wx: true,
        App: true,
        getCurrentPages: true,
        Component: true,
    },
};
