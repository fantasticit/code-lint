"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installLintStaged = void 0;
exports.installLintStaged = function () {
    return {
        toInstallDeps: ['lint-staged'],
        toAddFiles: [
            ['samples/lint-staged.config.js', 'lint-staged.config.js']
        ]
    };
};
