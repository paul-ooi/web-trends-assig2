import { Component, OnInit, Input } from '@angular/core';
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
  selectedCategory : Category;

  error : any;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.getCategories();
    this.getParentCategories();
  }
  
  getCategories() : void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    },
    error =>{
      // console.log(error.message);
      // console.log(error.response);
      this.error = error.name + ": " + error.statusText
      console.log(error);
    });    
  }

  getParentCategories() :void {
    this.categoryService.getParentCategories().subscribe(data => {
      this.parentCategories = data;
      console.log(this.parentCategories);
    }); 
  }

  selectValue() :void {
    let selected = document.querySelector('#category option:checked').textContent;
    console.log(selected);
    this.categoryService.getSelectedCategory(selected).subscribe(data => {
      this.selectedCategory = data
      console.log(this.selectedCategory);
    } );
  }
}
