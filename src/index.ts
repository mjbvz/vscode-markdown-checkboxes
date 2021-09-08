import { workspace } from 'vscode';
import * as taskList from 'markdown-it-task-lists';
import type MarkdownIt from 'markdown-it';

export function activate() {
    return { 
        extendMarkdownIt(md: MarkdownIt) {
            return md.use(() => {
                const config = workspace.getConfiguration('markdown-checkboxes');
                return md.use(taskList, {
                    enabled: config.get('enable'),
                    label: config.get('label'),
                    labelAfter: config.get('labelAfter')
                });
            });
        } 
    };
}
