import * as vscode from 'vscode';
import { registerBetaCommands } from './beta/betaCommands';

export function registerAllCommands(context: vscode.ExtensionContext) {
    // Beta commands:
    registerBetaCommands(context);
}
