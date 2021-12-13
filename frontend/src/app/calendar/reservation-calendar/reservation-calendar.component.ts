import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigServiceService } from 'src/app/config-service.service';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss']
})
export class ReservationCalendarComponent implements OnInit {

  constructor(private router: ActivatedRoute, private configService: ConfigServiceService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params => {
      console.log(params['id']);
    }))
  }

}
