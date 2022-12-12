import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/post/api.service';
import { IPost, IUser } from 'src/app/shared/interfaces';
import { __values } from 'tslib';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser | null = null;
  postList: IPost[] | null = null;

  auth: IUser | null = null;

  isOwner: boolean = false;

  isFriend: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.auth = this.authService.getUser();
    this.activatedRoute.params.subscribe(params => {
      this.authService.loadOneUser(params['id']).subscribe({
        next: (value) => {
          console.log(value);
          this.user = value;
          if(value){
            console.log(value._id);
            console.log(this.auth?._id);
            value._id === this.auth?._id ? this.isOwner = true : this.isOwner = false;
            value.friends.map(x => x === this.auth?._id ? this.isFriend = true : this.isFriend = false);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    })

    this.apiService.loadPosts().subscribe({
      next: (value) => {
        console.log(value);
        this.postList = value.filter(x => x.owner === this.user?._id);
      },
      error: (err) => {
        console.log(err);
      } 
    })

    console.log(this.isOwner)
  }

}
