import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private factApiUrl = 'https://catfact.ninja/fact';
  private imageApiUrl = 'https://cataas.com/cat/says/';

  constructor(private http: HttpClient) {}

  getFact(): Observable<string> {
    return this.http
      .get<{ fact: string }>(this.factApiUrl)
      .pipe(map((response) => response.fact));
  }

  getCatImage(text: string): Observable<string> {
    return new Observable((observer) => {
      const encodedText = encodeURIComponent(text);
      observer.next(`${this.imageApiUrl}${encodedText}`);
      observer.complete();
    });
  }
}
