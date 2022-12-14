import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { CookieService } from 'ngx-cookie-service';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getUser() {
    if (this.cookieService.get('user')) {
      return JSON.parse(this.cookieService.get('user'));
    }else{
      return null;
    }
  }

  loadUsers() {
    return this.httpClient.get<IUser[]>(`${apiUrl}/users`);
  }

  loadOneUser(userId: string) {
    return this.httpClient.get<IUser>(`${apiUrl}/users/${userId}`);
  }

  register(fullName: string, email: string, password: string, repeatPassword: string, profileImg: string, profileCoverImg: string) {
    return this.httpClient.post<any>(apiUrl + '/users/register', { fullName, email, password, repeatPassword, profileImg, profileCoverImg });
  }

  login(email: string, password: string) {
    return this.httpClient.post<any>(apiUrl + '/users/login', { email, password });
  }

  addFriend(userId: string, friendId: string){
    return this.httpClient.get<any>(`${apiUrl}/friend/${userId}/${friendId}`);
  }
}
