import {Component, Input} from '@angular/core';
import {AbstractControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Country} from '../../../domain/location/country';
import {LocationUtil} from '../../../application/util/location-util';

@Component({
  selector: 'register-second-step',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './second-step-component.html',
  styleUrl: './second-step-component.css'
})
export class SecondStepComponent {
  @Input()
  public userForm!: FormGroup;
  @Input()
  public countries!: Country[];

  protected readonly today;
  protected readonly LocationUtil: typeof LocationUtil;

  constructor() {
    this.today = new Date().toISOString().split("T")[0];
    this.LocationUtil = LocationUtil;
  }

  get documentId(): AbstractControl<any, any> | null {
    return this.userForm.get('documentId');
  }

  get name(): AbstractControl<any, any> | null {
    return this.userForm.get('name');
  }

  get lastname(): AbstractControl<any, any> | null {
    return this.userForm.get('lastname');
  }

  get birthdate(): AbstractControl<any, any> | null {
    return this.userForm.get('birthdate');
  }

  get phoneCountryId(): AbstractControl<any, any> | null {
    return this.userForm.get('phoneCountryId');
  }

  get phone(): AbstractControl<any, any> | null {
    return this.userForm.get('phone');
  }

  get email(): AbstractControl<any, any> | null {
    return this.userForm.get('email');
  }

  get password(): AbstractControl<any, any> | null {
    return this.userForm.get('password');
  }
}
