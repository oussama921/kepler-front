import { Component, Input } from '@angular/core';
import { Choice } from '../../../../../../models/Choice';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrl: './single-choice.component.scss'
})
export class SingleChoiceComponent {
  @Input() choices!:Choice[];
   

  selectChoice(choice:Choice){
    if(!choice.selected){
      this.choices.forEach(element => {
        element.selected=false;
      });
      choice.selected=true;
    }

  }
}
