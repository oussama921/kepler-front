import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressEnterComponent } from './press-enter/press-enter.component';

@NgModule({
  declarations: [
    PressEnterComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  bootstrap: [],
  exports:[
    PressEnterComponent
  ]
})
export class SharedModule { }
