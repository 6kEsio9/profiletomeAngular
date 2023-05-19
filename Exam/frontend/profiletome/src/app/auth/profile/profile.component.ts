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

  auth: IUser = <IUser>{};

  isOwner: boolean = false;

  isFriend: boolean = false;

  canAdd: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.auth = this.authService.getUser();
    this.activatedRoute.params.subscribe(params => {
      this.authService.loadOneUser(params['id']).subscribe({
        next: (value) => {
          console.log(value);
          this.user = value;
          if (value) {
            console.log(value);
            value._id === this.auth?._id ? this.isOwner = true : this.isOwner = false;
            this.auth?.friends.includes(value._id) ? this.isFriend = true : this.isFriend = false;
            if (this.auth) {
              console.log(this.isOwner);
              console.log(this.isFriend);
              if (!this.isFriend) {
                this.canAdd = true;
                if (this.isOwner) {
                  this.canAdd = false;
                }
              }
            }
            this.apiService.loadPosts().subscribe({
              next: (value) => {
                console.log(value);
                this.postList = value.filter(x => x.owner === this.user?._id).reverse();
              },
              error: (err) => {
                console.log(err);
              }
            })
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    })
  }

  addFriend() {
    if (this.auth && this.user) {
      this.authService.addFriend(this.auth?._id, this.user?._id).subscribe(res => console.log(res));
    }
  }

}
