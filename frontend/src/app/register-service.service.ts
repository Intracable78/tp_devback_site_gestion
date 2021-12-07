import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';



@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private webReqService : WebRequestService) { }


   async createUser(email : string, username : string, firstname: string, lastname: string, phone: string, address: string, city: string, country: string, password: string) {
  
    await this.webReqService.post('register', {
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
