import { workspace } from 'vscode';
import taskList from 'markdown-it-task-lists';
import type MarkdownIt from 'markdown-it';

export function activate() {
    return { 
        extendMarkdownIt(md: MarkdownIt) {
            return md.use(() => {
                console.log('xx')
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
