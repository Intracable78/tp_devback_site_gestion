import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ConfigServiceService } from 'src/app/config-service.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

 public events : Event[] = [];
 public errorsMsg: string;
 

  constructor(private configService: ConfigServiceService, private router: Router) {
    this.configService.getConfigs().subscribe((events : Event[]) => {
      this.calendarOptions.events = events;
    });


   }
  
  calendarOptions: CalendarOptions = {
  
    initialView: 'dayGridDay',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [],
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    locale: 'fr',
    timeZone: 'UTC',
    eventColor: '#378006',
    businessHours: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [ 1, 2, 3, 4 ], // Monday - Thursday
    
      startTime: '10:00', // a start time (10am in this example)s
      endTime: '18:00', // an end time (6pm in this example)
    },
   
    eventClick: function(info) {
      window.open("http://localhost:4200/calendar/reservation/" + info.event.id);
    }
  };

  handleDateClick(arg: any) {
    console.log('date click! ' + arg.dateStr)
  }


  /*function(info){
    this.router.navigate(['calendar/reservation/' + info.event.id]);
    }, */


}
