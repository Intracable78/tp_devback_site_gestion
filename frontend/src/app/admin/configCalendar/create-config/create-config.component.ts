import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AdminCategoryService } from 'src/app/admin-category.service';
import { ConfigServiceService } from 'src/app/config-service.service';
import { Category } from 'src/app/models/category';
import { Config } from '../../../models/config';

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.scss']
})
export class CreateConfigComponent implements OnInit {

  newConfig = new Config();
  categories: Category[];

  constructor(private configService: ConfigServiceService, private categoryService: AdminCategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  addConfig(): Subscription {

    return this.configService.postConfig(this.newConfig).subscribe();

  }

  getCategory() {
    this.categoryService.getCategory().subscribe((categories: Category[]) => {

      this.categories = categories

      console.log(this.categories)

    });
  }



}
