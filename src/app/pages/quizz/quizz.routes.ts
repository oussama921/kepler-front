import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';

export const routes: Routes = [
    { 
        path: '',
        component:QuizzComponent
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
  