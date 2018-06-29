import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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
  constructor( 
    private http : HttpClient 
  ) {  }
}
