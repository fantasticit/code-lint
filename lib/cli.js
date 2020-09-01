"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var _1 = require(".");
commander_1.default.command("init").description("\u521D\u59CB\u5316 code-dog").action(_1.init);
commander_1.default.arguments('<command>').action(function (cmd) {
    commander_1.default.outputHelp();
    /* eslint-disable no-console */
    console.log("  " + ("\u672A\u77E5\u547D\u4EE4 " + cmd + "."));
    console.log();
});
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
commander_1.default.parse(process.argv);
