import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  parentCategories: Category[];
  response : any;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.getCategories();
    this.getParentCategories();
  }
  
  getCategories() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    });    
  }

  getParentCategories() {
    this.categoryService.getParentCategories().subscribe(data => {
      this.parentCategories = data;
      console.log(this.parentCategories);
    }); 
  }
}
