declare const getDefaultHuskyConfig: () => {
    hooks: {
        'commit-msg': string;
        'prepare-commit-msg': string;
        'pre-commit': string;
        'post-merge': string;
    };
};
export default getDefaultHuskyConfig;
