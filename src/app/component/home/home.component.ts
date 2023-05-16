import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  name = '';
  age = '';

  check: any;
  myVal = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.min(3),
      Validators.max(10),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
  });

  get NameVal() {
    return this.myVal.controls['name'].valid;
  }

  get AgeVal() {
    return this.myVal.controls['age'].valid;
  }
  login() {
    if (this.myVal.valid) {
      this.check = true;
    } else {
      this.check = false;
    }
  }
}
