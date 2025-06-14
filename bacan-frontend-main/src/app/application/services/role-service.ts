import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Role} from '../../domain/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly httpClient: HttpClient;
  private readonly baseUrl: string;

  constructor() {
    this.httpClient = inject(HttpClient);
    this.baseUrl = environment.ENDPOINT.MS_ROLE;
  }

  getAllPublicRoles(): Observable<Role[]> {
    const url: string = `${this.baseUrl}/public`;
    return this.httpClient.get<Role[]>(url);
  }
}
