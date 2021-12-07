import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Category } from './models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {

    this.ROOT_URL = 'http://localhost:5500';
   }
  
   getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.ROOT_URL + '/admin/category');
  }

}
