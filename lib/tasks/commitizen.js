"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installCommitizen = void 0;
exports.installCommitizen = function () {
    return {
        toInstallDeps: ['commitizen', 'cz-customizable'],
        toModifyPkg: [
            function (pkg) {
                pkg.config = Object.assign(pkg.config || {}, {
                    commitizen: {
                        path: './node_modules/cz-customizable',
                    },
                });
            },
        ],
        toAddFiles: [
            ['samples/.cz-config.js', '.cz-config.js']
        ]
    };
};
