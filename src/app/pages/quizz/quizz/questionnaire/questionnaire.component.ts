import { Component, Input, OnInit } from '@angular/core';
import { Questionnaire } from '../../../../models/Questionnaire';
import { QuestionType } from '../../../../models/QuestionType';
import { Router } from '@angular/router';
import { fadeAnimation } from '../../../../shared/animations/fadeAnimation';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss',
  animations:[fadeAnimation]
})
export class QuestionnaireComponent {
  @Input() questionnaire!:Questionnaire;
  @Input() showSubmit!:boolean;

  QuestionType=QuestionType
  showElement=true;
  constructor(private router:Router){}

  navigate(){
    this.showElement=false;
    setTimeout(()=>{
      this.router.navigate(['/quizz/thank-you'])

    },300)
  }
}
