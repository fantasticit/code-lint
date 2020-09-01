declare const getDefaultLintStagedConfig: () => {
    '*.{js,jsx,ts,tsx}': (fileNames: any) => string[];
    '*.{css,scss,sass}': string[];
    '*.md': string[];
};
export default getDefaultLintStagedConfig;
