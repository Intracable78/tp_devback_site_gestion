import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ConfigServiceService } from 'src/app/config-service.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/interaction'; // a plugin
import { AdminCategoryService } from 'src/app/admin-category.service';
import { Category } from 'src/app/models/category';

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

  events: Event[] = [];
  errorsMsg: string;
  categories: Category[];
  eventsByCategoryId: Event[];
  selectedCategory: number;

  constructor(private configService: ConfigServiceService, public router: Router, private categoryService: AdminCategoryService) {
    this.loadAllEvents()
    this.loadGategories();
  }

  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin,
      interactionPlugin,
      timeGridPlugin,
    ],

    initialView: 'dayGridDay',
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
    eventClick: (e) => {
      this.router.navigate(['/calendar/reservation/' + e.event._def.publicId], { queryParams: { id: e.event._def.publicId } });
    },

  };


  loadAllEvents(): void {
    this.configService.getConfigs().subscribe((events: Event[]) => {
      this.calendarOptions.events = events;
    });
  }

  loadGategories(): void {
    this.categoryService.getCategory().subscribe((category: Category[]) => {
      this.categories = category;
    })
  }

  loadEventsBySelectedCategory(categoryId: string): void {
    const intCategoryId = parseInt(categoryId, 10);
    if (!Number.isInteger(intCategoryId)) {
      this.loadAllEvents();
    }
    else {
      console.log(intCategoryId)
      this.configService.getConfigsById(intCategoryId).subscribe((event: Event[]) => {
        console.log(event)
        this.eventsByCategoryId = event;
        this.calendarOptions.events = this.eventsByCategoryId;
        console.log(this.eventsByCategoryId);
      })
    }
  }

}
