import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../../services/quizz.service';
import { Questionnaire } from '../../../models/Questionnaire';
import { fadeAnimation } from '../../../shared/animations/fadeAnimation';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss',
  animations:[
    fadeAnimation
  ]
})
export class QuizzComponent implements OnInit{
  loading=true;
  quizz:Questionnaire[]=[];
  step=0;
  constructor(private quizzService:QuizzService){}

  ngOnInit(): void {
    this.quizzService.getQuizz().subscribe(quizz=>{
      this.quizz = quizz;
      this.loading=false;
    })
  }
}
