import { Component, Input, OnInit } from '@angular/core';
import { IPost, IUser } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from '../api.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: IPost = <IPost>{};
  @Input() user: IUser | null = null;

  isOwner: boolean = false;

  owner: IUser = <IUser>{};

  isLiked: boolean = false;

  constructor(private authService: AuthService, private apiService: ApiService) { }

  likePost() {
    console.log(this.user?._id);
    console.log(this.owner._id);
    if (this.user && this.user._id !== this.owner._id || !this.isLiked) {
      console.log('liked');
      this.apiService.likePost(this.user?._id, this.post._id).subscribe(res => console.log(res));
    }
  }

  ngOnInit(): void {
    this.authService.loadOneUser(this.post.owner).subscribe({
      next: (value) => {
        this.owner = value;
        if(this.user && this.user._id === this.owner._id){
          this.isOwner = true;
        }
        console.log(this.owner);
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.post.likedUsers.map(x => x === this.user?._id ? this.isLiked = true : this.isLiked = false);
  }

}
