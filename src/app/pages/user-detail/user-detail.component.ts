// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-user-detail',
//   templateUrl: './user-detail.component.html',
//   styleUrls: ['./user-detail.component.css']
// })
// export class UserDetailComponent {
//
// }

// import { ApiService } from './../service/api.service';
import { RegistrationService} from "../../_services/registration.service";
import {User} from "../../models/register.model";
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId!: number;
  userDetails!: User;
  constructor(private activatedRoute: ActivatedRoute, private api: RegistrationService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(val => {
      this.userId = val['id'];
      this.fetchUserDetails(this.userId);
    })
  }

  fetchUserDetails(userId: number) {
    this.api.getRegisteredUserId(userId)
      .subscribe({
        next: (res) => {
          this.userDetails = res;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }


}
