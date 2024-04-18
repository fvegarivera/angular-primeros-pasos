import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string = 'Batman';
  age: number = 40;

  nameHeroe: string = '';

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Superman';
  }

  changeAge(): void {
    this.age = 35;
  }

}
