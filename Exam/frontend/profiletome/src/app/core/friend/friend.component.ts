import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  @Input() friendId: string = "";

  friend: IUser | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loadOneUser(this.friendId).subscribe({
      next: (value) => {
        console.log(value);
        this.friend = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
