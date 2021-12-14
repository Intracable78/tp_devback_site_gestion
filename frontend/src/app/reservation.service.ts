import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:5500';
  }

  reservationCourse(userId: string, eventId: string): Observable<any> {
    return this.http.post<string>(this.ROOT_URL + `/reservation/${eventId}`, { userId })

  }

}


