import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { Form1Component } from '../form1/form1.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'form1', component: Form1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
