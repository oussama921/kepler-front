import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { FinalPageComponent } from './final-page/final-page.component';

export const routes: Routes = [
    { 
        path: '',
        component:QuizzComponent
    },
    { 
        path: 'thank-you',
        component:FinalPageComponent
    },
    {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QuizzRoutingModule { }
  