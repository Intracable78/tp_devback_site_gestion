import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryListComponent} from './admin/category-list/category-list.component';
import { CreateConfigComponent } from './admin/configCalendar/create-config/create-config.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationCalendarComponent} from './calendar/reservation-calendar/reservation-calendar.component';

const routes: Routes = [
  {path: 'admin/category', component: CategoryListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'admin/config/create', component: CreateConfigComponent},
  {path: 'calendar/reservation/:id', component: ReservationCalendarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
