import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { LoginServiceService } from '../login-service.service'
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginServiceService, private router: Router) {

    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }, { updateOn: 'change' });

  }

  ngOnInit(): void {
    console.log(this.loginForm)
  }



  login() {
    return this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((response: any) => {
      if (response.succes) {
        localStorage.setItem('id_token', response.idToken);
        localStorage.setItem('user_id', response.user_id);
        this.router.navigate(['calendar']);
      }
    })
  }



}
