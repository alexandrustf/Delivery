import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherComponent } from './another.component';


const routes: Routes = [
    {
        path: 'another',
        component: AnotherComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
