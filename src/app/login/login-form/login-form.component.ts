import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  isSignUp = false;
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
   onSubmit() {
    const { email, password } = this.signupForm.value;
     if(this.isSignUp){
      //  this.authService.SignUp(email,password);
     }else{
      // this.authService.SignIn(email,password);
     }
  
  }
}
