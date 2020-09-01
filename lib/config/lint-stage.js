"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var getDefaultLintStagedConfig = function () {
    return {
        '*.{js,jsx,ts,tsx}': function (fileNames) {
            var fileList = fileNames.join(' ');
            var actions = ["eslint --fix " + fileList];
            if (fs.existsSync('./tsconfig.json')) {
                actions.push('tsc -p tsconfig.json --noEmit');
            }
            return actions;
        },
        '*.{css,scss,sass}': ['stylelint --fix --formatter verbose --allow-empty-input'],
        '*.md': ['prettier --write', 'git add'],
    };
};
exports.default = getDefaultLintStagedConfig;
module.exports = getDefaultLintStagedConfig;
