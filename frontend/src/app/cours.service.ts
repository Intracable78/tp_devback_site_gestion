import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {

    this.ROOT_URL = 'http://localhost:5500';

   }

  /* getCourses(): Observable<Cours[]>{
     return this.http.get<Cours[]>(this.ROOT_URL + '');
   } */
}
