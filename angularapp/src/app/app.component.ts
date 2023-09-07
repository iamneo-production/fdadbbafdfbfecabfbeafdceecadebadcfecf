import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reg_form';
  regForm: any = new FormGroup({
    inputFirstname: new FormControl({ value: '', disabled: false }, [
      Validators.required, Validators.pattern('^[a-zA-z]'),
      Validators.minLength(3), Validators.maxLength(50)
    ]),
    gender: new FormControl({ value: '', disabled: false }, Validators.required),
    country: new FormControl({ value: '', disabled: false }, Validators.required),
    city: new FormControl({ value: '', disabled: false }, Validators.required),
    inputAge: new FormControl({ value: '', disabled: false }, [Validators.required,Validators.pattern('^[0-9]*$')])
  });
  gender = [{ "sex": "Male" }, { "sex": "Female" }];
  country = [{ "code": "US" }, { "code": "Canada" }, { "code": "India" }, { "code": "Russia" }, { "code": "China" }, { "code": "Dubai" }];
  submitButton() {
    console.log(this.regForm)
  }
  onCheckChange(eve: any) {
    if(this.regForm.get('gender').value == ''){
      this.regForm.get('gender').setValue(eve.target.value)
    }
  }
 selected(eve: any) {
    if (eve.target.value == 'Canada' || eve.target.value == 'US' ||eve.target.value == 'India') {
      this.regForm.get('inputAge').setValidators(Validators.required);
    } else {
      this.regForm.get('inputAge').clearValidators();
    }
    this.regForm.controls['inputAge'].updateValueAndValidity();
  }
}