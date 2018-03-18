import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameInProgress = true;
  public typeClosing: string;
  public finishGame(type: string) {
    this.gameInProgress = false;
    this.typeClosing = type;
  }
  public restartGame(): void {
    this.gameInProgress = true;
    this.typeClosing = undefined;
  }
}
