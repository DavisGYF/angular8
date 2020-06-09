import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { Form1Component } from '../form1/form1.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent, Form1Component],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
