import { Component, OnInit } from "@angular/core";
import { Validators, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.less"],
})
export class ReactiveFormComponent {
  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
    }),
    aliases: this.fb.array([this.fb.control("")]),
  });

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street",
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
