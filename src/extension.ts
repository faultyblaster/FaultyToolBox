import * as vscode from 'vscode';
import { registerAllCommands } from './commands/allCommands';
import { StickJack } from './stickjack/stickjack';

export let logger: StickJack;

export function activate(context: vscode.ExtensionContext) {
    logger = new StickJack();

    // BETA commands: Be aware, this commands can be buggy
    registerAllCommands(context);

    context.subscriptions.push();
}

export function deactivate() {}
