import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPost, IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postList: IPost[] | null = null;

  user: IUser | null = null;

  isOwner: boolean = false;

  constructor(private postService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.postService.loadPosts().subscribe({
      next: (value) => {
        console.log(value);
        value.map(x => {
          if(this.user && this.user._id === x.owner){
            this.isOwner = true;
          }
        })
        this.postList = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
