import { Component, Input, OnInit } from '@angular/core';
import { IPost, IUser } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: IPost = <IPost>{};
  @Input() isOwner: boolean = false;
  @Input() user: IUser | null = null;

  owner: IUser = <IUser>{};

  isLiked: boolean = false;

  constructor(private authService: AuthService, private apiService: ApiService) { }

  likePost() {
    if (this.user && this.user._id !== this.owner._id && !this.isLiked) {
      console.log('liked');
      this.apiService.likePost(this.user?._id, this.post._id).subscribe(res => console.log(res));
    }
  }

  ngOnInit(): void {
    this.authService.loadOneUser(this.post.owner).subscribe({
      next: (value) => {
        this.owner = value;
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.post.likedUsers.map(x => x === this.user?._id ? this.isLiked = true : this.isLiked = false);
  }

}
