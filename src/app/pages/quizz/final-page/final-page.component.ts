import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from '../../../shared/animations/fadeAnimation';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrl: './final-page.component.scss',
  animations:[fadeAnimation]
})
export class FinalPageComponent {
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
    setTimeout(()=>{
      this.router.navigate(['/home']);
    })
  }
}
