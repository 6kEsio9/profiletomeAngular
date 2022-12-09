import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './shared/interfaces';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadPosts(){
    return this.httpClient.get<IPost[]>(`${apiUrl}/posts`);
  }
}
