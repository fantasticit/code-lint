"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installStylelint = void 0;
exports.installStylelint = function () {
    return {
        toInstallDeps: [
            'stylelint',
            'stylelint-config-standard',
            'stylelint-order',
        ],
        toRemoveFiles: [
            '.stylelintrc',
            '.stylelintrc.json',
            '.stylelintrc.yaml',
            '.stylelintrc.yml',
            '.stylelintrc.js',
        ],
        toAddFiles: [
            ['samples/stylelint.config.js', 'stylelint.config.js']
        ]
    };
};
