import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string | null = null;

  constructor(private authSerivce: AuthService, private router: Router) { }

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
      next: (value) => {
        console.log(value);
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.error = err.error.message;
      }
    }
    )
  }

}
