import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirstStepComponent} from '../../components/register/first-step-component/first-step-component';
import {SecondStepComponent} from '../../components/register/second-step-component/second-step-component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ThirdStepComponent} from '../../components/register/thrid-step-component/third-step.component';
import {CreateUser} from '../../domain/user/create-user';
import {UserService} from '../../application/services/user.service';
import {LocationService} from '../../application/services/location-service';
import {Country} from '../../domain/location/country';
import {JsonPipe} from '@angular/common';

interface Steps {
  stepOne: string;
  stepTwo: string;
  stepThree: string;
}

@Component({
  selector: 'app-register-page',
  imports: [
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage implements OnInit {
  router: Router;
  steps: Steps[];
  currentStep: number;
  countries: Country[];

  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;
  registerForm: FormGroup;

  private readonly fb: FormBuilder;

  private readonly locationService: LocationService;
  private readonly userService: UserService;

  constructor() {
    this.currentStep = 0;
    this.countries = [];
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.userService = inject(UserService);
    this.locationService = inject(LocationService);
    this.steps = this.initializeSteps();
    this.stepOneForm = this.fb.group({
      roleId: ["", Validators.required]
    });
    this.stepTwoForm = this.fb.group({
      documentId: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      lastname: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      birthdate: ["", [Validators.required]],
      phoneCountryId: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(9), Validators.maxLength(20)]],
      email: ["", [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(254)]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
    });
    this.stepThreeForm = this.fb.group({
      countryId: ["", [Validators.required]],
      stateId: ["", [Validators.required]],
      provinceId: ["", [Validators.required]],
      districtId: ["", [Validators.required]],
      postalCode: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      street: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      number: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      reference: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]
    });
    this.registerForm = this.initializeRegisterForm();
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.locationService.getAllCountries().subscribe({
      next: (countries: Country[]) => {
        this.countries = countries;
      }
    });
  }

  onClickDecrementStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onClickIncrementStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  onClickRedirectToLoginPage() {
    void this.router.navigateByUrl("login")
  }

  onSubmitCreateUser() {
    const rawForm: any = this.registerForm.getRawValue();
    const user: CreateUser = this.buildUserFromForm(rawForm);
    this.userService.createUser(user).subscribe({
      next: () => void this.router.navigateByUrl("login")
    });
  }

  private initializeRegisterForm(): FormGroup {
    return this.fb.group({
      stepOne: this.stepOneForm,
      stepTwo: this.stepTwoForm,
      stepThree: this.stepThreeForm
    });
  }

  private initializeSteps(): Steps[] {
    return [
      {
        stepOne: "step step-neutral",
        stepTwo: "step",
        stepThree: "step",
      },
      {
        stepOne: "step step-neutral",
        stepTwo: "step step-neutral",
        stepThree: "step",
      },
      {
        stepOne: "step step-neutral",
        stepTwo: "step step-neutral",
        stepThree: "step step-neutral",
      }
    ];
  }

  private buildUserFromForm(rawForm: any): CreateUser {
    return {
      documentId: rawForm.stepTwo.documentId,
      name: rawForm.stepTwo.name,
      lastname: rawForm.stepTwo.lastname,
      birthdate: new Date(rawForm.stepTwo.birthdate),
      phoneCountryId: rawForm.stepTwo.phoneCountryId,
      phone: rawForm.stepTwo.phone,
      email: rawForm.stepTwo.email,
      password: rawForm.stepTwo.password,
      roleId: rawForm.stepOne.roleId,
      address: {
        countryId: rawForm.stepThree.countryId,
        stateId: rawForm.stepThree.stateId,
        provinceId: rawForm.stepThree.provinceId,
        districtId: rawForm.stepThree.districtId,
        postalCode: rawForm.stepThree.postalCode,
        street: rawForm.stepThree.street,
        number: rawForm.stepThree.number,
        reference: rawForm.stepThree.reference
      }
    };
  }
}
