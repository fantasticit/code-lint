"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDefaultCommitlintConfig = function () {
    return {
        extends: ['@commitlint/config-conventional'],
    };
};
exports.default = getDefaultCommitlintConfig;
module.exports = getDefaultCommitlintConfig;
