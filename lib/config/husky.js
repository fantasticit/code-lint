"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = __importDefault(require("os"));
var getDefaultHuskyConfig = function () {
    var config = {
        hooks: {
            'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
            'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
            'pre-commit': 'lint-staged',
            'post-merge': 'yarn',
        },
    }; // 针对lerna等特殊工具需要命令式调用git commit，避免git cz交互式操作，出现bug
    // windows上脚本执行存在bug，暂时忽略交互式git-cz
    if (process.env.NO_PREPARE_COMMIT_MSG || os_1.default.platform() === 'win32') {
        delete config.hooks['prepare-commit-msg'];
    }
    return config;
};
exports.default = getDefaultHuskyConfig;
module.exports = getDefaultHuskyConfig;
