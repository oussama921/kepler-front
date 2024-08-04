import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    
    { 
        path: '', 
        component: AppComponent, 
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'quizz',
                loadChildren: () =>
                    import('./pages/quizz/quizz.module').then((m) => m.QuizzModule),
            }
        ]
    },
    {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  