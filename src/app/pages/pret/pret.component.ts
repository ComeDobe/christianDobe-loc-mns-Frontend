// // import { Component } from '@angular/core';
// //
// // @Component({
// //   selector: 'app-pret',
// //   templateUrl: './pret.component.html',
// //   styleUrls: ['./pret.component.css']
// // })
// // export class PretComponent {
// //
// // }
//
//



import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from "../../_services/core.service";
import { ReservationService } from "../../_services/reservation.service";
import { UserService } from "../../_services/user.service";
import { User } from "../../models/register.model";

@Component({
  selector: 'app-pret',
  templateUrl: './pret.component.html',
  styleUrls: ['./pret.component.scss']
})
export class PretComponent implements OnInit {
  empForm: FormGroup;
  row: any = null;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  rowData: any;

  constructor(
    private _fb: FormBuilder,
    private reservationService: ReservationService,
    private userService: UserService,
    private _dialogRef: MatDialogRef<PretComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
  ) {
    this.empForm = this._fb.group({
      materielId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      // materielId: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      materielQuantite: ['', Validators.required],
      pretDescription: ['', Validators.required],
    });
  }


  // onFormSubmit() {
  //   console.log('Form values:', this.empForm.value); // Vérifier les valeurs du formulaire
  //   if (this.empForm.valid) {
  //     const pretData = {
  //       ...this.empForm.value,
  //       materielId: this.data?.materielId
  //     };
  //
  //     this.reservationService.reserveMateriel(
  //       pretData.materielId,
  //       pretData.dateDebut,
  //       pretData.dateFin,
  //       pretData.pretDescription,
  //       pretData.materielQuantite
  //     ).subscribe({
  //       next: (val: any) => {
  //         this._coreService.openSnackBar('Materiel reserved successfully!');
  //         this._dialogRef.close(true);
  //       },
  //       error: (err: any) => {
  //         console.error(err);
  //       },
  //     });
  //   } else {
  //     console.error('Form is not valid');
  //   }
  // }

  onFormSubmit() {

    console.log('Form values:', this.empForm.value); // Vérifier les valeurs du formulaire
    if (this.empForm.valid) {
      const materielId = this.empForm.value.materielId;
      if (materielId) {
        const pretData = {
          ...this.empForm.value,
          materielId: parseInt(materielId) // Convertir en nombre entier
        };

        this.reservationService.reserveMateriel(
          pretData.materielId,
          pretData.dateDebut,
          pretData.dateFin,
          pretData.pretDescription,
          pretData.materielQuantite
        ).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Materiel reserved successfully!');
            this._dialogRef.close(true);
            this.empForm.reset(); // Réinitialiser les valeurs du formulaire
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        console.error('Invalid materielId');
      }
    } else {
      console.error('Form is not valid');
    }
  }

  reserveMateriel(materielId: number, dateDebut: string, dateFin: string, pretDescription: string, materielQuantite: string) {
    this.reservationService.reserveMateriel(materielId, dateDebut, dateFin, pretDescription, materielQuantite).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Materiel reserved successfully!', 'done');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
  }

}






