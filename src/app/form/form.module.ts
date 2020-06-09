import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormRoutingModule } from "./form-routing.module";
import { TemplateFormComponent } from "./template-form/form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@NgModule({
  declarations: [TemplateFormComponent, ReactiveFormComponent],

  imports: [ReactiveFormsModule, CommonModule, FormRoutingModule],
})
export class FormModule {}
