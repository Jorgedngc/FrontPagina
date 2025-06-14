import {Component, inject, Input} from '@angular/core';
import {AbstractControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Country} from '../../../domain/location/country';
import {LocationService} from '../../../application/services/location-service';
import {State} from '../../../domain/location/state';
import {Province} from '../../../domain/location/province';
import {District} from '../../../domain/location/district';
import {LocationUtil} from '../../../application/util/location-util';

@Component({
  selector: 'register-third-step',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './third-step.component.html',
  styleUrl: './third-step.component.css'
})
export class ThirdStepComponent {
  @Input() addressForm!: FormGroup;
  @Input() countries!: Country[];

  protected states: State[];
  protected provinces: Province[];
  protected districts: District[];

  protected selectedStateId: string;
  protected isStatesLoading: boolean;
  protected isProvincesLoading: boolean;
  protected isDistrictsLoading: boolean;
  protected readonly LocationUtil: typeof LocationUtil;

  private readonly locationService: LocationService;

  constructor() {
    this.states = [];
    this.provinces = [];
    this.districts = [];
    this.countries = [];
    this.selectedStateId = "";
    this.isStatesLoading = false;
    this.isProvincesLoading = false;
    this.isDistrictsLoading = false;
    this.LocationUtil = LocationUtil;
    this.locationService = inject(LocationService);
  }

  onSelectLoadDistricts(provinceId: string): void {
    if (this.selectedStateId !== "" && this.selectedStateId !== null && this.selectedStateId !== undefined) {
      this.isDistrictsLoading = true;
      this.locationService.getAllDistricts(provinceId, this.selectedStateId).subscribe({
        next: (districts) => {
          this.districts = districts;
          this.isDistrictsLoading = false;
        }
      });
    }
  }

  onSelectLoadProvinces(stateId: string): void {
    this.isProvincesLoading = true;
    this.locationService.getAllProvinces(stateId).subscribe({
      next: (provinces) => {
        this.provinces = provinces;
        this.selectedStateId = stateId;
        this.isProvincesLoading = false;
      }
    })
  }

  onClickLoadStates(countryId: number): void {
    this.isStatesLoading = true;
    this.locationService.getAllStates(countryId).subscribe({
      next: (states) => {
        this.states = states;
        this.isStatesLoading = false;
      }
    });
  }

  get countryId(): AbstractControl<any, any> | null {
    return this.addressForm.get('countryId');
  }

  get stateId(): AbstractControl<any, any> | null {
    return this.addressForm.get('stateId');
  }

  get provinceId(): AbstractControl<any, any> | null {
    return this.addressForm.get('provinceId');
  }

  get districtId(): AbstractControl<any, any> | null {
    return this.addressForm.get('districtId');
  }

  get postalCode(): AbstractControl<any, any> | null {
    return this.addressForm.get('postalCode');
  }

  get street(): AbstractControl<any, any> | null {
    return this.addressForm.get('street');
  }

  get number(): AbstractControl<any, any> | null {
    return this.addressForm.get('number');
  }

  get reference(): AbstractControl<any, any> | null {
    return this.addressForm.get('reference');
  }
}
