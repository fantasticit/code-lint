declare const getDefaultPrettierConfig: () => {
    singleQuote: boolean;
    quoteProps: string;
    bracketSpacing: boolean;
    jsxBracketSameLine: boolean;
    arrowParens: string;
    trailingComma: string;
    tabWidth: number;
    semi: boolean;
    printWidth: number;
    endOfLine: string;
};
export default getDefaultPrettierConfig;
