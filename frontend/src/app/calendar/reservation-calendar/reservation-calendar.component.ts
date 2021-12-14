import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigServiceService } from 'src/app/config-service.service';
import { NgForm } from '@angular/forms';
import { ReservationService } from 'src/app/reservation.service';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss']
})
export class ReservationCalendarComponent implements OnInit {
  eventId: string;

  constructor(private router: ActivatedRoute, private configService: ConfigServiceService, private reservationService: ReservationService, private routerNav: Router) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params => {
      this.eventId = params['id'];
    }))
  }

  reservation(data: NgForm) {
    let userId = localStorage.getItem('user_id');
    this.reservationService.reservationCourse(userId, this.eventId).subscribe((res) => {
      this.routerNav.navigate(['calendar']);
    })
  }

}
