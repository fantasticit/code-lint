"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installHusky = void 0;
exports.installHusky = function () {
    return {
        toRemoveDeps: [
            'pre-commit',
            'ghooks',
            'precommit-hook',
            'yorkie',
        ],
        toInstallDeps: [
            'husky',
        ],
        toAddFiles: [
            ['samples/.huskyrc.js', '.huskyrc.js']
        ],
        toRemoveFiles: [
            '.huskyrc',
            '.huskyrc.json',
            'husky.config.js',
            '.husky.config.js',
        ],
    };
};
