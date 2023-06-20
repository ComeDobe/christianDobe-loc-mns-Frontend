//
//
//
//
// import { Router } from '@angular/router';
// import { User } from "../../models/register.model";
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatSort } from '@angular/material/sort';
// import { MatPaginator } from '@angular/material/paginator';
// import { NgConfirmService } from 'ng-confirm-box';
// import { NgToastService } from 'ng-angular-popup';
// import { PanneService } from "../../_services/panne.service";
// import {panne} from "../../models/panne.model";
//
// @Component({
//   selector: 'app-pannes-list',
//   templateUrl: './pannes-list.component.html',
//   styleUrls: ['./pannes-list.component.css']
// })
// export class PannesListComponent implements OnInit {
//   public pannes!: User[];
//   dataSource!: MatTableDataSource<User>;
//
//   displayedColumns: string[] = ['panneId',  'materielId', 'panneDescription',  'userName', 'imageUrl', 'action'];
//
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//   materielFilter: any;
//
//   constructor(
//     private panneService: PanneService,
//     private router: Router,
//     private confirmService: NgConfirmService,
//     private toastService: NgToastService
//   ) {}
//
//   ngOnInit() {
//     this.getPannes();
//   }
//
//   getPannes() {
//     this.panneService.getAllPannes().subscribe({
//       next: (res: panne[]) => {
//         // @ts-ignore
//         this.pannes= res;
//         this.dataSource = new MatTableDataSource(this.pannes);
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//       },
//       error: (err: any) => {
//         console.log(err);
//       }
//     });
//   }
//
//
//
//   updatePanne(panneId: string) {
//     // @ts-ignore
//     this.panneService.getPanne(panneId).subscribe(
//       (panne: panne) => {
//         this.router.navigate(['update', panneId]);
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//   }
//   deletePanne(panneId: number) {
//     this.confirmService.showConfirm(
//       "Are you sure want to Delete?",
//       () => {
//         this.panneService.deletePanne(panneId).subscribe({
//           next: (res) => {
//             this.toastService.success({
//               detail: 'SUCCESS',
//               summary: 'Deleted Successfully',
//               duration: 3000
//             });
//             this.getPannes();
//           },
//           error: (err) => {
//             this.toastService.error({
//               detail: 'ERROR',
//               summary: 'Something went wrong!',
//               duration: 3000
//             });
//           }
//         });
//       },
//       () => {
//       }
//     );
//   }
//
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//
//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }


// le code  au dessus fonctionne



import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';
import { PanneService } from "../../_services/panne.service";
import {Panne } from "../../models/panne.model";

@Component({
  selector: 'app-pannes-list',
  templateUrl: './pannes-list.component.html',
  styleUrls: ['./pannes-list.component.css']
})
export class PannesListComponent implements OnInit {
  public pannes!: Panne[];
  dataSource!: MatTableDataSource<Panne>;

  displayedColumns: string[] = ['panneId', 'materielId', 'panneDescription', 'userName', 'imageUrl', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  materielFilter: any;

  constructor(
    private panneService: PanneService,
    private router: Router,
    private confirmService: NgConfirmService,
    private toastService: NgToastService
  ) {}

  ngOnInit() {
    this.getPanne();
  }

  getPanne() {
    this.panneService.getAllPannes().subscribe({
      next: (res: Panne[]) => {
        this.pannes = res;
        this.dataSource = new MatTableDataSource(this.pannes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  updatePanne(panneId: number) {
    this.panneService.getPanne(panneId).subscribe(
      (panne: Panne) => {
        console.log('Panne to be updated:');
        console.log(panne);
        this.router.navigate(['update', panneId]);
      },
      (error: any) => {
        console.log('Error fetching panne:');
        console.error(error);
      }
    );
  }


  deletePanne(panneId: number) {
    this.confirmService.showConfirm(
      "Are you sure you want to delete?",
      () => {
        this.panneService.deletePanne(panneId).subscribe({
          next: (res) => {
            this.toastService.success({
              detail: 'SUCCESS',
              summary: 'Deleted Successfully',
              duration: 3000
            });
            this.getPanne();
          },
          error: (err) => {
            this.toastService.error({
              detail: 'ERROR',
              summary: 'Something went wrong!',
              duration: 3000
            });
          }
        });
      },
      () => {}
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
