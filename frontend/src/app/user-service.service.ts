import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private webReqService : WebRequestService) { }

  getUsers(){
      return this.webReqService.get('posts');
  }
}
