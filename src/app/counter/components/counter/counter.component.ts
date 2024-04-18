import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
              <h3>Couter: {{counter}}</h3>
              <hr>
              <button (click)="increment(+1)">+1</button>
              <button (click)="resetCouter()">Reset</button>
              <button (click)="increment(-1)">-1</button>
            `
})

export class CounterComponent {
  constructor() { }
  
  counter: number = 30;

  increment( value: number ): void {
    this.counter += value;
  }

  resetCouter(): void {
    this.counter = 30;
  }
}
