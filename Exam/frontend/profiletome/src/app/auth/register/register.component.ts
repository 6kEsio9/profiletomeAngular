import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //fullName, email, password, repeatPassword, profileImg, profileCoverImg

  error: string | null = null;

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(['bg', 'com'])]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'repeatPassword')]
    }),
    profileImg: ['', [Validators.required]],
    profileCoverImg: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private cookieService: CookieService) { }

  registerHandler(){
    if(this.form.invalid) { return;}
    const { fullName, email, pass: {password, repeatPassword} = {}, profileImg, profileCoverImg} = this.form.value;
    this.authService.register(fullName!, email!, password!, repeatPassword!, profileImg!, profileCoverImg!).subscribe({
      next: ({ token, _id, email, fullName, profileImg, friends, profileCoverImg }) => {
        console.log('logged');
        this.cookieService.set('user', JSON.stringify({ token, _id, email, fullName, profileImg, friends, profileCoverImg }));
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error.message;
      }
    });
  }
}
