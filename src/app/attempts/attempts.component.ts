import { Heart } from './../shared/heart.model';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public attempts: number;
  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ];
  constructor() {}

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.attempts !== this.hearts.length) {
      const index: number = this.hearts.length - this.attempts;
      this.hearts[index - 1].full = false;
    }
  }
  ngOnDestroy() {
  }
}
