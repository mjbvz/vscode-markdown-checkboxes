'use strict';
const { workspace } = require('vscode');

function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-task-lists'), workspace.getConfiguration().get('vscode-markdown-checkboxes.itTaskListsOptions'));
        }
    };
}
exports.activate = activate;
