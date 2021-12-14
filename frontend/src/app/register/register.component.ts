import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from '../register-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;

  constructor(private registerService: RegisterServiceService, private router: Router, private fb: FormBuilder) {

    this.registerForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],

    }, { updateOn: 'change' });
  }

  ngOnInit(): void {

  }



  register() {

    return this.registerService.createUser(this.registerForm.value.email, this.registerForm.value.username, this.registerForm.value.firstname, this.registerForm.value.lastname, this.registerForm.value.phone, this.registerForm.value.address, this.registerForm.value.city, this.registerForm.value.country, this.registerForm.value.password).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(['login']);
      }

    })

  }


} 