import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testprojet';





  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}








//
//
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from './dialog/dialog.component';
// import { ApiService } from './_services/api.service';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'testprojet';
//
//   displayedColumns: string[] = ['materielId', 'materielMarque', 'materielRef', 'locId','categorie' ,'date' ,'etat', 'description', 'action'];
//   dataSource!: MatTableDataSource<any>;
//
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;
//
//   constructor(private dialog: MatDialog, private api: ApiService) {}
//
//   ngOnInit() {
//     this.getAllMateriels();
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
//   editproduct (row: any){
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
//   deleteProduct (id: number) {
//     this.api.deleteMateriel(id)
//       .subscribe({
//         next: (res) =>{
//           alert('Product deleted')
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
