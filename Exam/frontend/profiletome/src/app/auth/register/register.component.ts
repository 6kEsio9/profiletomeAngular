import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //fullName, email, password, repeatPassword, profileImg, profileCoverImg

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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler(){
    if(this.form.invalid) { return;}
    const { fullName, email, pass: {password, repeatPassword} = {}, profileImg, profileCoverImg} = this.form.value;
    this.authService.register(fullName!, email!, password!, repeatPassword!, profileImg!, profileCoverImg!).subscribe(res => console.log(res));
    this.router.navigate(['/']);
  }
}
