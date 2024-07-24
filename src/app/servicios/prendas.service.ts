import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrendasService {
  constructor(public http: HttpClient) {}
  obtener__prendas(): Observable<any> {
    return this.http.get<Observable<any>>('http://127.0.0.1:5000/api/prendas');
  }
}
