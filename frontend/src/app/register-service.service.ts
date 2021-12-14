import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';



@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private webReqService: WebRequestService) { }


  createUser(email: string, username: string, firstname: string, lastname: string, phone: string, address: string, city: string, country: string, password: string) {

    return this.webReqService.post('register', {
      email,
      username,
      firstname,
      lastname,
      phone,
      address,
      city,
      country,
      password
    })





  }



}
