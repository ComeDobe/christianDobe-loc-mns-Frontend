import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {UserAuthService} from "../../_services/user-auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']

})
export class UserComponent implements OnInit {
  // isAdmin: boolean = false; // Définissez la valeur par défaut



  message: any;
  constructor(private userService: UserService,   private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  logout() {
    this.userAuthService.logout();
    this.router.navigateByUrl('/login');


  }
}






