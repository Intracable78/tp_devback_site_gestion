import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ConfigServiceService } from 'src/app/config-service.service';
import { Config } from '../../../models/config';

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.scss']
})
export class CreateConfigComponent implements OnInit {

  newConfig = new Config();

  constructor(private configService: ConfigServiceService) { }

  ngOnInit(): void {
  }

  addConfig(): Subscription {
  
   return this.configService.postConfig(this.newConfig).subscribe();

  }

}
