import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ConfigServiceService } from 'src/app/config-service.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,

]);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  public events: Event[] = [];
  public errorsMsg: string;





  constructor(private configService: ConfigServiceService, public router: Router) {
    this.configService.getConfigs().subscribe((events: Event[]) => {
      this.calendarOptions.events = events;
      console.log(events)
    });


  }

  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin,
      interactionPlugin,
      timeGridPlugin,
    ],

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
    dayMaxEvents: true,

    eventClick: (info) => {
      //this.router.navigate(['calendar/reservation', { id: info.event.id }]  )
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
