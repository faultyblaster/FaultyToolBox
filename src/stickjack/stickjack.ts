import * as vscode from 'vscode';
import { extensionData } from '../common/definitions';
// Logging class

export class StickJack {
    outputChannel: vscode.OutputChannel;

    constructor() {
        this.outputChannel = vscode.window.createOutputChannel(
            extensionData.name,
            'log'
        );

        this.LogInfo(extensionData.name + ' is up and running!');
    }

    /**
     * Prints an info message to the vscode output console
     * @param message message to print
     */
    public LogInfo(message: string) {
        let now = new Date(Date.now());

        this.outputChannel.appendLine(
            `[${now.toLocaleString()}] [${logLevel.INFO}] ` + message
        );
    }

    /**
     * Prints a Warning message to the vscode output console
     * @param message message to print
     */
    public LogWarning(message: string) {
        let now = new Date(Date.now());

        this.outputChannel.appendLine(
            `[${now.toLocaleString()}] [${logLevel.WARNING}] ` + message
        );
    }

    /**
     * Prints a Warning message to the vscode output console
     * @param message message to print
     */
    public LogError(message: string) {
        let now = new Date(Date.now());

        this.outputChannel.appendLine(
            `[${now.toLocaleString()}] [${logLevel.ERROR}] ` + message
        );
    }
}

export enum logLevel {
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}
