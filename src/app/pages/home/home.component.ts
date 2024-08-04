import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from '../../shared/animations/fadeAnimation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    fadeAnimation
  ]



})
export class HomeComponent {
  showElement=true;
  constructor(private router:Router){}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.navigate()
    }
  }

  navigate(){
      this.showElement=false;
      setTimeout(() => {
        this.router.navigate(['/quizz']);
    },300)

  }

}
