import * as vscode from 'vscode';
import { commands } from 'vscode';
import { betaCommands } from '../../common/definitions';
import { UserInfoPrompts, UserWarningPrompts } from '../../common/UserPrompts';

/**
 * Please note that the commands defined in this file
 * are commands on testing stage and must be run with
 * attention, and may be buggy
 */

export function registerBetaCommands(context: vscode.ExtensionContext) {
    const sayHi = commands.registerCommand(betaCommands.test, () => {
        SayHiToUser();
    });
    const sayStop = commands.registerCommand(betaCommands.stop, () => {
        SayStopToUser();
    });

    context.subscriptions.push(sayHi, sayStop);
}

// Commands definitions:
function SayHiToUser() {
    UserInfoPrompts.SayHi();
}

function SayStopToUser() {
    UserWarningPrompts.SayStop();
}
