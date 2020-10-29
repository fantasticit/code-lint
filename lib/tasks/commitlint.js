"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installCommitlint = void 0;
exports.installCommitlint = function () {
    return {
        toInstallDeps: [
            '@commitlint/cli',
            '@commitlint/config-conventional'
        ],
        toAddFiles: [
            [
                'samples/commitlint.config.js',
                'commitlint.config.js'
            ],
        ]
    };
};
