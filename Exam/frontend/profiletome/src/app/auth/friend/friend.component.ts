import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

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
        this.friend = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
