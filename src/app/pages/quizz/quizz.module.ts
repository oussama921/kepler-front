import { NgModule } from '@angular/core';
import { QuizzRoutingModule } from './quizz.routes';
import { QuizzComponent } from './quizz/quizz.component';
import { InputBoxComponent } from './questions/input-box/input-box.component';
import { MultiChoiceComponent } from './questions/multi-choice/multi-choice.component';
import { NumericSingleInputComponent } from './questions/numeric-single-input/numeric-single-input.component';
import { SingleChoiceComponent } from './questions/single-choice/single-choice.component';
import { QuizzService } from '../../services/quizz.service';

@NgModule({
  declarations: [
    QuizzComponent,
    InputBoxComponent,
    MultiChoiceComponent,
    NumericSingleInputComponent,
    SingleChoiceComponent
  ],
  imports: [
    QuizzRoutingModule
  ],
  providers: [
    QuizzService
  ],
  bootstrap: []
})
export class QuizzModule { }
