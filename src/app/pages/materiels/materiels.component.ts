

import { Materiel } from '../../models/materiel.model';
import { MaterielService } from '../../_services/materiel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../_services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';

@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.css']
})
export class MaterielsComponent implements OnInit {
  title = 'testprojet';

  displayedColumns: string[] = ['materielId', 'materielMarque', 'materielRef', 'locId','typeId','date' ,'materielQuantite', 'materielDescription', 'action'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  router: any;

  constructor(private dialog: MatDialog, private api: ApiService, private location: Location) {}

  ngOnInit() {
    this.getAllMateriels();
  }

  goBack() {
    this.location.back();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val=>{
      if(val =='save') {
        this.getAllMateriels();
      }
    });
  }

  getAllMateriels() {
    this.api.getAllMateriels().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Error while fetching records');
      },
    });
  }

  updateMateriel (row: any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val=='update'){
        console.log('Material updated successfully');
        this.getAllMateriels();
        // this.router.navigateByUrl('/forbidden');
      }
    })
  }

  deleteMateriel (id: number) {
    this.api.deleteMateriel(id)
      .subscribe({
        next: (res) =>{
          alert('Product deleted');
          this.getAllMateriels(); // Mise à jour de la liste des matériels après la suppression
        },
        error: (err) =>{
          alert("Error while deleting product")
        }
      })
  }

  addMateriel() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if (val == 'add') {
        console.log('New material added successfully');
        this.getAllMateriels();
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



// ce code fonctionne

// import { Materiel } from '../../models/materiel.model';
// import { MaterielService } from '../../_services/materiel.service';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { ApiService } from '../../_services/api.service';
// import { DialogComponent } from '../dialog/dialog.component';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { Location } from '@angular/common';
// @Component({
//   selector: 'app-materiels',
//   templateUrl: './materiels.component.html',
//   styleUrls: ['./materiels.component.css']
// })
// export class MaterielsComponent implements OnInit {
//   title = 'testprojet';
//
//   displayedColumns: string[] = ['materielId', 'materielMarque', 'materielRef', 'locId','typeId','date' ,'stock', 'materielDescription', 'action'];
//   // isAdmin: boolean = false;
//   dataSource!: MatTableDataSource<any>;
//
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//
//   constructor(private dialog: MatDialog, private api: ApiService, private location: Location) {}
//
//   ngOnInit() {
//     // this.isAdmin = this.userService.isAdmin();
//     // console.log('isAdmin:', this.isAdmin); // Vérifiez la valeur de isAdmin dans la console
//     this.getAllMateriels();
//   }
//   goBack() {
//     this.location.back();
//   }
//
//   openDialog() {
//     this.dialog.open(DialogComponent, {
//       width: '30%',
//     }).afterClosed().subscribe(val=>{
//       if(val =='save') {
//         this.getAllMateriels();
//       }
//     });
//   }
//
//   getAllMateriels() {
//     this.api.getMateriels().subscribe({
//       next: (res) => {
//         this.dataSource = new MatTableDataSource<any>(res);
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//       },
//       error: (err) => {
//         alert('Error while fetching records');
//       },
//     });
//   }
//
//
//   editMateriel (row: any){
//     this.dialog.open(DialogComponent, {
//       width: '30%',
//       data: row
//     }).afterClosed().subscribe(val => {
//       if (val=='update'){
//         this.getAllMateriels()
//       }
//     })
//   }
//
//   deleteMateriel (id: number) {
//     this.api.deleteMateriel(id)
//       .subscribe({
//         next: (res) =>{
//           alert('Product deleted');
//           this.getAllMateriels(); // Mise à jour de la liste des matériels après la suppression
//         },
//         error: (err) =>{
//           alert("error while deleting product")
//         }
//       })
//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//
//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

