import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loadUsers(){
    return this.httpClient.get<IUser[]>(`${apiUrl}/users`);
  }

  loadOneUser(userId: string){
    return this.httpClient.get<IUser>(`${apiUrl}/users/${userId}`);
  }
}
