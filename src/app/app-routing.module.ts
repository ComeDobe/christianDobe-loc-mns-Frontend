import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {UserComponent} from "./pages/user/user.component";
import {LoginComponent} from "./pages/login/login.component";
import {ForbiddenComponent} from "./pages/forbidden/forbidden.component";
import { AuthGuard } from './_auth/auth.guard';
import { MaterielsComponent} from './pages/materiels/materiels.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SidenavComponent} from "./pages/sidenav/sidenav.component";
import {CreateRegistrationComponent} from "./pages/create-registration/create-registration.component";
import{RegistrationListComponent} from "./pages/registration-list/registration-list.component";
import{UserDetailComponent} from "./pages/user-detail/user-detail.component";
import {InscriptionComponent} from "./pages/inscription/inscription.component";
import {ReservationComponent} from "./pages/reservation/reservation.component";
import {PretComponent} from "./pages/pret/pret.component";
import {PannesComponent} from "./pages/pannes/pannes.component";
import {PannesListComponent} from "./pages/pannes-list/pannes-list.component";
import {ProlongerComponent} from "./pages/prolonger/prolonger.component";



const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  // { path: 'user', component: UserComponent, canActivate:[AuthGuard], data:{roles:['User','Admin']} } ,
  {
    path: 'user',
    canActivate: [AuthGuard],
    data: { roles: ['User', 'Admin'] },
    children: [
      {
        path: '',
        component: UserComponent,
        children: [
          {
            path: 'reservation',
            component: ReservationComponent
          }
        ]
      }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'materiels', component: MaterielsComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},

  { path: 'dashboard', component: DashboardComponent},
  { path: 'sidenav', component: SidenavComponent},

  {path:"", redirectTo: "login", pathMatch: "full"},

  { path: 'register', component: CreateRegistrationComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'update/:id', component: CreateRegistrationComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'list', component: RegistrationListComponent },
  { path: 'pannelist', component: PannesListComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'inscription', component: InscriptionComponent},
  { path: 'reservation', component: ReservationComponent },
  { path: 'prolonger', component: ProlongerComponent },
  { path: 'pannes', component: PannesComponent },
  {path: 'pret', component: PretComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


