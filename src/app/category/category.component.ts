import { Component, OnInit, Input, ErrorHandler } from '@angular/core';
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
    this.categoryService.getCategories().subscribe(
      (data)=>{
      this.categories = data;
      console.log(this.categories);
    },
    error =>{
      // console.log(error.message);
      // console.log(error.response);
      console.log('inside error');
      // this.error = error;
      // console.log(error);
    },
  ()=>{
    console.log('inside complete')
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
