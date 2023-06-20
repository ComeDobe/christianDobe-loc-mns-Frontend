


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { DialogComponent } from './pages/dialog/dialog.component';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MaterielsComponent} from "./pages/materiels/materiels.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';


import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import {CalendarCommonModule, CalendarModule} from 'angular-calendar';
import {FullCalendarModule} from "@fullcalendar/angular";
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RegistrationListComponent } from './pages/registration-list/registration-list.component';
import { CreateRegistrationComponent } from './pages/create-registration/create-registration.component';


import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import{InscriptionComponent} from "./pages/inscription/inscription.component";
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PretComponent } from './pages/pret/pret.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PannesComponent } from './pages/pannes/pannes.component';
import { PannesListComponent } from './pages/pannes-list/pannes-list.component';
import { ProlongerComponent } from './pages/prolonger/prolonger.component';



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    DialogComponent,
    MaterielsComponent,
    DashboardComponent,
    SidenavComponent,
    PageInscriptionComponent,
    UserDetailComponent,
    RegistrationListComponent,
    CreateRegistrationComponent,
    InscriptionComponent,
    ReservationComponent,
    PretComponent,
    PannesComponent,
    PannesListComponent,
    ProlongerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,

    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    FullCalendarModule,
    NgToastModule,
    NgConfirmModule,
    MatChipsModule,
    MatCardModule,
    MatSnackBarModule




  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,

      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


