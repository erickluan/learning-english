import { PHRASIS } from './phrasis-mock';
import { Phrase } from './../shared/phrase.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {
  public phrasis: Phrase[] = PHRASIS;
  public instruction = 'Traduza a frase:';
  public answer: string;
  public round = 0;
  public roundPhrase: Phrase;
  public progress = 0;
  public attempts = 3;
  @Output() public finishGame: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.updateRound();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public verifyAnswer(): void {
    if (this.roundPhrase.phrasePtBr === this.answer) {
      this.round++;
      this.progress = this.progress + ( 100 / this.phrasis.length);
      if (this.round === 4) {
        this.finishGame.emit('vitoria');
      }
      this.updateRound();
    } else {
      this.attempts--;
      if (this.attempts === -1) {
        this.finishGame.emit('derrota');
      }
    }
  }

  public updateRound(): void {
    this.roundPhrase = this.phrasis[this.round];
    this.answer = '';
  }

}
