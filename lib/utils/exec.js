"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
var cross_spawn_1 = __importDefault(require("cross-spawn"));
/**
 * 执行指定脚本命令
 * @param cmd
 * @param options
 */
exports.exec = function (cmd, options) {
    if (options === void 0) { options = {}; }
    var _a = cmd.split(' '), shell = _a[0], args = _a.slice(1);
    return new Promise(function (resolve, reject) {
        var child = cross_spawn_1.default(shell, args, __assign({ stdio: 'pipe' }, options));
        var stdout = Buffer.from([]);
        var stderr = Buffer.from([]);
        child.stdout &&
            child.stdout.on('data', function (buf) {
                stdout = Buffer.concat([stdout, buf]);
            });
        child.stderr &&
            child.stderr.on('data', function (buf) {
                stderr = Buffer.concat([stderr, buf]);
            });
        child.on('exit', function (code) {
            if (code !== 0) {
                var reason = stderr + " || unknown error";
                reject(new Error("child process exited with code " + code + " due to " + reason));
            }
            else {
                resolve("" + stdout);
            }
        });
        child.on('error', function (err) {
            reject(new Error("child process exited due to " + err));
        });
    });
};
