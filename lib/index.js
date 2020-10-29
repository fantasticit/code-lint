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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var utils_1 = require("./utils");
var editorconfig_1 = require("./tasks/editorconfig");
var eslint_1 = require("./tasks/eslint");
var prettier_1 = require("./tasks/prettier");
var husky_1 = require("./tasks/husky");
var lintstaged_1 = require("./tasks/lintstaged");
var stylelint_1 = require("./tasks/stylelint");
var commitizen_1 = require("./tasks/commitizen");
var commitlint_1 = require("./tasks/commitlint");
var removeDepVersion = function (dep) { return /(\w+)@(\w+)/.test(dep) ? dep.split('@')[0] : dep; };
exports.init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pkgPath, start, spinner, toAddFiles, toRemoveFiles, toInstallDeps, toRemoveDeps, toModifyPkg, collect, useYarn, removeCommand, installCommand, toRemoveDepsWithoutVersion, toInstallDepsWithoutVersion, pkg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                process.chdir(process.cwd());
                pkgPath = path_1.default.join(process.cwd(), 'package.json');
                if (!fs_extra_1.default.existsSync(pkgPath)) {
                    throw new Error("No package.json find in " + process.cwd());
                }
                start = Date.now();
                spinner = utils_1.createLoading('Install @fantaticit/code-lint...');
                spinner.start();
                toAddFiles = [];
                toRemoveFiles = [];
                toInstallDeps = [];
                toRemoveDeps = [];
                toModifyPkg = [];
                collect = function (fn) {
                    var _a = fn(), _b = _a.toAddFiles, s0 = _b === void 0 ? [] : _b, _c = _a.toRemoveFiles, s1 = _c === void 0 ? [] : _c, _d = _a.toInstallDeps, s2 = _d === void 0 ? [] : _d, _e = _a.toRemoveDeps, s3 = _e === void 0 ? [] : _e, _f = _a.toModifyPkg, s4 = _f === void 0 ? [] : _f;
                    /* eslint-disable prefer-spread */
                    toAddFiles.push.apply(toAddFiles, s0);
                    toRemoveFiles.push.apply(toRemoveFiles, s1);
                    toInstallDeps.push.apply(toInstallDeps, s2);
                    toRemoveDeps.push.apply(toRemoveDeps, s3);
                    toModifyPkg.push.apply(toModifyPkg, s4);
                };
                [
                    editorconfig_1.installEditorconfig,
                    eslint_1.installEslint,
                    stylelint_1.installStylelint,
                    prettier_1.installPrettier,
                    husky_1.installHusky,
                    lintstaged_1.installLintStaged,
                    commitizen_1.installCommitizen,
                    commitlint_1.installCommitlint,
                ].forEach(collect);
                useYarn = utils_1.hasYarn();
                if (!utils_1.hasYarn) return [3 /*break*/, 2];
                return [4 /*yield*/, utils_1.exec('yarn install')];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                removeCommand = useYarn ? function (deps) { return "yarn remove " + deps + " -D"; } : function (deps) { return "npm uninstall " + deps + " --save-dev"; };
                installCommand = useYarn ? function (deps) { return "yarn add " + deps + " -D"; } : function (deps) { return "npm install " + deps + " --save-dev"; };
                toRemoveDepsWithoutVersion = toRemoveDeps.map(removeDepVersion).join(' ');
                toInstallDepsWithoutVersion = toInstallDeps.map(removeDepVersion).join(' ');
                return [4 /*yield*/, utils_1.exec("" + removeCommand(toRemoveDepsWithoutVersion))];
            case 3:
                _a.sent();
                return [4 /*yield*/, utils_1.exec("" + installCommand(toInstallDepsWithoutVersion))];
            case 4:
                _a.sent();
                toRemoveFiles.forEach(utils_1.rm);
                toAddFiles.forEach(function (_a) {
                    var s = _a[0], t = _a[1];
                    return utils_1.copy(s, t);
                });
                pkg = fs_extra_1.default.readJsonSync(pkgPath);
                toModifyPkg.forEach(function (patch) {
                    patch(pkg);
                });
                fs_extra_1.default.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
                return [4 /*yield*/, utils_1.exec('yarn')];
            case 5:
                _a.sent();
                return [4 /*yield*/, utils_1.exec('npm rebuild')];
            case 6:
                _a.sent();
                spinner.stop();
                /* eslint-disable no-console */
                console.log("\u2728  Done in " + ((Date.now() - start) / 1000).toFixed(2) + "s");
                return [2 /*return*/];
        }
    });
}); };
