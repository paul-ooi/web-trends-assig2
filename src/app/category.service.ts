import { Injectable, ErrorHandler } from '@angular/core';
import { Category } from './category';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  dbUrl = 'https://simple-api-web.herokuapp.com?api-key=maiAPIkey';


//   private errorHandler(error : HttpErrorResponse)  {
//   if(error.error instanceof ErrorEvent) {
//     console.error('An error occurred:', error.error.message);
//     throwError(error.error.message)
//   } else {
//     if (error.status == 200) {
//       console.error(error.status);
//       console.error(error.error.text);
//     }else if (error.status == 401) {
//       console.error(error.status);
//       console.error(error.statusText);
//       console.error(error.error.message);
//       console.error(error.error.response);      
//       console.error('inside 401');      
//       // return throwError('something went wrong');
//       // this.router.navigateByUrl('/error');
//     } else if (error.status == 404) {
//       console.error(error.status);
//       console.error(error.error.text);
//       // this.router.navigateByUrl('/error');
//       // throwError(404);
//     } else {
//       console.error("Server Error (" + error.status + "): " + error.statusText);
//     }
//   }
//   return throwError(this.errorHandler);
// }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(
      this.dbUrl,
      {
       responseType : 'json'
      }
    )
  }
  
  getParentCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(
      this.dbUrl,
      {
        params: {
          'search' : 'all',
          'column' : 'parent'
        },
        responseType: 'json'
      }
    )
  }

  getSelectedCategory(category:string) {
    return this.http.get<Category>(
      this.dbUrl,
      {
        params: {
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
    private http : HttpClient ,
  ) {  }
}
