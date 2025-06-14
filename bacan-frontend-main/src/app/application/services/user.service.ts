import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../../domain/user/user';
import {CreateUser} from '../../domain/user/create-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly httpClient: HttpClient;
  private readonly baseUrl: string;

  constructor() {
    this.httpClient = inject(HttpClient);
    this.baseUrl = environment.ENDPOINT.MS_USER;
  }

  getAllUsers(): Observable<User[]> {
    const url: string = this.baseUrl;
    return this.httpClient.get<User[]>(url);
  }

  createUser(user: CreateUser): Observable<void> {
    const url: string = this.baseUrl;
    return this.httpClient.post<void>(url, user);
  }
}
