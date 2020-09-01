"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasYarn = void 0;
var child_process_1 = require("child_process");
var _hasYarn = null;
/**
 * 检查安装环境下是否安装 yarn
 */
exports.hasYarn = function () {
    if (_hasYarn != null) {
        return _hasYarn;
    }
    try {
        child_process_1.execSync('yarn --version', { stdio: 'ignore' });
        return (_hasYarn = true);
    }
    catch (e) {
        return (_hasYarn = false);
    }
};
