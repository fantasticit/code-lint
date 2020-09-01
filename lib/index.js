"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var utils_1 = require("./utils");
var editorconfig_1 = require("./tasks/editorconfig");
var eslint_1 = require("./tasks/eslint");
var prettier_1 = require("./tasks/prettier");
var husky_1 = require("./tasks/husky");
var lintstaged_1 = require("./tasks/lintstaged");
var stylelint_1 = require("./tasks/stylelint");
var commitizen_1 = require("./tasks/commitizen");
var commitlint_1 = require("./tasks/commitlint");
exports.init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var start, spinner;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                start = Date.now();
                spinner = utils_1.createLoading('Install @fantaticit/code-lint...');
                spinner.start();
                return [4 /*yield*/, editorconfig_1.installEditorconfig()];
            case 1:
                _a.sent();
                return [4 /*yield*/, eslint_1.installEslint()];
            case 2:
                _a.sent();
                return [4 /*yield*/, stylelint_1.installStylelint()];
            case 3:
                _a.sent();
                return [4 /*yield*/, prettier_1.installPrettier()];
            case 4:
                _a.sent();
                return [4 /*yield*/, husky_1.installHusky()];
            case 5:
                _a.sent();
                return [4 /*yield*/, lintstaged_1.installLintStaged()];
            case 6:
                _a.sent();
                return [4 /*yield*/, commitizen_1.installCommitizen()];
            case 7:
                _a.sent();
                return [4 /*yield*/, commitlint_1.installCommitlint()];
            case 8:
                _a.sent();
                return [4 /*yield*/, utils_1.exec('yarn')];
            case 9:
                _a.sent();
                return [4 /*yield*/, utils_1.exec('npm rebuild')];
            case 10:
                _a.sent();
                spinner.stop();
                /* eslint-disable no-console */
                console.log("\u2728  Done in " + ((Date.now() - start) / 1000).toFixed(2) + "s");
                return [2 /*return*/];
        }
    });
}); };
