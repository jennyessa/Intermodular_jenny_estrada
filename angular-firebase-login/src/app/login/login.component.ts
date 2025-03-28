import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';





@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form: FormGroup | undefined; // es el forumalrio que creo
  error: boolean = false;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder ){
  }

  onSubmit(): void {
    const rawForm = this.form!.getRawValue();
    this.authService.login(rawForm.email, rawForm.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/index');
      },
      error: (error) => {
        this.error = true;
        console.error('Email/Password Sign-In error:', error);
      },
    });
  }



  guestLogin(): void {
    const values = { email: 'guest@mail.uk', password: 'fake_password' };
    this.form!.patchValue(values);
    const subscription = this.form!.valueChanges.subscribe(() => {
      if (this.form!.valid) {
        subscription.unsubscribe();
        this.onSubmit();
      }
    });
  }

  ngOnInit(){
    this.form = this.fb.nonNullable.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      password: ['', Validators.required],
      // en el onnit inicializamos el form.
    }); // le indicamos que cree un grupo con estos campos.
  }
}




