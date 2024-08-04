import { NgModule } from '@angular/core';
import { QuizzRoutingModule } from './quizz.routes';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizzService } from '../../services/quizz.service';
import { StepperComponent } from './quizz/stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './quizz/questionnaire/questionnaire.component';
import { InputBoxComponent } from './quizz/questionnaire/questions/input-box/input-box.component';
import { MultiChoiceComponent } from './quizz/questionnaire/questions/multi-choice/multi-choice.component';
import { NumericSingleInputComponent } from './quizz/questionnaire/questions/numeric-single-input/numeric-single-input.component';
import { SingleChoiceComponent } from './quizz/questionnaire/questions/single-choice/single-choice.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FinalPageComponent } from './final-page/final-page.component';

@NgModule({
  declarations: [
    QuizzComponent,
    InputBoxComponent,
    MultiChoiceComponent,
    NumericSingleInputComponent,
    SingleChoiceComponent,
    StepperComponent,
    QuestionnaireComponent,
    FinalPageComponent
  ],
  imports: [
    CommonModule,
    QuizzRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    QuizzService
  ],
  bootstrap: []
})
export class QuizzModule { }
