import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  apiNewStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

  constructor(private http: HttpClient) { }

  getStoryIds(): Observable<number[]> {
    return this.http.get<number[]>(this.apiNewStoriesUrl).pipe(
      catchError(this.handleError)
    );
  }

  getStoryDetails(itemIds: number[]) {
    return from(itemIds).pipe(
      mergeMap(id => {
        const apiStoryUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
        return this.http.get<Item>(apiStoryUrl).pipe(
          catchError(this.handleError)
        );
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
