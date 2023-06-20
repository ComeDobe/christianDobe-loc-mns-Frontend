// // import { Component } from '@angular/core';
// //
// // @Component({
// //   selector: 'app-reservation',
// //   templateUrl: './reservation.component.html',
// //   styleUrls: ['./reservation.component.css']
// // })
// // export class ReservationComponent {
// //
// // }
//
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import {PretComponent} from "../pret/pret.component";
// import {ReservationService} from "../../_services/reservation.service";
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import {CoreService} from "../../_services/core.service";
// import {DialogComponent} from "../dialog/dialog.component";
//
// @Component({
//   selector: 'app-reservation',
//   templateUrl: './reservation.component.html',
//   styleUrls: ['./reservation.component.scss']
// })
// export class ReservationComponent implements OnInit {
//   displayedColumns: string[] = [
//     'materielId',
//     'materielMarque',
//     'materielRef',
//     'typeId',
//     'reserved',
//     'materielDescription',
//     'action',
//   ];
//   isAdmin: boolean = false;
//   dataSource!: MatTableDataSource<any>;
//
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//
//   constructor(
//     private _dialog: MatDialog,
//     private  reservationService: ReservationService,
//     private _coreService: CoreService
//   ) {}
//
//   ngOnInit(): void {
//     this.getAllMateriels();
//   }
//
//   openAddEditEmpForm() {
//     const dialogRef = this._dialog.open(PretComponent);
//     dialogRef.afterClosed().subscribe({
//       next: (val) => {
//         if (val) {
//           this.getAllMateriels();
//         }
//       },
//     });
//   }
//
//   // openEditMateriel (row: any){
//   //   const dialogRef= this._dialog.open(PretComponent, {
//   //     width: '30%',
//   //     data: row
//   //   }).afterClosed().subscribe(val => {
//   //     if (val=='update'){
//   //       this.getAllMateriels()
//   //     }
//   //   })
//   // }
//
//   reserveMateriel(materielId: number) {
//     this.reservationService.reserveMateriel(materielId).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
//         this.getAllMateriels();
//       },
//       error: console.log,
//     });
//   }
//
//
//   getAllMateriels() {
//     this.reservationService.getAllsMateriels().subscribe({
//       next: (res) => {
//         this.dataSource = new MatTableDataSource(res);
//         this.dataSource.sort = this.sort;
//         this.dataSource.paginator = this.paginator;
//       },
//       error: console.log,
//     });
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
//
//   deleMateriel(id: number) {
//     this.reservationService.deleteMateriel(id).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Employee deleted!', 'done');
//         this.getAllMateriels();
//       },
//       error: console.log,
//     });
//   }
//
//   openEditForm(data: any) {
//     const dialogRef = this._dialog.open(PretComponent, {
//       data,
//     });
//
//     dialogRef.afterClosed().subscribe({
//       next: (val) => {
//         if (val) {
//           this.getAllMateriels();
//         }
//       },
//     });
//   }
// }



// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { PretComponent } from "../pret/pret.component";
// import { ReservationService } from "../../_services/reservation.service";
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { CoreService } from "../../_services/core.service";
// import { DialogComponent } from "../dialog/dialog.component";
// import { tap, catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
//
//
// @Component({
//   selector: 'app-reservation',
//   templateUrl: './reservation.component.html',
//   styleUrls: ['./reservation.component.scss']
// })
// export class ReservationComponent implements OnInit {
//   displayedColumns: string[] = [
//     'materielId',
//     'materielMarque',
//     'materielRef',
//     'typeId',
//     'reserved',
//     'materielDescription',
//     'action',
//   ];
//   isAdmin: boolean = false;
//   dataSource!: MatTableDataSource<any>;
//
//
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//   private _http: any;
//
//   constructor(
//     private _dialog: MatDialog,
//     private reservationService: ReservationService,
//     private _coreService: CoreService
//   ) {}
//
//
//   ngOnInit(): void {
//     this.getAllMateriels();
//   }
//
//   openAddEditEmpForm() {
//     const dialogRef = this._dialog.open(PretComponent);
//     dialogRef.afterClosed().subscribe({
//       next: (val) => {
//         if (val) {
//           this.getAllMateriels();
//         }
//       },
//     });
//   }
//
//   getAllMateriels() {
//     this.reservationService.getAllsMateriels().subscribe({
//       next: (res) => {
//         this.dataSource = new MatTableDataSource(res);
//         this.dataSource.sort = this.sort;
//         this.dataSource.paginator = this.paginator;
//       },
//       error: console.log,
//     });
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
//
//   deleteMateriel(id: number) {
//     this.reservationService.deleteMateriel(id).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Materiel deleted!', 'done');
//         this.getAllMateriels();
//       },
//       error: console.log,
//     });
//   }
//
//   openEditForm(row: any) {
//     const dialogRef = this._dialog.open(PretComponent, {
//       data : row,
//     });
//
//     dialogRef.afterClosed().subscribe({
//       next: (val) => {
//         if (val) {
//           this.getAllMateriels();
//         }
//       },
//     });
//   }
//
//   reserveMateriel(materielId: number) {
//     this.reservationService.reserveMateriel(materielId).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
//         this.getAllMateriels();
//       },
//       error: console.log,
//     });
//   }
// }




// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { PretComponent } from "../pret/pret.component";
// import { ReservationService } from "../../_services/reservation.service";
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { CoreService } from "../../_services/core.service";
// import { tap, catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
// import {FormGroup} from "@angular/forms";
//
// @Component({
//   selector: 'app-reservation',
//   templateUrl: './reservation.component.html',
//   styleUrls: ['./reservation.component.scss']
// })
// export class ReservationComponent implements OnInit {
//
//   displayedColumns: string[] = [
//     'materielId',
//     'materielMarque',
//     'materielRef',
//     'typeId',
//     'reserved',
//     'materielDescription',
//     'action',
//   ];
//   isAdmin: boolean = false;
//   dataSource!: MatTableDataSource<any>;
//
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//   empForm: any;
//
//   constructor(
//     private _dialog: MatDialog,
//     private reservationService: ReservationService,
//     private _coreService: CoreService
//   ) {}
//
//   ngOnInit(): void {
//     this.getAllMateriels();
//   }
//
//   openAddEditEmpForm() {
//     const dialogRef = this._dialog.open(PretComponent);
//     dialogRef.afterClosed().subscribe((val) => {
//       if (val) {
//         this.getAllMateriels();
//       }
//     });
//   }
//
//   getAllMateriels() {
//     this.reservationService.getAllsMateriels().subscribe({
//       next: (res) => {
//         this.dataSource = new MatTableDataSource(res);
//         this.dataSource.sort = this.sort;
//         this.dataSource.paginator = this.paginator;
//       },
//       error: console.error,
//     });
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
//
//   deleteMateriel(id: number) {
//     this.reservationService.deleteMateriel(id).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Materiel deleted!', 'done');
//         this.getAllMateriels();
//       },
//       error: console.error,
//     });
//   }
//
//   openEditForm(row: any) {
//     const dialogRef = this._dialog.open(PretComponent, {
//       data: row,
//     });
//
//     dialogRef.afterClosed().subscribe((val) => {
//       if (val) {
//         this.getAllMateriels();
//       }
//     });
//   }
//
//   reserveMateriel() {
//     // Assurez-vous d'avoir défini ces variables avec les bonnes valeurs
//     const materielId = this.empForm.get('materielId').value;
//     const dateDebut = this.empForm.get('dateDebut').value;
//     const dateFin = this.empForm.get('dateFin').value;
//     const pretDescription = this.empForm.get('pretDescription').value;
//     const materielQuantite = this.empForm.get('materielQuantite').value;
//
//     this.reservationService.reserveMateriel(materielId, dateDebut, dateFin, pretDescription, materielQuantite).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
//         // Si vous souhaitez effectuer une autre action après la réservation
//       },
//       error: (err) => {
//         console.error(err);
//       },
//     });
//   }
// }



