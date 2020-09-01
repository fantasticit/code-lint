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
exports.setPkg = exports.modifyPkg = exports.install = exports.uninstall = exports.getPkg = void 0;
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var hasYarn_1 = require("./hasYarn");
var exec_1 = require("./exec");
exports.getPkg = function () {
    return function () {
        return fs_extra_1.default.readJsonSync(path_1.default.join(process.cwd(), 'package.json'));
    };
};
exports.uninstall = function (dep) {
    return function (pkg) { return __awaiter(void 0, void 0, void 0, function () {
        var dependencies, devDependencies, depWithoutVersion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependencies = pkg.dependencies;
                    devDependencies = pkg.devDependencies;
                    depWithoutVersion = /(\w+)@(\w+)/.test(dep) ? dep.split('@')[0] : dep;
                    if (!((dependencies && dependencies[depWithoutVersion]) ||
                        (devDependencies && devDependencies[depWithoutVersion]))) return [3 /*break*/, 2];
                    return [4 /*yield*/, exec_1.exec((hasYarn_1.hasYarn() ? 'yarn remove' : 'npm uninstall') + " " + depWithoutVersion)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, exports.getPkg()()];
            }
        });
    }); };
};
exports.install = function (dep) {
    return function (pkg) { return __awaiter(void 0, void 0, void 0, function () {
        var dependencies, devDependencies, depWithoutVersion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependencies = pkg.dependencies;
                    devDependencies = pkg.devDependencies;
                    depWithoutVersion = /(\w+)@(\w+)/.test(dep) ? dep.split('@')[0] : dep;
                    if (!(dependencies && dependencies[depWithoutVersion])) return [3 /*break*/, 2];
                    return [4 /*yield*/, exec_1.exec((hasYarn_1.hasYarn() ? 'yarn remove' : 'npm uninstall') + " " + depWithoutVersion)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(!devDependencies || !devDependencies[depWithoutVersion])) return [3 /*break*/, 4];
                    return [4 /*yield*/, exec_1.exec((hasYarn_1.hasYarn() ? 'yarn add' : 'npm install') + " " + dep + " --dev")];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, exports.getPkg()()];
            }
        });
    }); };
};
exports.modifyPkg = function (fn) {
    return function (pkg) {
        fn(pkg);
        return pkg;
    };
};
exports.setPkg = function () {
    return function (pkg) {
        fs_extra_1.default.writeFileSync(path_1.default.join(process.cwd(), 'package.json'), JSON.stringify(pkg, null, 2));
        exec_1.exec('./node_modules/.bin/prettier package.json --write').catch(function () {
            exec_1.exec('npx prettier package.json --write');
        });
    };
};
