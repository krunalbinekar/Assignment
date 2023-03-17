import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading: boolean;
  isOpen = false;
  alertMsg: any;
  alertType: any;
  dismissible = true;
  constructor(
    private service: LoginServiceService,
    private _builder: FormBuilder,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this._builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
//     this.submitted = true;
//     this.loading = true;
//     this.isOpen = false;
//     const payload = {
//       username: this.loginForm.value.username,
//       password: this.loginForm.value.password,
//     };
//     if (this.loginForm.invalid) {
//       return;
//     } else {
//       this.service.login(payload).subscribe(
//         (response) => {
//           if (response) {
//             this.loading = false;
//             this.isOpen = true;
//             this.alertMsg = 'Logged in Successfully';
//             this.alertType = 'success';
//           }
//         },
//         (error) => {
//           this.alertMsg = error.message;
//           this.isOpen = true;
//           this.alertType = 'danger';
//         }
//       );
//     }
    
    this.router.navigate(['/home']);

  //   const e = {
  //     'is_success': true,
  //     'data': {
  //         'token': 'hello'
  //     }
  //  }
  //  localStorage.setItem('currentUser',JSON.stringify(e));
  //       //this.currentUserSubject.next(user);
  //       this.router.navigate(['/home']);
   
  }
  onClosed(dismissedAlert: any): void {
    this.alertMsg = !dismissedAlert;
    this.isOpen = false;
  }
}
