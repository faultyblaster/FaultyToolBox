import { window } from 'vscode';
/**
 * Request user inputs, display messages, warnings, and more
 */
export class UserInfoPrompts {
    public static SayHi() {
        window.showInformationMessage('Hi!');
    }
}

export class UserWarningPrompts {
    public static SayStop() {
        window.showWarningMessage('Please stop');
    }
}
