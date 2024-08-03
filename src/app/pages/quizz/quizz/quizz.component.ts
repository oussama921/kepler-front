import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../../services/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent implements OnInit{
  constructor(private quizzService:QuizzService){}

  ngOnInit(): void {
    this.quizzService.getQuizz().subscribe(quizz=>{
      console.log(quizz);
      
    })
  }
}
