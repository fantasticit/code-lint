"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installPrettier = void 0;
exports.installPrettier = function () {
    return {
        toInstallDeps: ['prettier'],
        toRemoveFiles: [
            '.prettierrc',
            'prettier.config.js',
            '.prettierrc.toml',
        ],
        toAddFiles: [
            ['samples/.prettierrc.js', '.prettierrc.js'],
            ['samples/.prettierignore', '.prettierignore']
        ],
    };
};
