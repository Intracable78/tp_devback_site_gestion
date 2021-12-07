import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryListComponent } from './admin/category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { JwtInterceptor } from './Interceptor/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminCategoryService } from './admin-category.service';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'; 
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar/calendar.component'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/interaction'; // a plugin
import { CreateConfigComponent } from './admin/configCalendar/create-config/create-config.component'; // a plugin!
import {MatDialogModule} from '@angular/material/dialog';
import { ReservationCalendarComponent } from './calendar/reservation-calendar/reservation-calendar.component';
import { MatDialogConfig } from '@angular/material/dialog'



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
 
]);

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponentComponent,
    CalendarComponent,
    CreateConfigComponent,
    ReservationCalendarComponent,
  ],
  entryComponents: [ ReservationCalendarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    LayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    FullCalendarModule,
    MatDialogModule,


  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
