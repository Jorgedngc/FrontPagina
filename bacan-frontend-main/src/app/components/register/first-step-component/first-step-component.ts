import {Component, inject, Input, OnInit} from '@angular/core';
import {RoleService} from '../../../application/services/role-service';
import {Role} from '../../../domain/role';
import {RoleEnum} from '../../../domain/enum/role-enum';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'register-first-step',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './first-step-component.html',
  styleUrl: './first-step-component.css'
})
export class FirstStepComponent implements OnInit {
  @Input()
  public roleForm!: FormGroup;

  protected roles: Role[];
  protected isLoading: boolean;

  protected readonly RoleEnum: typeof RoleEnum;
  private readonly roleService: RoleService

  constructor() {
    this.roles = [];
    this.isLoading = false;
    this.RoleEnum = RoleEnum;
    this.roleService = inject(RoleService);
  }

  ngOnInit(): void {
    this.loadPublicRoles();
  }

  loadPublicRoles(): void {
    this.isLoading = true;
    this.roleService.getAllPublicRoles().subscribe({
      next: (roles) => {
        this.roles = roles;
        this.isLoading = false;
      }
    })
  }
}
