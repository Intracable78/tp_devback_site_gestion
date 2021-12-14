import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private webReqService: WebRequestService) {

  }

  login(email: string, password: string) {

    return this.webReqService.post('login', {
      email,
      password
    })

  }

}
