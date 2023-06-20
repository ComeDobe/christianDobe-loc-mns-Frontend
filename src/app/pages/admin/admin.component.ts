


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PretComponent } from "../pret/pret.component";
import { AdminService } from "../../_services/admin.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from "../../_services/core.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Materiel } from 'src/app/models/materiel.model';
import { ProlongerComponent } from '../prolonger/prolonger.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  materiel?: Materiel[];  // Ajouter cette ligne
  pretsEnAttente: any[] = [];

  displayedColumns: string[] = [
    'pretId',
    'dateDebut',
    'dateFin',
    'pretDescription',
    'pretQuantite',
    'userName',
    // 'pretValide',
    // 'prolongationValide',
    'action',
  ];
  isAdmin: boolean = false;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  empForm: FormGroup;

  constructor(
    private _dialog: MatDialog,
    private adminService: AdminService,
    private _coreService: CoreService,
    private _fb: FormBuilder
  ) {
    this.empForm = this._fb.group({
      pretId: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      pretDescription: ['', Validators.required],
      pretQuantite: ['', Validators.required],
      userName: ['', Validators.required],
      // pretValide: ['', Validators.required],
      // prolongationValide: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getPendingPrets();
  }

  getPendingPrets(): void {
    this.adminService.getPendingPrets()
      .subscribe(prets => {
        this.pretsEnAttente = prets;
        this.dataSource = new MatTableDataSource<any>(prets);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


  validerReservation(pretId: number): void {
    this.adminService.validerReservation(pretId)
      .subscribe(() => {
        // La réservation a été validée avec succès
        // Mettez à jour les données si nécessaire
        this.getPendingPrets();
      });
  }

  validerProlongation(pretId: number): void {
    this.adminService.validerProlongation(pretId)
      .subscribe(() => {
        // La prolongation a été validée avec succès
        // Mettez à jour les données si nécessaire
        this.getPendingPrets();
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(PretComponent);
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        // this.getAllMateriels();
      }
    });
  }

}
