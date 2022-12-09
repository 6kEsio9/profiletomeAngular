import { Component, Input, OnInit } from '@angular/core';
import { IPost, IUser } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: IPost = <IPost>{};

  owner: IUser = <IUser>{};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      this.authService.loadOneUser(this.post.owner).subscribe({
        next: (value) => {
          console.log(value);
          this.owner = value;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
