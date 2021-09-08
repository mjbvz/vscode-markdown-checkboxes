'use strict';
const { workspace } = require('vscode');

function activate(context) {
    return {
        extendMarkdownIt(/** @type {import('markdown-it')*/ md) {
            const taskList = require('markdown-it-task-lists');
            return md.use(function (...args) {
                const config = workspace.getConfiguration('markdown-checkboxes');
                const x = md.use(taskList, {
                    enabled: config.get('enable'),
                    label: config.get('label'),
                    labelAfter: config.get('labelAfter')
                });
                const y = x.use(taskList, {
                    enabled: config.get('enable'),
                    label: config.get('label'),
                    labelAfter: config.get('labelAfter')
                });
                console.log(y.core.ruler.__rules__)
                return md;
            });
        }
    };
}
exports.activate = activate;
