'use strict';

function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-task-lists'), require('vscode').workspace.getConfiguration().get('vscode-markdown-checkboxes.itTaskListsOptions'));
        }
    };
}
exports.activate = activate;
