import * as vscode from 'vscode';

export class PomodoroTimer implements vscode.Disposable {
  private statusBarItem: vscode.StatusBarItem;
  private timer: NodeJS.Timeout | undefined;
  private secondsLeft: number = 25 * 60;
  private isRunning: boolean = false;
  private isBreak: boolean = false;
  private focusMinutes = 25;
  private breakMinutes = 5;

  constructor() {
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 90);
    this.statusBarItem.command = 'anki.togglePomodoro';
    this.updateDisplay();
    this.statusBarItem.show();
  }

  public toggle(): void {
    if (this.isRunning) {
      this.pause();
    } else {
      this.start();
    }
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.timer = setInterval(() => this.tick(), 1000);
    this.updateDisplay();
  }

  public pause(): void {
    this.isRunning = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
    this.updateDisplay();
  }

  public reset(): void {
    this.pause();
    this.isBreak = false;
    this.secondsLeft = this.focusMinutes * 60;
    this.updateDisplay();
  }

  private tick(): void {
    if (this.secondsLeft > 0) {
      this.secondsLeft--;
      this.updateDisplay();
    } else {
      this.onComplete();
    }
  }

  private async onComplete(): Promise<void> {
    this.pause();
    if (!this.isBreak) {
      // Focus session ended -> Prompt to start Anki break
      this.isBreak = true;
      this.secondsLeft = this.breakMinutes * 60;
      this.updateDisplay();

      const choice = await vscode.window.showInformationMessage(
        'Focus session complete! Ready for a 5-minute Anki break (10 words)?',
        'Practice 10 Words',
        'Skip Break'
      );

      if (choice === 'Practice 10 Words') {
        vscode.commands.executeCommand('anki.openStudyWithLimit', 10);
        this.start();
      }
    } else {
      // Break ended -> Back to focus
      this.isBreak = false;
      this.secondsLeft = this.focusMinutes * 60;
      this.updateDisplay();

      vscode.window.showInformationMessage(
        'Anki break finished! Ready to code?',
        'Start Focus'
      ).then(c => {
        if (c === 'Start Focus') this.start();
      });
    }
  }

  private updateDisplay(): void {
    const mins = Math.floor(this.secondsLeft / 60);
    const secs = this.secondsLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const icon = this.isBreak ? '$(mortar-board)' : '$(clock)';
    const status = this.isRunning ? '' : ' (Paused)';
    const mode = this.isBreak ? 'Break' : 'Focus';

    this.statusBarItem.text = `${icon} ${timeStr} ${mode}${status}`;
    this.statusBarItem.tooltip = `Anki Pomodoro Timer: ${timeStr} left. Click to ${this.isRunning ? 'pause' : 'start'}.`;
  }

  public dispose(): void {
    this.pause();
    this.statusBarItem.dispose();
  }
}
