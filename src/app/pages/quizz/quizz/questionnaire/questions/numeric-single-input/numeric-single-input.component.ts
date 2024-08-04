import { Component } from '@angular/core';

@Component({
  selector: 'app-numeric-single-input',
  templateUrl: './numeric-single-input.component.html',
  styleUrl: './numeric-single-input.component.scss'
})
export class NumericSingleInputComponent {
  value!:number;

  incrementNumber(){
    this.value||this.value==0?
      this.value++
    :
      this.value=0
  }
  decrementNumber(){
    this.value||this.value==0?
      this.value--
    :
      this.value=0
  }
}
