import { Component, Input } from '@angular/core';
import { Choice } from '../../../../../../models/Choice';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrl: './multi-choice.component.scss'
})
export class MultiChoiceComponent {
  @Input() choices!:Choice[];
   

  selectChoice(choice:Choice){
    choice.selected?choice.selected=false:choice.selected=true;
  }
}
