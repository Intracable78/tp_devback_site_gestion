import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from '../register-service.service';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  constructor(private registerService : RegisterServiceService) { }

  ngOnInit(): void {
  }

  /*registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, Validators.required),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)

  }); 

  get email() { return this.registerForm.get('email'); }
  get comment() {return this.registerForm.get('comment');}


  async createUser(){
    
    
    let email: any = this.registerForm.get("email");
    let username: any =   this.registerForm.get("username");
    let firstname: any  = this.registerForm.get("firstname");
    let lastname: any = this.registerForm.get("lastname");
    let phone: any = this.registerForm.get("phone");
    let address: any = this.registerForm.get("address");
    let city: any =  this.registerForm.get("city");
    let country: any = this.registerForm.get("country");
    let password: any = this.registerForm.get("password");
    console.log(email.value)
   
     
    await this.registerService.createUser(email.value, username.value, firstname.value, lastname.value, phone.value, address.value, city.value, country.value, password.value)
    
  
} */

async onSubmit(data: NgForm) {

  console.log(data);
 
  await this.registerService.createUser(data.value.email, data.value.username, data.value.firstname, data.value.lastname, data.value.phone, data.value.address, data.value.city, data.value.country, data.value.password)

}


} 