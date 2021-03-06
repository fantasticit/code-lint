"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = exports.rm = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
exports.rm = function (file) {
    var target = path_1.default.join(process.cwd(), file);
    fs_extra_1.default.removeSync(target);
    console.log("Add file " + target); // eslint-disable-line no-console
};
exports.copy = function (source, target) {
    var newTarget = path_1.default.join(process.cwd(), target);
    var content = fs_extra_1.default.readFileSync(path_1.default.join(__dirname, '../', source), {
        encoding: 'utf8',
    });
    fs_extra_1.default.outputFileSync(newTarget, content);
    console.log("Add file " + newTarget); // eslint-disable-line no-console
};
