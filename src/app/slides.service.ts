import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  private url = '../data/posts/posts.json'

  constructor(private http: HttpClient) { }

  getSlides(): Observable<any> {
   return this.http.get<any>(this.url);
 }
}
