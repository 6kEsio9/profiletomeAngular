import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postList: IPost[] | null = null;

  constructor(private postService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.getUser());
    this.postService.loadPosts().subscribe({
      next: (value) => {
        console.log(value);
        this.postList = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
