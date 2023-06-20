

import { Router } from '@angular/router';
import{User} from "../../models/register.model";
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';
import {RegistrationService} from "../../_services/registration.service";
import {ReactiveFormsModule} from "@angular/forms";
// import {UserDetailComponent} from "../user-detail/user-detail.component";

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  public users!: User[];
  dataSource!: MatTableDataSource<User>;

  displayedColumns: string[] = ['id', 'userFirstName', 'userLastName', 'userEmail', 'userMobile', 'userCity', 'userDate', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private apiService: RegistrationService, private router: Router, private confirmService: NgConfirmService, private toastService: NgToastService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // @ts-ignore
    this.apiService.getAllUsers()
      .subscribe({
        next: (res) => {
          // @ts-ignore
          this.users = res;
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  updateUser(userName: string) {
    this.router.navigate(['update', userName])
  }

  deleteUser(id: number) {
    this.confirmService.showConfirm("Are you sure want to Delete?",
      () => {
        //your logic if Yes clicked
        this.apiService.deleteUser(id)
          .subscribe({
            next: (res) => {
              this.toastService.success({ detail: 'SUCCESS', summary: 'Deleted Successfully', duration: 3000 });
              this.getUsers();
            },
            error: (err) => {
              this.toastService.error({ detail: 'ERROR', summary: 'Something went wrong!', duration: 3000 });
            }
          })
      },
      () => {
        //yor logic if No clicked
      })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