import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PretComponent } from "../pret/pret.component";
import { ReservationService } from "../../_services/reservation.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from "../../_services/core.service";
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Materiel } from 'src/app/models/materiel.model';
import { ProlongerComponent } from '../prolonger/prolonger.component';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  materiel ?: Materiel[];  // Ajouter cette ligne

  displayedColumns: string[] = [
    'materielId',
    'materielMarque',
    'materielRef',
    'typeId',
    'reserved',
    'materielDescription',
    'action',
  ];
  isAdmin: boolean = false;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  empForm: FormGroup;

  constructor(
    private _dialog: MatDialog,
    private reservationService: ReservationService,
    private _coreService: CoreService,
    private _fb: FormBuilder
  ) {
    this.empForm = this._fb.group({
      materielId: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      pretDescription: ['', Validators.required],
      materielQuantite: ['', Validators.required],
      nouvelleDateFin: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllMateriels();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(PretComponent);
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this.getAllMateriels();
      }
    });
  }

  getAllMateriels() {
    this.reservationService.getAllsMateriels().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.error,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteMateriel(id: number) {
    this.reservationService.deleteMateriel(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Materiel deleted!', 'done');
        this.getAllMateriels();
      },
      error: console.error,
    });
  }

  openEditForm(row: any) {
    const dialogRef = this._dialog.open(PretComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this.getAllMateriels();
      }
    });
  }

  reserveMateriel() {
    const materielId = this.empForm.get('materielId')?.value;
    const dateDebut = this.empForm.get('dateDebut')?.value;
    const dateFin = this.empForm.get('dateFin')?.value;
    const pretDescription = this.empForm.get('pretDescription')?.value;
    const materielQuantite = this.empForm.get('materielQuantite')?.value;

    this.reservationService.reserveMateriel(materielId, dateDebut, dateFin, pretDescription, materielQuantite).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
        this.empForm.reset();
        this.getAllMateriels();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }



  openProlongerDialog(): void {
    const dialogRef = this._dialog.open(ProlongerComponent, {
      width: '400px',
      disableClose: true, // Empêcher la fermeture de la boîte de dialogue en cliquant à l'extérieur
    });

    dialogRef.afterClosed().subscribe(result => {
      // Traitez le résultat de la boîte de dialogue si nécessaire
    });
  }


  prolongerPret() {
    const materielId = this.empForm.get('materielId')?.value;
    const nouvelleDateFin = this.empForm.get('nouvelleDateFin')?.value;
    const pretDescription = this.empForm.get('pretDescription')?.value;

    // @ts-ignore
    this.reservationService.prolongerPret(materielId, nouvelleDateFin, pretDescription).subscribe(
      (res: any) => {
        this._coreService.openSnackBar('Prolongation successful!', 'done');
        this.empForm.reset();
        this.getAllMateriels();
      },
      (err: any) => {
        console.error(err);
      }
    );
  }


}









//   reserveMateriel(row: any) {
//     const materielId = row.materielId;
//     const typeId = row.type.typeLibelle;
//     const materielMarque = row.materielMarque;
//     const materielRef = row.materielRef;
//     const materielDescription = row.materielDescription;
//
//     const dialogRef = this._dialog.open(PretComponent, {
//       width: '30%',
//       data: {
//         materielId: materielId,
//         typeId: typeId,
//         materielMarque: materielMarque,
//         materielRef: materielRef,
//         materielDescription: materielDescription
//       }
//     });
//
//     dialogRef.afterClosed().subscribe(val => {
//       if (val === 'reserve') {
//         this.reservationService.reserveMateriel(materielId).subscribe({
//           next: (res) => {
//             this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
//             this.getAllMateriels();
//           },
//           error: console.log,
//         });
//       }
//     });
//   }
// }





//   openEditForm(row: any) {
//     const dialogRef = this._dialog.open(PretComponent, {
//       data: row,
//     });
//
//     dialogRef.afterClosed().subscribe((val) => {
//       if (val) {
//         this.getAllMateriels();
//       }
//     });
//   }
//
//   reserveMateriel(materielId: number, materielMarque: string, materielRef: string, materielDescription: string) {
//     this.reservationService.reserveMateriel(materielId).subscribe({
//       next: (res) => {
//         this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
//         this.getAllMateriels();
//       },
//       error: console.log,
//     });
//   }
// }
