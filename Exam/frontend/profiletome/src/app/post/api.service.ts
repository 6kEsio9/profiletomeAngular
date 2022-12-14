import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../shared/interfaces/post';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  user = this.authService.getUser();

  loadPosts() {
    return this.httpClient.get<IPost[]>(`${apiUrl}/posts`);
  }

  loadOnePost(postId: any) {
    return this.httpClient.get<IPost>(`${apiUrl}/posts/${postId}`);
  }

  likePost(userId: any, postId: any) {
    return this.httpClient.get<any>(`${apiUrl}/posts/like/${userId}/${postId}`);
  }

  createPost(imageUrl: string, caption?: string) {
    return this.httpClient.post<IPost>(`${apiUrl}/posts/create`, { imageUrl, caption });
  }

  editPost(postId: string, data: any){
    return this.httpClient.put<IPost>(`${apiUrl}/posts/edit/${postId}`, { postId, data});
  }

  deletePost(postId: string){
    return this.httpClient.delete<IPost>(`${apiUrl}/posts/delete/${postId}`);
  }
}
