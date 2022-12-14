import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string | null = null;

  constructor(private authSerivce: AuthService, private router: Router, private cookieService: CookieService) { }

  @ViewChild(
    NgForm,
    { static: true },
  ) form!: ElementRef<HTMLInputElement>

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.authSerivce.login(email, password).subscribe({
      next: ({ token, _id, email, fullName, profileImg, friends, profileCoverImg }) => {
        this.cookieService.set('user', JSON.stringify({ token, _id, email, fullName, profileImg, friends, profileCoverImg }));
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error.message;
      }
    }
    )
  }

}
