import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void {

    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};
  }

}
