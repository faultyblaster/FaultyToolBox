import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log(
        'Congratulations, your extension "faultytoolbox" is now active!'
    );

    const disposable = vscode.commands.registerCommand(
        'faultytoolbox.helloWorld',
        () => {
            vscode.window.showInformationMessage(
                'Hello World from FaultyToolBox!'
            );
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
