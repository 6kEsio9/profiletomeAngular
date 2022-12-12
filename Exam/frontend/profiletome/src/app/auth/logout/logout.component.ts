import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieSerivce: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.cookieSerivce.delete('user');
    this.router.navigate(['/']);
  }

}
