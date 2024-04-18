import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  removedHeroe: string | undefined = '';

  heroesName: string[] = [
    'Batman',
    'Superman',
    'Flash',
    'Joker',
    'Supergirl',
    'Robin'
  ];

  removeLastHeroe(): void {
    this.removedHeroe = this.heroesName.pop();
  }

}
