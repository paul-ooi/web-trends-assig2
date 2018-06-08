import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[]= [
    new Category(1, 'sports'),
    new Category(2, 'politics'),
    new Category(3, 'school')
  ]
  getCategories():Observable<Category[]>{
    return of(this.categories);
  } 
  constructor() { }
}
