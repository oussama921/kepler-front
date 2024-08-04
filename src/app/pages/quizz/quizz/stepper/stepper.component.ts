import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questionnaire } from '../../../../models/Questionnaire';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit{
  @Input() quizz:Questionnaire[]=[];
  @Input() selectedStep=0;

  @Output() selectedStepChange:EventEmitter<number>=new EventEmitter();


  ngOnInit(): void {
    
  }

  selectStep(index:number){
    this.selectedStepChange.emit(index);
  }
}
