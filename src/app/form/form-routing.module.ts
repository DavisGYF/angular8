import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TemplateFormComponent } from "./template-form/form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

const routes: Routes = [
  { path: "reactive", component: ReactiveFormComponent },
  { path: "template", component: TemplateFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
