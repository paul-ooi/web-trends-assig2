import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];

  getCategories():Observable<Category[]>{
    return of(this.categories);
  } 
  constructor() {
    this.categories = []
    let sport_category:Category = new Category(1, 'sports', null, new Date());
    let school_category:Category = new Category(3, 'school', null, new Date());

    this.categories.push(sport_category);
    this.categories.push(new Category(2,'soccer',sport_category, new Date()));
    this.categories.push(new Category(4,'basketball',sport_category, new Date()));
    this.categories.push(school_category);
    this.categories.push(new Category(5,'php',school_category, new Date()));
    this.categories.push(new Category(6, 'ruby', school_category, new Date()));
  }
}
