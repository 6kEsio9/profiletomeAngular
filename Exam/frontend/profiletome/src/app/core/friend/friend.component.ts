import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  @Input() friends: string[] | null = null;

  friend: IUser | null = null;
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
  }

}
