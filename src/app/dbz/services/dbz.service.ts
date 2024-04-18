import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 600
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 11000
    },
    {
      id: uuid(),
      name: 'Cell',
      power: 50000
    }
  ];

 addCharacter( character: Character ):void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  onDeleteCharacterById( id: string ):void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
