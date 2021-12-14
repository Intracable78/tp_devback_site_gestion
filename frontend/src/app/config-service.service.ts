import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from './models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  readonly ROOT_URL: string;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:5500';
  }


  postConfig(data: Config): Observable<Config> {
    return this.http.post<Config>(this.ROOT_URL + '/admin/config', data)
  }

  getConfigs(): Observable<Event[]> {
    return this.http.get<Event[]>(this.ROOT_URL + '/admin/config');
  }

  getConfigsById(categoryId: number): Observable<Event[]> {
    return this.http.get<Event[]>(this.ROOT_URL + `/admin/config/${categoryId}`);
  }
}
