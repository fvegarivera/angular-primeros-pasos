import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDeleteCharacterEmiter: EventEmitter<string> = new EventEmitter();

  @Input()
  characterList: Character[] = [
    {
      id: '',
      name: 'Trunks',
      power: 2300
    }
  ];

  deleteCharacter( id?: string ):void {
    if (!id) return;
    this.onDeleteCharacterEmiter.emit(id);
  }

}
