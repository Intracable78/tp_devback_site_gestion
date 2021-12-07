import { Component, OnInit } from '@angular/core';
import { AdminCategoryService }  from '../../admin-category.service' ; 
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  dataSource = this.categories;
  displayedColumns: string[] = ['id', 'title', 'description', 'slug'];

  constructor(private categoryService: AdminCategoryService) { 

   
  }

  ngOnInit(): void {

    this.getCategory();
    
  }



  getItem(item: Category){
    console.log(item)
  }

  getCategory(){
    this.categoryService.getCategory().subscribe((categories: Category[]) => {

      this.categories = categories

      console.log(this.categories)
     
    });
  }

}
