

import {User} from "../../models/register.model";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import {RegistrationService} from "../../_services/registration.service";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  selectedGender!: string;
  importantList: string[] = [

  ]

  registrationForm!: FormGroup;
  private userIdToUpdate!: number;
  public isUpdateActive: boolean = false;

  constructor(private fb: FormBuilder, private api: RegistrationService, private toastService: NgToastService, private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userFirstName: [''],
      userLastName: [''],
      userName: [''],
      userPassword: [''],
      userEmail: [''],
      userMobile: [''],
      userAdresse: [''],
      userCity: [''],
      userDate: [''],

    });

    this.activatedRoute.params.subscribe(val => {
      this.userIdToUpdate = val['id'];
      if (this.userIdToUpdate) {
        this.isUpdateActive = true;
        this.api.getRegisteredUserId(this.userIdToUpdate)
          .subscribe({
            next: (res) => {
              this.fillFormToUpdate(res);
            },
            error: (err) => {
              console.log(err);
            }
          })
      }
    })
  }
  submit() {
    this.api.RegisterNewUser(this.registrationForm.value)
      .subscribe(res => {
        this.toastService.success({ detail: 'SUCCESS', summary: 'Registration Successful', duration: 3000 });
        this.registrationForm.reset();
      });
  }

  fillFormToUpdate(user: User) {
    this.registrationForm.setValue({
      userFirstName: user.userFirstName,
      userLastName: user.userLastName,
      userEmail: user.userEmail,
      userMobile: user.userMobile,
      userAdresse: user.userAdresse,
      userCity: user.userCity,
      userDate: user.userDate,
      userName: user.userName,
      userPassword: user.userPassword,


    })
  }

  update() {
    this.api.updateUser(this.registrationForm.value, this.userIdToUpdate)
      .subscribe(res => {
        this.toastService.success({ detail: 'SUCCESS', summary: 'User Details Updated Successful', duration: 3000 });
        this.router.navigate(['list']);
        this.registrationForm.reset();
      });
  }


}
