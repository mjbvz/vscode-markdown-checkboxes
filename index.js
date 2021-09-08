// @ts-check
'use strict';
const { workspace } = require('vscode');

function activate() {
    return {
        extendMarkdownIt(/** @type {import('markdown-it')*/ md) {
            const taskList = require('markdown-it-task-lists');
            return md.use(() => {
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
                return md;
            });
        }
    };
}
exports.activate = activate;
