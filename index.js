'use strict';
const { workspace } = require('vscode');

function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-task-lists'), {
                enabled:  workspace.getConfiguration().get('vscode-markdown-checkboxes.enable'),
                label:  workspace.getConfiguration().get('vscode-markdown-checkboxes.label'),
                labelAfter:  workspace.getConfiguration().get('vscode-markdown-checkboxes.labelAfter')
            });
        }
    };
}
exports.activate = activate;
