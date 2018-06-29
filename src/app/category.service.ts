import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private errorHandler(error : HttpErrorResponse) {
  if (error.status == 401) {
    //Redirect to the URL
  }
}
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(
      'https://simple-api-web.herokuapp.com/',
      {
        params: {
          'api-key' : 'maiAPIkey'
        },
        responseType : 'json'
      }
    )
  }
  
  getParentCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(
      'https://simple-api-web.herokuapp.com/',
      {
        params: {
          'api-key': 'maiAPIkey',
          'search' : 'all',
          'column' : 'parent'
        },
        responseType: 'json'
      }
    )
  }

  getSelectedCategory(category:string) {
    return this.http.get<Category>(
      'https://simple-api-web.herokuapp.com/',
      {
        params: {
          'api-key': 'maiAPIkey',
          'search': category.toLowerCase().trim(),
          'column': 'category'
        },
        responseType: 'json'
      }
    )
  } 
  getCategory(search:string, column:string){
    return this.http.get<Category[]>(
      'https://simple-api-web.herokuapp.com/',
      {
        params: {
          'api-key': 'maiAPIkey',
          'search': search.toLowerCase().trim(),
          'column': column
        },
        responseType: 'json'
      }
    )
  }
  constructor( 
    private http : HttpClient 
  ) {  }
}
